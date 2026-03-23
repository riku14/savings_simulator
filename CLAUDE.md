# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## ソース修正禁止ルール

ユーザーから明示的な指示がない限り、以下は行わない：

- 実装
- 既存コードのリファクタリング・整理
- コメント・docstring・型アノテーションの追加（変更していない箇所）
- エラーハンドリング・バリデーションの追加（指示されていない箇所）
- 依頼範囲を超えた「改善」

---

## 開発コマンド

すべてのコマンドは `frontend/` ディレクトリで実行する。

```bash
cd frontend
npm install        # 依存関係インストール
npm run dev        # 開発サーバー起動（http://localhost:5173）
npm run build      # 型チェック + ビルド（tsc && vite build）
npm run preview    # ビルド結果のプレビュー
```

バックエンドはまだ未実装。フロントは開発サーバーの `/api` プロキシ経由で `http://localhost:3001` に転送する設定になっている（`vite.config.ts`）。

---

## アーキテクチャ概要

貯金シミュレータ。フロントのみで動作するフェーズから、バックエンド（Hono + PostgreSQL）を繋ぎ込む段階的な構成を想定している。

### 技術スタック

| レイヤー | 技術 |
|---|---|
| フロントエンド | Vite + React 18 + TypeScript + Tailwind v4 |
| ルーティング | react-router-dom v6 |
| バックエンド | Hono + Node.js（未実装） |
| DB / ORM | PostgreSQL + Prisma（未実装） |

### フロントエンド構成（`frontend/src/`）

```
pages/        ← 画面単位のコンポーネント（routes に 1:1 対応）
components/   ← 再利用UIパーツ
lib/
  calc/       ← 計算ロジック（純粋関数、バックエンドに移行予定）
  api/        ← バックエンドAPIクライアント（将来実装）
  mock/       ← 開発用モックデータ
types/
  index.ts    ← アプリ全体の型定義（Input型・集計型・コンテナ型）
```

### ルーティング（`App.tsx`）

| パス | ページ | 機能 |
|---|---|---|
| `/` | HomePage | リンク一覧 |
| `/income` | IncomePage | 本業・副業手取り入力 → 合計計算 |
| `/monthly` | MonthlyPage | 目標支出・実績支出の入力と比較 |

### パスエイリアス

`@/` は `frontend/src/` に解決される（`vite.config.ts` の `resolve.alias` で設定済み）。

### 計算ロジックの場所

- `lib/calc/income.ts` — `calcIncome(mainJobNet, sideJobNet): IncomeInput`
- `lib/calc/monthly.ts` — `calcMonthlySummary(totalIncome, expenses[]): MonthlySummary`
- `lib/calc/nisa.ts` — NISA複利計算（未実装）

計算関数はすべて純粋関数。副作用なし。

### 型定義の構造（`types/index.ts`）

- `IncomeInput` — 収入入力値（本業・副業・合計手取り）
- `ExpenseItemInput` — 支出1項目（name + amount）
- `MonthlySummary` — 計算結果（収入合計・支出合計・余剰）
- `MonthlyRecord` — 月次収支全体のコンテナ（income + planExpenses + actualExpenses）

### モックデータ

- `lib/mock/income.ts` — IncomeInput のサンプル値
- `lib/mock/expenses.ts` — ExpenseItemInput[] のサンプル（8項目）

バックエンド繋ぎ込み時にモックを `lib/api/` に置き換える設計。

---

## ティーチャーとしての回答姿勢

コード説明・設計相談・レビューの際は以下を守る：

1. **なぜ？を必ず説明する** — コードの書き方だけでなく設計判断の理由を伝える
2. **Java/Spring Bootとの対応関係で説明する** — 既存知識を橋渡しに使う
3. **Layer分類を明示する** — 基本構文(L1)・概念理解(L2)・設計判断力(L3)のどこの話かを伝える
4. **正解を与えすぎない** — 設計判断は「判断基準」を教えて自分で決断させる

### Java ↔ React/Hono 対応マップ

| Java / Spring Boot | Vite + React / Hono |
|---|---|
| `Controller.java` | `pages/XxxPage.tsx`（ページコンポーネント） |
| `Service.java` | `hooks/useXxx.ts`（カスタムフック） |
| `Repository.java` | `lib/api/xxxApi.ts`（APIクライアント） |
| `DTO.java` | `types/index.ts`（型定義） |
| `@Bean` / DI コンテナ | React Context / TanStack Query |
| `@Transactional` | Prisma トランザクション |
| `application.properties` | `.env` |
| `pom.xml` | `package.json` |
| JPA Entity | Prisma Schema (`backend/prisma/schema.prisma`) |
| `@RestController` | `backend/src/routes/xxx.ts`（Hono Router） |
| `ResponseEntity` | `c.json()`（Hono Context） |
| Spring Security | Hono Middleware |

### 状態管理の判断フローチャート

```
このstateは何のコンポーネントが使うか？
│
├── 1つだけ ──────────────→ useState（コンポーネント内）
├── 親子間で複数 ──────────→ props（親に持ち上げ）
├── 兄弟コンポーネント間 ──→ 共通の親に持ち上げ + props
├── アプリ全体の設定値 ────→ useContext
└── サーバーから取得するデータ → TanStack Query（将来）
```

---

## 学習フェーズ別チェックリスト

### Phase 1（React基礎）完了基準
- [ ] このコンポーネントはいつ再レンダリングされるか即答できる
- [ ] useStateは何のための状態か説明できる
- [ ] useEffectはいつ発火するか・依存配列に何を入れるか説明できる
- [ ] このロジックはどのファイルに置くべきか判断できる

### Phase 2（貯蓄シミュレータ：フロントのみ）完了基準
- [ ] 計算結果が画面に表示される
- [ ] コンポーネント分割の理由を説明できる
- [ ] 後からバックエンドを追加しやすい設計になっている

### Phase 3（バックエンド：Hono + Prisma）完了基準
- [ ] Thunder ClientでCRUD操作が全て正常に返却される
- [ ] Prismaクライアントがシングルトンになっている（`backend/src/lib/prisma.ts`）

### Phase 4（フロント・バックつなぎ込み）完了基準
- [ ] 画面から入力したデータがDBに保存・取得できる

### Phase 5（UI改善）完了基準
- [ ] 自分が実生活で使いたいと思えたら完了

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

## ドキュメント参照

設計・仕様・タスク管理はすべて `docs/` 配下に集約している。コード説明・実装・レビューの際は必ずこちらを参照すること。

| ファイル | 内容 |
|---|---|
| [docs/要件定義書.md](./docs/要件定義書.md) | 機能要件・計算ロジック仕様 |
| [docs/設計書.md](./docs/設計書.md) | 画面設計・データモデル・ディレクトリ構成・型定義 |
| [docs/フェーズ計画.md](./docs/フェーズ計画.md) | フェーズ別タスク一覧・完了基準 |

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

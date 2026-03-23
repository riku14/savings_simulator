// ============================================================
// 入力型（ユーザーが登録するデータ）
// ============================================================

/** 収入入力 */
export interface IncomeInput {
    mainJobNet: number  // 本業手取り
    sideJobNet: number  // 副業手取り
    totalNet: number    // 合計手取り
}

/** 支出項目入力 */
export interface ExpenseItemInput {
    id: number
    name: string    // 項目名
    amount: number  // 金額
}

// ============================================================
// 集計型（計算結果）
// ============================================================

/** 月次収支サマリー */
export interface MonthlySummary {
    totalIncome: number   // 収入合計
    totalExpense: number  // 支出合計
    surplus: number       // 月次余剰（収入 - 支出）
}

// ============================================================
// コンテナ型（画面で扱うデータ）
// ============================================================

/** 月次収支レコード */
export interface MonthlyRecord {
    income: IncomeInput           // 収入（収入計算画面から参照）
    planExpenses: ExpenseItemInput[]    // 目標支出
    actualExpenses: ExpenseItemInput[]  // 実績支出
}
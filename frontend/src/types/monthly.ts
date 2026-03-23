// Input: 支出明細登録時
export interface ActualExpenseInput {
    categoryId: number
    amount: number
}

// Output: DB取得後（categoryNameはJOIN済み）
export interface ActualExpense {
    id: number
    monthlyRecordId: number
    categoryId: number
    categoryName: string
    amount: number
}

// Input: 月次実績登録時
export interface MonthlyRecordInput {
    year: number
    month: number
    actualExpenses: ActualExpenseInput[]
}

// Output: DB取得後
export interface MonthlyRecord {
    id: number
    year: number
    month: number
    actualExpenses: ActualExpense[]
    createdAt: Date
}

// 計算結果（DBなし・純粋関数の戻り値）
export interface MonthlySummary {
    totalIncome: number
    totalExpense: number
    surplus: number
    status: '黒字' | '赤字'
}
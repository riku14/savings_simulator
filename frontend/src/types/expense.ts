// Input: カテゴリ作成・更新時
export interface ExpenseCategoryInput {
    name: string
    targetAmount: number
    order: number
}

// Output: DB取得後
export interface ExpenseCategory {
    id: number
    name: string
    targetAmount: number
    order: number
    createdAt: Date
    updatedAt: Date
}
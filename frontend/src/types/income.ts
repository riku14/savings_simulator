// Input: フォーム送信時
export interface IncomeInput {
    mainJobNet: number
    sideJobNet: number
    totalNet: number
}

// Output: DB取得後
export interface Income {
    id: number
    mainJobNet: number
    sideJobNet: number
    totalNet: number
    updatedAt: Date
}
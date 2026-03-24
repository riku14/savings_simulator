import { ExpenseCategory, MonthlyRecordInput } from "@/types";

// 支出登録データ
export const mockExpenses: MonthlyRecordInput = {
    year: 2026,
    month: 3,
    actualExpenses: [
        { categoryId: 1, amount: 70000 }, // 家賃
        { categoryId: 2, amount: 40000 }, // 食費・日用品
        { categoryId: 3, amount: 50000 }, // NISA積立
        { categoryId: 4, amount: 10000 }, // 保険・年金
        { categoryId: 5, amount: 8000 }, // 通信費
        { categoryId: 6, amount: 30000 }, // 娯楽
        { categoryId: 7, amount: 10000 }, // サブスク
        { categoryId: 8, amount: 30000 }, // その他
    ]

}

// 目標支出データMock
export const mockTargetExpenses: ExpenseCategory[] = [
    { id: 1, name: '家賃', targetAmount: 70000, order: 1, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 2, name: '食費・日用品', targetAmount: 40000, order: 2, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 3, name: 'NISA積立', targetAmount: 100000, order: 3, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 4, name: '保険・年金', targetAmount: 10000, order: 4, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 5, name: '通信費', targetAmount: 10000, order: 5, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 6, name: '娯楽', targetAmount: 30000, order: 6, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 7, name: 'サブスク', targetAmount: 10000, order: 7, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 8, name: 'その他', targetAmount: 30000, order: 8, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
]



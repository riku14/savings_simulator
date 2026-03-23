import { ExpenseCategory } from "@/types";

const mockExpenses: ExpenseCategory[] = [
    { id: 1, name: '家賃', targetAmount: 70000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 2, name: '食費・日用品', targetAmount: 40000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 3, name: 'NISA積立', targetAmount: 100000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 4, name: '保険・年金', targetAmount: 10000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 5, name: '通信費', targetAmount: 10000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 6, name: '娯楽', targetAmount: 30000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 7, name: 'サブスク', targetAmount: 10000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
    { id: 8, name: 'その他', targetAmount: 30000, order: 5000, createdAt: new Date('2026-03-01T00:00:00.000Z'), updatedAt: new Date('2026-03-01T00:00:00.000Z') },
]

export default mockExpenses

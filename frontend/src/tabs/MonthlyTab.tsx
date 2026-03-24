import { mockExpenses, mockTargetExpenses } from "@/lib/mock/expenses";
import mockIncome from "@/lib/mock/income";
import { ExpenseCategory, IncomeInput, MonthlyRecordInput } from "@/types";

export default function MonthlyTab() {
    // 収入モックデータ
    const income: IncomeInput = mockIncome
    // 支出モックデータ
    const targetExpenses: ExpenseCategory[] = mockTargetExpenses
    // 支出モックデータ
    const expenses: MonthlyRecordInput = mockExpenses

    // 目標支出合計
    const totalTargetExpense = targetExpenses.reduce(
        (sum, value) => sum + value.targetAmount, 0
    )
    // 支出合計(実績)
    const totalExpense = expenses.actualExpenses.reduce(
        (sum, value) => sum + value.amount, 0
    )

    return (
        <div>
            <h1>月次収支画面</h1>

            {/* 収入合計 */}
            <div className="mb-2">
                <p className="">収入合計：$ {income.totalNet}</p>
            </div>
            {/* 支出合計 */}
            <div className="mb-2">
                <p className="">支出合計：$ {totalExpense}</p>
                <p>{(totalTargetExpense > totalExpense) ? '-' : '+'} {totalTargetExpense - totalExpense}円 (目標金額：{totalTargetExpense})</p>
            </div>
            {/* 月次余剰（ステータスも表示） */}
            <div>
                <p className="">余剰金額：$ {income.totalNet - totalExpense}</p>
            </div>
        </div >
    )
}
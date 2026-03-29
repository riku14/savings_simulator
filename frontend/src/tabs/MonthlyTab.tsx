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

    const surplus = income.totalNet - totalExpense
    const diffFromTarget = totalTargetExpense - totalExpense
    const isOverTarget = totalExpense > totalTargetExpense
    const budgetUsagePercent = Math.min(Math.round((totalExpense / totalTargetExpense) * 100), 100)

    return (
        <div>
            {/* ページタイトル */}
            <div className="mb-8">
                <div className="text-2xl font-semibold text-white">月次収支</div>
                <div className="text-sm text-[#555555] mt-1">{expenses.year}年{expenses.month}月のサマリー</div>
            </div>

            {/* KPI カード 3枚 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {/* 収入合計 */}
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5">
                    <div className="text-xs font-medium text-[#555555] uppercase tracking-wider">収入合計</div>
                    <div className="text-2xl font-bold text-white mt-2 tracking-tight">
                        ¥{income.totalNet.toLocaleString()}
                    </div>
                    <div className="text-xs text-[#555555] mt-1">月間手取り</div>
                </div>

                {/* 支出合計 */}
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5">
                    <div className="text-xs font-medium text-[#555555] uppercase tracking-wider">支出合計</div>
                    <div className="text-2xl font-bold text-white mt-2 tracking-tight">
                        ¥{totalExpense.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-xs font-semibold ${isOverTarget ? 'text-red-400' : 'text-emerald-400'}`}>
                            {isOverTarget ? '+' : '-'}¥{Math.abs(diffFromTarget).toLocaleString()}
                        </span>
                        <span className="text-xs text-[#555555]">目標比</span>
                    </div>
                </div>

                {/* 余剰金額 */}
                <div className={`rounded-[var(--radius-lg)] p-5 border ${
                    surplus >= 0
                        ? 'bg-emerald-950/30 border-emerald-900/40'
                        : 'bg-red-950/30 border-red-900/40'
                }`}>
                    <div className="text-xs font-medium text-[#555555] uppercase tracking-wider">余剰金額</div>
                    <div className={`text-2xl font-bold mt-2 tracking-tight ${surplus >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {surplus >= 0 ? '+' : ''}¥{surplus.toLocaleString()}
                    </div>
                    <div className="text-xs text-[#555555] mt-1">収入 − 支出</div>
                </div>
            </div>

            {/* 目標支出 プログレスバー */}
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5">
                <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-medium text-[#555555] uppercase tracking-wider">予算達成率</div>
                    <div className={`text-xs font-semibold ${isOverTarget ? 'text-red-400' : 'text-emerald-400'}`}>
                        {budgetUsagePercent}%
                    </div>
                </div>

                {/* プログレスバー */}
                <div className="h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${isOverTarget ? 'bg-red-500' : 'bg-emerald-500'}`}
                        style={{ width: `${budgetUsagePercent}%` }}
                    />
                </div>

                <div className="flex justify-between mt-3 text-xs text-[#555555]">
                    <span>実績 ¥{totalExpense.toLocaleString()}</span>
                    <span>目標 ¥{totalTargetExpense.toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}

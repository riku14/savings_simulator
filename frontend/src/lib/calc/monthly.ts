import { ExpenseItemInput, MonthlySummary } from "@/types";

/**
 * 月次収支算出関数
 * 
 * @param totalIncome 
 * @param expenses 
 * @returns 
 */
export function calcMonthlySummary(totalIncome: number, expenses: ExpenseItemInput[],): MonthlySummary {
    const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0)

    return {
        totalIncome,
        totalExpense,
        surplus: totalIncome - totalExpense,
    }
}
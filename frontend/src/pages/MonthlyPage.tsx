import mockExpenses from "@/lib/mock/expenses";
import mockIncome from "@/lib/mock/income";
import { ExpenseItemInput, IncomeInput } from "@/types";
import { useState } from "react";

export default function MonthlyPage() {
    const income: IncomeInput = mockIncome

    const [planExpenses] = useState<ExpenseItemInput[]>(
        mockExpenses.map(item => ({ ...item }))
    )

    const [actualExpenses, setActualExpenses] = useState<ExpenseItemInput[]>(
        mockExpenses.map(item => ({ ...item, amount: 0 }))
    )

    function handleActualChange(index: number, value: string) {
        setActualExpenses(
            actualExpenses.map((item, i) =>
                i === index ? { ...item, amount: Number(value) } : item
            )
        )
    }

    function handleSubmit() {
        console.log({ income, planExpenses, actualExpenses })
    }

    return (
        <div>
            <h1>月次収支画面</h1>

            {/* 目標 */}
            <section>
                <h2>目標支出</h2>
                <ul>
                    {planExpenses.map((expense) => (
                        <li key={expense.name}>
                            {expense.name}:{expense.amount.toLocaleString()}円
                        </li>
                    ))}
                </ul>
            </section>


            {/* 実績支出 */}
            <section>
                <h2>実績支出</h2>
                <ul>
                    {actualExpenses.map((expense, index) => (
                        <li key={expense.name}>
                            <label>
                                {expense.name}:
                                <input type="number" value={expense.amount} onChange={(e) => handleActualChange(index, e.target.value)} />
                            </label>
                        </li>
                    ))}
                </ul>

            </section>

            <button onSubmit={handleSubmit}></button>
        </div>
    )
}
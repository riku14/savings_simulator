import { useState } from "react"
import { IncomeInput } from "@/types"
import { calcIncome } from "@/lib/calc/income"

export default function IncomeTab() {
    const [income, setIncome] = useState<IncomeInput>({
        mainJobNet: 0,
        sideJobNet: 0,
        totalNet: 0,
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        const updated = calcIncome(
            name === 'mainJobNet' ? Number(value) : income.mainJobNet,
            name === 'sideJobNet' ? Number(value) : income.sideJobNet,
        )
        setIncome(updated)
    }
    return (
        <div>
            <h1>収入計算</h1>

            <label>本業手取り</label>
            <input type="text" inputMode="numeric" name="mainJobNet" value={income.mainJobNet} onChange={handleChange} />

            <label>副業手取り</label>
            <input type="text" inputMode="numeric" name="sideJobNet" value={income.sideJobNet} onChange={handleChange} />

            <p>合計：{income.totalNet.toLocaleString()}円</p>
        </div>
    )
}
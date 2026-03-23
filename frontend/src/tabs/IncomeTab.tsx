import { useState } from "react"
import type { Income, IncomeInput } from "@/types"
import { calcIncome } from "@/lib/calc/income"
import mockIncome from "@/lib/mock/income"

export default function IncomeTab() {
    const { mainJobNet: mainMock, sideJobNet: sideMock, totalNet: totalMock }: Income = mockIncome

    const [income, setIncome] = useState<IncomeInput>({
        mainJobNet: mainMock,
        sideJobNet: sideMock,
        totalNet: totalMock,
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target

        const next = value === "" ? 0 : Number(value)

        setIncome((prev) =>
            calcIncome(
                name === 'mainJobNet' ? next : prev.mainJobNet,
                name === 'sideJobNet' ? next : prev.sideJobNet,
            )
        )
    }

    // TODO: 登録APIつなぎこみ
    function handleSubmit() {
        console.log(`本業：${income.mainJobNet}, 副業：${income.sideJobNet}, 合計：${income.totalNet}`)
    }
    return (
        <div>
            <h1>収入計算</h1>

            <label>本業手取り</label>
            <input type="number" name="mainJobNet" value={income.mainJobNet} onChange={handleChange} />

            <label>副業手取り</label>
            <input type="number" name="sideJobNet" value={income.sideJobNet} onChange={handleChange} />

            <p>合計：{income.totalNet.toLocaleString()}円</p>

            <button onClick={handleSubmit}>保存</button>
        </div>
    )
}
import mockIncome from "@/lib/mock/income"
import type { Income, IncomeInput } from "@/types"
import { useState } from "react"

export default function IncomeTab() {
    const { mainJobNet: mainMock, sideJobNet: sideMock, totalNet: totalMock }: Income = mockIncome

    const [income, setIncome] = useState<IncomeInput>({
        mainJobNet: mainMock,
        sideJobNet: sideMock,
        totalNet: totalMock,
    })

    function calcIncome(mainJobNet: number, sideJobNet: number): IncomeInput {
        return {
            mainJobNet,
            sideJobNet,
            totalNet: mainJobNet + sideJobNet,
        }
    }

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
        <div className="max-w-md">
            {/* ページタイトル */}
            <div className="mb-8">
                <div className="text-2xl font-semibold text-white">収入計算</div>
                <div className="text-sm text-[#555555] mt-1">月間手取り収入を入力してください</div>
            </div>

            <div className="space-y-3">
                {/* 本業手取り */}
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5 focus-within:border-white/30 transition-colors">
                    <label className="text-xs font-medium text-[#555555] uppercase tracking-wider block mb-2">本業手取り</label>
                    <div className="flex items-baseline gap-2">
                        <input
                            type="number"
                            name="mainJobNet"
                            value={income.mainJobNet}
                            onChange={handleChange}
                            className="flex-1 min-w-0 w-auto bg-transparent text-2xl font-bold text-white border-none! outline-none! ring-0! focus:ring-0! p-0! m-0! [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="text-[#555555] text-sm shrink-0">円 / 月</span>
                    </div>
                </div>

                {/* 副業手取り */}
                <div className="bg-[#111111] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5 focus-within:border-white/30 transition-colors">
                    <label className="text-xs font-medium text-[#555555] uppercase tracking-wider block mb-2">副業手取り</label>
                    <div className="flex items-baseline gap-2">
                        <input
                            type="number"
                            name="sideJobNet"
                            value={income.sideJobNet}
                            onChange={handleChange}
                            className="flex-1 min-w-0 w-auto bg-transparent text-2xl font-bold text-white border-none! outline-none! ring-0! focus:ring-0! p-0! m-0! [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <span className="text-[#555555] text-sm shrink-0">円 / 月</span>
                    </div>
                </div>
            </div>

            {/* 合計表示 */}
            <div className="mt-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-[var(--radius-lg)] p-5">
                <div className="text-xs font-medium text-[#555555] uppercase tracking-wider mb-3">月間合計手取り</div>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white tracking-tight">
                        ¥{income.totalNet.toLocaleString()}
                    </span>
                    <span className="text-sm text-[#555555]">/ 月</span>
                </div>
                <div className="mt-3 pt-3 border-t border-[#2a2a2a] flex gap-6 text-xs text-[#555555]">
                    <span>本業 ¥{income.mainJobNet.toLocaleString()}</span>
                    <span>副業 ¥{income.sideJobNet.toLocaleString()}</span>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="mt-4 w-full bg-white text-black py-3.5 rounded-[var(--radius-md)] text-sm font-semibold hover:bg-white/90 active:bg-white/80 transition-colors cursor-pointer"
            >
                保存する
            </button>
        </div>
    )
}

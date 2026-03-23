import { IncomeInput } from "@/types";

/**
 * 合計収入の計算
 * @param mainJobNet 本業手取り額
 * @param sideJobNet 副業手取り額
 * @returns 
 */
export function calcIncome(mainJobNet: number, sideJobNet: number): IncomeInput {
    return {
        mainJobNet,
        sideJobNet,
        totalNet: mainJobNet + sideJobNet,
    }
}
export default function AssetPlanTab() {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-[#111111] border border-[#2a2a2a] flex items-center justify-center mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#555555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
            </div>
            <div className="text-lg font-semibold text-white mb-2">資産計画</div>
            <div className="text-sm text-[#555555] max-w-xs leading-relaxed">
                NISA・積立シミュレーションなど<br />資産計画機能を準備中です
            </div>
        </div>
    )
}

import { useState } from "react";
import IncomeTab from "./tabs/IncomeTab";
import MonthlyTab from "./tabs/MonthlyTab";
import NisaTab from "./tabs/AssetPlanTab";

type Tab = 'income' | 'monthly' | 'assetPlan'

const tabs: { id: Tab; label: string }[] = [
  { id: 'income', label: '収入計算' },
  { id: 'monthly', label: '月次収支' },
  { id: 'assetPlan', label: '資産計画' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('income');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="border-b border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[var(--radius-sm)] bg-white flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18"/>
                <path d="m19 9-5 5-4-4-3 3"/>
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white leading-none">貯蓄シミュレータ</div>
              <div className="text-xs text-[#555555] mt-0.5">資産形成サポート</div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="border-b border-[#2a2a2a]">
        <div className="max-w-3xl mx-auto px-6 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-4 text-sm font-medium transition-colors cursor-pointer border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'text-white border-white'
                  : 'text-[#555555] border-transparent hover:text-[#aaaaaa]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10">
        {activeTab === 'income' && <IncomeTab />}
        {activeTab === 'monthly' && <MonthlyTab />}
        {activeTab === 'assetPlan' && <NisaTab />}
      </main>
    </div>
  )
}

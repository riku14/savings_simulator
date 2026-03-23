import { useState } from "react";
import IncomeTab from "./tabs/IncomeTab";
import MonthlyTab from "./tabs/MonthlyTab";
import NisaTab from "./tabs/AssetPlanTab";

type Tab = 'income' | 'monthly' | 'assetPlan'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('income');

  return (
    <div>
      {/* TODO: タブUI */}
      <button className="mr-2" onClick={() => setActiveTab('income')}>収入計算</button>
      <button className="mr-2" onClick={() => setActiveTab('monthly')}>月次収支</button>
      <button className="mr-2" onClick={() => setActiveTab('assetPlan')}>資産計画</button>

      {/* 条件付きレンダリング */}
      {/* TODO: コンテンツUI */}
      {activeTab === 'income' && <IncomeTab />}
      {activeTab === 'monthly' && <MonthlyTab />}
      {activeTab === 'assetPlan' && <NisaTab />}

    </div>
  )
}
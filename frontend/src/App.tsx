import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import IncomePage from './pages/IncomePage'
import MonthlyPage from './pages/MonthlyPage'

function HomePage() {
  return (
    <div>
      <li>
        <ul>
          <Link to="/income">収入計算</Link>
        </ul>
        <ul>
          <Link to="/monthly">月次実績</Link>
        </ul>
      </li>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/monthly" element={<MonthlyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

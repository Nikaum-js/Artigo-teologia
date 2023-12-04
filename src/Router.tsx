import { Route, Routes } from 'react-router-dom'

import { Bibliografia } from './pages/bibliografia'
import { Home } from './pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bibliografia" element={<Bibliografia />} />
    </Routes>
  )
}

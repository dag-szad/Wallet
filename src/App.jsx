import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './assets/pages/RegisterPage/RegisterPage.jsx'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App

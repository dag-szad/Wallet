import { Routes, Route } from 'react-router-dom'
import { RegisterPage } from './assets/pages/RegisterPage/RegisterPage.jsx'
import { LoginPage } from './assets/pages/LoginPage/LoginPage.jsx'
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App

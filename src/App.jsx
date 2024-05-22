import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SharedLayout from './assets/pages/SharedLayout.jsx'

import { RegisterPage } from './assets/pages/RegisterPage/RegisterPage.jsx'
import { LoginPage } from './assets/pages/LoginPage/LoginPage.jsx'

import './App.scss'

function App() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '')
    const pageTitle = path.charAt(0).toUpperCase() + path.slice(1)
    document.title = `Wallet | ${pageTitle} page`
  }, [location])

  return (
    <SharedLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </SharedLayout>
  )
}

export default App

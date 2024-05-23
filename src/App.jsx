import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import SharedLayout from './assets/pages/SharedLayout.jsx'

import { RegisterPage } from './assets/pages/RegisterPage/RegisterPage.jsx'
import { LoginPage } from './assets/pages/LoginPage/LoginPage.jsx'
import { ErrorPage } from './assets/pages/ErrorPage/ErrorPage.jsx'

import './App.scss'

function App() {
  const location = useLocation()

  useEffect(() => {
    const knownPaths = ['register', 'login']
    const path = location.pathname.replace('/', '')

    if (knownPaths.includes(path)) {
      const pageTitle = path.charAt(0).toUpperCase() + path.slice(1) + ' page'
      document.title = `Wallet | ${pageTitle}`
    } else {
      document.title = 'Wallet | Page not found'
    }
  }, [location])

  return (
    <SharedLayout>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </SharedLayout>
  )
}

export default App

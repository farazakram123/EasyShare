import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

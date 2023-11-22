import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import SensorData from '../components/SensorData'
import Chats from '../components/Chats'
import Register from '../components/Register'
import { AuthProvider } from '../context/AuthContext'
import LoginForm from '../components/LoginForm' 
import PrivateRouters from './PrivateRouters'

export default function AppRouters() {
  return (
    <>
      <AuthProvider>
      <Routes>
            {/* <Route path='/' element={<LoginForm />} /> */}
            <Route index path="/" element={<PrivateRouters allowedRoles={['docente']} element={<SensorData />} />} />
            {/* <Route path='/home' element={<SensorData/>} /> */}
            <Route path='/register' element={<Register/>} />
        </Routes>
      </AuthProvider>
    </>
  )
}

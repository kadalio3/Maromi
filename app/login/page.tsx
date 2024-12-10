import LoginFormPage from '@/components/auth/login-form'
import React from 'react'

function LoginPage()  {
  return (
    <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <LoginFormPage />
    </div>
  )
}

export default LoginPage
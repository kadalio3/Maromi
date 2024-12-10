import React from 'react'
import { LoginButton } from '../button'
import Link from 'next/link'

const LoginFormPage = () => {
  return (
    <form className="space-y-6">
        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
            <input type="text" name="name" placeholder="Name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2"></span>
            </div>
        </div>
        <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" name="password" placeholder="**********" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5" />
            <div aria-live="polite" aria-atomic="true">
                <span className="text-sm text-red-500 mt-2"></span>
            </div>
        </div>
        <LoginButton />
        <p className="text-sm font-light text-gray-500">Dont have an account?
            <Link href="/register">
            <span className="font-medium pl-1 text-blue-600 hover:text-blue-700">Sign Up Here</span>
            </Link>
        </p>
    </form>
  )
}

export default LoginFormPage
'use client'

import { Eye, Lock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/paper-texture.png')] bg-cover bg-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
            <Lock className="text-white" size={22} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Reset Password
          </h1>
          <p className="text-sm text-blue-600 mt-1">
            Enter your new password below
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showNew ? 'text' : 'password'}
                placeholder="Enter new password"
                className="w-full rounded-lg border border-blue-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
              >
                <Eye size={18} />
              </button>
            </div>
            <p className="mt-2 text-xs text-blue-600">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Verify New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm new password"
                className="w-full rounded-lg border border-blue-200 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Update Button (Disabled state as shown) */}
          <button
            type="submit"
            disabled
            className="w-full rounded-lg bg-gray-300 py-2.5 text-white font-semibold cursor-not-allowed"
          >
            Update Password
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <div className="h-px flex-1 bg-gray-200" />
            or
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Back to Login */}
          <Link
            href="/login"
            className="block w-full text-center rounded-lg bg-blue-600 py-2.5 text-white font-semibold hover:bg-blue-700 transition"
          >
            Back to Login
          </Link>
        </form>
      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-xs text-blue-600 text-center px-4">
        Don&apos;t have an account?{' '}
        <Link href="/signup" className="underline">
          Sign up here
        </Link>
      </p>
    </div>
  )
}

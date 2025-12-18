import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-outfit font-bold text-gray-900">School Management System</span>
          </Link>
          <h2 className="text-3xl font-outfit font-bold text-gray-900">Reset your password</h2>
          <p className="mt-2 text-gray-600">Enter your email address and we'll send you a reset link</p>
        </div>

        <ForgotPasswordForm />

        <div className="text-center">
          <Link href="/auth/login" className="text-sm text-blue-600 hover:text-blue-500">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}

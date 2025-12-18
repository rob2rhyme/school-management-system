import { RegisterForm } from "@/components/auth/register-form"
import { GraduationCap } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center mb-8">
            <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-outfit font-bold text-gray-900">School Management System</span>
            </Link>
            <h2 className="text-3xl font-outfit font-bold text-gray-900">Request Access</h2>
            <p className="mt-2 text-gray-600">Get started with your school management system</p>
          </div>

          <RegisterForm />

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-medium text-blue-600 hover:text-blue-500">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="/placeholder.svg?height=800&width=600"
          alt="Students in classroom"
        />
        <div className="absolute inset-0 bg-blue-600 bg-opacity-20" />
      </div>
    </div>
  )
}

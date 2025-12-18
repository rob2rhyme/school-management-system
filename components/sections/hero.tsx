import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield, Users, BarChart3 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold text-gray-900 leading-tight">
            Complete School
            <span className="text-blue-600 block">Management Solution</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Streamline your educational institution with our comprehensive platform. Manage students, staff, academics,
            and operations from one unified dashboard.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/auth/login">
                Access Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent" asChild>
              <Link href="/auth/register">Request Demo</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-center">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Role Access</h3>
              <p className="text-gray-600 text-center">Tailored interfaces for admins, teachers, students & parents</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
              <p className="text-gray-600 text-center">Comprehensive insights and reporting for better decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="w-full"
        />
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
          Password
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            placeholder="Enter your password"
            className="w-full pr-10"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-input text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
          />
          <Label htmlFor="remember-me" className="ml-2 block text-sm text-foreground">
            Remember me
          </Label>
        </div>

        <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  )
}

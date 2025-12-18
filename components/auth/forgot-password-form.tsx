"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle } from "lucide-react"

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
        <h3 className="text-lg font-semibold text-foreground">Check your email</h3>
        <p className="text-muted-foreground">
          We've sent a password reset link to your email address. Please check your inbox and follow the instructions.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          placeholder="Enter your email address"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send reset link"}
      </Button>
    </form>
  )
}

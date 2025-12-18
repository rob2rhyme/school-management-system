"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Eye, EyeOff } from "lucide-react"

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false)
      console.log("Registration request submitted")
    }, 2000)
  }

  return (
    <form onSubmit={handleRegister} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
            First Name
          </Label>
          <Input id="firstName" name="firstName" type="text" required placeholder="John" />
        </div>
        <div>
          <Label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </Label>
          <Input id="lastName" name="lastName" type="text" required placeholder="Doe" />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email address
        </Label>
        <Input id="email" name="email" type="email" required placeholder="john.doe@school.edu" />
      </div>

      <div>
        <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </Label>
        <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 123-4567" />
      </div>

      <div>
        <Label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
          Role
        </Label>
        <Select name="role" required>
          <SelectTrigger>
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">School Administrator</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="staff">Staff Member</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="school" className="block text-sm font-medium text-foreground mb-2">
          School/Institution Name
        </Label>
        <Input id="school" name="school" type="text" required placeholder="Springfield High School" />
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Additional Information
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Tell us about your school and specific requirements..."
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
            required
            placeholder="Create a strong password"
            className="pr-10"
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

      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          required
          className="h-4 w-4 rounded border-input text-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        />
        <Label htmlFor="terms" className="ml-2 block text-sm text-foreground">
          I agree to the{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Privacy Policy
          </a>
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Submitting Request..." : "Request Access"}
      </Button>
    </form>
  )
}

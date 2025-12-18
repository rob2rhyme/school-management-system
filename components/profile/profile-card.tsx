"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Camera, Mail, Phone, MapPin, Calendar } from "lucide-react"

export function ProfileCard() {
  const [isUploading, setIsUploading] = useState(false)

  const handleImageUpload = () => {
    setIsUploading(true)
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      console.log("Image uploaded")
    }, 2000)
  }

  const userProfile = {
    name: "John Doe",
    email: "john.doe@school.edu",
    phone: "+1 (555) 123-4567",
    role: "School Administrator",
    department: "Administration",
    address: "123 Main St, City, State 12345",
    joinDate: "2020-08-15",
    avatar: "/placeholder.svg?height=120&width=120",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userProfile.avatar || "/placeholder.svg"} alt={userProfile.name} />
              <AvatarFallback className="text-lg">
                {userProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <Button
              size="sm"
              className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
              onClick={handleImageUpload}
              disabled={isUploading}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground">{userProfile.name}</h3>
            <Badge variant="secondary" className="mt-1">
              {userProfile.role}
            </Badge>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-sm">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{userProfile.email}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{userProfile.phone}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{userProfile.address}</span>
          </div>
          <div className="flex items-center space-x-3 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">Joined {userProfile.joinDate}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            <div className="flex justify-between mb-2">
              <span>Department:</span>
              <span className="font-medium">{userProfile.department}</span>
            </div>
            <div className="flex justify-between">
              <span>Employee ID:</span>
              <span className="font-medium font-mono">EMP001</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

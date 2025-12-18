"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Calendar, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const teachersData = [
  {
    id: "TCH001",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@school.edu",
    phone: "+1 (555) 123-4567",
    department: "Mathematics",
    subjects: ["Algebra", "Calculus", "Statistics"],
    classes: ["Grade 10-A", "Grade 11-B", "Grade 12-A"],
    experience: "8 years",
    status: "active",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "TCH002",
    name: "Mr. David Wilson",
    email: "david.wilson@school.edu",
    phone: "+1 (555) 234-5678",
    department: "Physics",
    subjects: ["Physics", "Applied Physics"],
    classes: ["Grade 11-A", "Grade 12-B"],
    experience: "12 years",
    status: "active",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "TCH003",
    name: "Ms. Emily Davis",
    email: "emily.davis@school.edu",
    phone: "+1 (555) 345-6789",
    department: "English",
    subjects: ["English Literature", "Creative Writing"],
    classes: ["Grade 9-A", "Grade 10-B"],
    experience: "6 years",
    status: "active",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "TCH004",
    name: "Dr. Michael Brown",
    email: "michael.brown@school.edu",
    phone: "+1 (555) 456-7890",
    department: "Chemistry",
    subjects: ["Organic Chemistry", "Inorganic Chemistry"],
    classes: ["Grade 11-C", "Grade 12-A"],
    experience: "15 years",
    status: "on-leave",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "TCH005",
    name: "Mrs. Lisa Anderson",
    email: "lisa.anderson@school.edu",
    phone: "+1 (555) 567-8901",
    department: "Biology",
    subjects: ["Biology", "Environmental Science"],
    classes: ["Grade 9-B", "Grade 10-A"],
    experience: "10 years",
    status: "active",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "TCH006",
    name: "Mr. James Taylor",
    email: "james.taylor@school.edu",
    phone: "+1 (555) 678-9012",
    department: "History",
    subjects: ["World History", "Modern History"],
    classes: ["Grade 9-C", "Grade 11-A"],
    experience: "7 years",
    status: "active",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export function TeachersGrid() {
  const [teachers] = useState(teachersData)

  const handleViewProfile = (teacherId: string) => {
    console.log("View teacher profile:", teacherId)
  }

  const handleEditTeacher = (teacherId: string) => {
    console.log("Edit teacher:", teacherId)
  }

  const handleViewSchedule = (teacherId: string) => {
    console.log("View teacher schedule:", teacherId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teachers.map((teacher) => (
        <Card key={teacher.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                  <AvatarFallback>
                    {teacher.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{teacher.name}</h3>
                  <p className="text-sm text-gray-600">{teacher.department}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleViewProfile(teacher.id)}>View Profile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleEditTeacher(teacher.id)}>Edit Details</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleViewSchedule(teacher.id)}>View Schedule</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant={teacher.status === "active" ? "default" : "secondary"}>
                {teacher.status === "active" ? "Active" : "On Leave"}
              </Badge>
              <span className="text-sm text-gray-500">{teacher.experience}</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="truncate">{teacher.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>{teacher.phone}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Subjects</h4>
              <div className="flex flex-wrap gap-1">
                {teacher.subjects.map((subject) => (
                  <Badge key={subject} variant="outline" className="text-xs">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Classes</h4>
              <div className="flex flex-wrap gap-1">
                {teacher.classes.map((className) => (
                  <Badge key={className} variant="secondary" className="text-xs">
                    {className}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <Calendar className="h-4 w-4 mr-2" />
              View Schedule
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

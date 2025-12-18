"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const studentsData = [
  {
    id: "STU001",
    name: "Alice Johnson",
    email: "alice.johnson@school.edu",
    class: "Grade 10-A",
    rollNumber: "001",
    phone: "+1 (555) 123-4567",
    status: "active",
    attendance: 95.2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU002",
    name: "Bob Smith",
    email: "bob.smith@school.edu",
    class: "Grade 10-A",
    rollNumber: "002",
    phone: "+1 (555) 234-5678",
    status: "active",
    attendance: 88.7,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU003",
    name: "Carol Davis",
    email: "carol.davis@school.edu",
    class: "Grade 9-B",
    rollNumber: "015",
    phone: "+1 (555) 345-6789",
    status: "inactive",
    attendance: 92.1,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU004",
    name: "David Wilson",
    email: "david.wilson@school.edu",
    class: "Grade 11-C",
    rollNumber: "008",
    phone: "+1 (555) 456-7890",
    status: "active",
    attendance: 97.3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "STU005",
    name: "Emma Brown",
    email: "emma.brown@school.edu",
    class: "Grade 10-B",
    rollNumber: "012",
    phone: "+1 (555) 567-8901",
    status: "active",
    attendance: 91.8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function StudentsTable() {
  const [students] = useState(studentsData)

  const handleViewStudent = (studentId: string) => {
    console.log("View student:", studentId)
  }

  const handleEditStudent = (studentId: string) => {
    console.log("Edit student:", studentId)
  }

  const handleDeleteStudent = (studentId: string) => {
    console.log("Delete student:", studentId)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Roll Number</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                    <AvatarFallback>
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{student.name}</div>
                    <div className="text-sm text-gray-500">{student.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{student.class}</Badge>
              </TableCell>
              <TableCell className="font-mono text-sm">{student.rollNumber}</TableCell>
              <TableCell className="text-sm text-gray-600">{student.phone}</TableCell>
              <TableCell>
                <Badge variant={student.status === "active" ? "default" : "secondary"}>{student.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        student.attendance >= 95
                          ? "bg-green-500"
                          : student.attendance >= 90
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${student.attendance}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{student.attendance}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewStudent(student.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEditStudent(student.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Student
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteStudent(student.id)} className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Student
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

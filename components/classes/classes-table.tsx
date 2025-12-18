"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, Edit, Trash2, Users, BookOpen } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const classesData = [
  {
    id: "CLS001",
    name: "Grade 9-A",
    grade: "9",
    section: "A",
    students: 30,
    teacher: "Ms. Johnson",
    subjects: ["Mathematics", "English", "Science", "History"],
    room: "Room 101",
    schedule: "Mon-Fri 8:00-14:00",
    status: "active",
  },
  {
    id: "CLS002",
    name: "Grade 9-B",
    grade: "9",
    section: "B",
    students: 28,
    teacher: "Mr. Smith",
    subjects: ["Mathematics", "English", "Science", "Geography"],
    room: "Room 102",
    schedule: "Mon-Fri 8:00-14:00",
    status: "active",
  },
  {
    id: "CLS003",
    name: "Grade 10-A",
    grade: "10",
    section: "A",
    students: 32,
    teacher: "Mrs. Davis",
    subjects: ["Advanced Math", "Physics", "Chemistry", "English"],
    room: "Room 201",
    schedule: "Mon-Fri 8:00-15:00",
    status: "active",
  },
  {
    id: "CLS004",
    name: "Grade 11-A",
    grade: "11",
    section: "A",
    students: 27,
    teacher: "Dr. Wilson",
    subjects: ["Calculus", "Physics", "Chemistry", "Biology"],
    room: "Room 301",
    schedule: "Mon-Fri 8:00-15:30",
    status: "active",
  },
  {
    id: "CLS005",
    name: "Grade 12-A",
    grade: "12",
    section: "A",
    students: 25,
    teacher: "Prof. Brown",
    subjects: ["Advanced Calculus", "Advanced Physics", "Organic Chemistry"],
    room: "Room 401",
    schedule: "Mon-Fri 8:00-16:00",
    status: "inactive",
  },
]

export function ClassesTable() {
  const [classes] = useState(classesData)

  const handleViewClass = (classId: string) => {
    console.log("View class:", classId)
  }

  const handleEditClass = (classId: string) => {
    console.log("Edit class:", classId)
  }

  const handleDeleteClass = (classId: string) => {
    console.log("Delete class:", classId)
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Class</TableHead>
            <TableHead>Teacher</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Subjects</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => (
            <TableRow key={classItem.id}>
              <TableCell>
                <div>
                  <div className="font-medium text-gray-900">{classItem.name}</div>
                  <div className="text-sm text-gray-500">{classItem.schedule}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-gray-900">{classItem.teacher}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="font-medium">{classItem.students}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {classItem.subjects.slice(0, 2).map((subject) => (
                    <Badge key={subject} variant="outline" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                  {classItem.subjects.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{classItem.subjects.length - 2} more
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-sm text-gray-600">{classItem.room}</div>
              </TableCell>
              <TableCell>
                <Badge variant={classItem.status === "active" ? "default" : "secondary"}>{classItem.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewClass(classItem.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEditClass(classItem.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Class
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Manage Subjects
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteClass(classItem.id)} className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Class
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

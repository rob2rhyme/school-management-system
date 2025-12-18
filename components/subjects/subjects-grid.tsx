"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash2, UserPlus, BookOpen } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const subjectsData = [
  {
    id: "SUB001",
    name: "Mathematics",
    code: "MATH101",
    teacher: "Dr. Sarah Johnson",
    classes: ["Grade 9-A", "Grade 10-A", "Grade 11-A"],
    students: 87,
    color: "bg-blue-500",
    description: "Fundamental mathematics including algebra, geometry, and basic calculus",
  },
  {
    id: "SUB002",
    name: "Physics",
    code: "PHYS101",
    teacher: "Mr. David Wilson",
    classes: ["Grade 11-A", "Grade 12-A"],
    students: 52,
    color: "bg-green-500",
    description: "Classical mechanics, thermodynamics, and electromagnetic theory",
  },
  {
    id: "SUB003",
    name: "English Literature",
    code: "ENG101",
    teacher: "Ms. Emily Davis",
    classes: ["Grade 9-A", "Grade 10-B", "Grade 11-B"],
    students: 95,
    color: "bg-purple-500",
    description: "Classic and contemporary literature analysis and creative writing",
  },
  {
    id: "SUB004",
    name: "Chemistry",
    code: "CHEM101",
    teacher: "Dr. Michael Brown",
    classes: ["Grade 11-C", "Grade 12-A"],
    students: 48,
    color: "bg-red-500",
    description: "Organic and inorganic chemistry with laboratory experiments",
  },
  {
    id: "SUB005",
    name: "Biology",
    code: "BIO101",
    teacher: "Mrs. Lisa Anderson",
    classes: ["Grade 9-B", "Grade 10-A"],
    students: 63,
    color: "bg-yellow-500",
    description: "Cell biology, genetics, and environmental science",
  },
  {
    id: "SUB006",
    name: "History",
    code: "HIST101",
    teacher: "Mr. James Taylor",
    classes: ["Grade 9-C", "Grade 11-A"],
    students: 71,
    color: "bg-indigo-500",
    description: "World history from ancient civilizations to modern times",
  },
]

export function SubjectsGrid() {
  const [subjects] = useState(subjectsData)

  const handleEditSubject = (subjectId: string) => {
    console.log("Edit subject:", subjectId)
  }

  const handleDeleteSubject = (subjectId: string) => {
    console.log("Delete subject:", subjectId)
  }

  const handleAssignTeacher = (subjectId: string) => {
    console.log("Assign teacher to subject:", subjectId)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {subjects.map((subject) => (
        <Card key={subject.id} className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${subject.color}`} />
                <div>
                  <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                  <p className="text-sm text-gray-600 font-mono">{subject.code}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditSubject(subject.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Subject
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleAssignTeacher(subject.id)}>
                    <UserPlus className="mr-2 h-4 w-4" />
                    Assign Teacher
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDeleteSubject(subject.id)} className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Subject
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">{subject.description}</p>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Teacher:</span>
                <span className="font-medium text-gray-900">{subject.teacher}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Students:</span>
                <span className="font-medium text-gray-900">{subject.students}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Classes</h4>
              <div className="flex flex-wrap gap-1">
                {subject.classes.map((className) => (
                  <Badge key={className} variant="secondary" className="text-xs">
                    {className}
                  </Badge>
                ))}
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full bg-transparent">
              <BookOpen className="h-4 w-4 mr-2" />
              View Curriculum
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

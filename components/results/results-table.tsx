"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Eye, Download, Edit } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const resultsData = [
  {
    id: "RES001",
    student: {
      id: "STU001",
      name: "Alice Johnson",
      class: "Grade 10-A",
      rollNumber: "001",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subjects: [
      { name: "Mathematics", grade: "A", marks: 92 },
      { name: "Physics", grade: "A-", marks: 88 },
      { name: "Chemistry", grade: "B+", marks: 85 },
      { name: "English", grade: "A", marks: 90 },
    ],
    overall: { grade: "A-", percentage: 88.75, gpa: 3.7 },
    status: "excellent",
  },
  {
    id: "RES002",
    student: {
      id: "STU002",
      name: "Bob Smith",
      class: "Grade 10-A",
      rollNumber: "002",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subjects: [
      { name: "Mathematics", grade: "B", marks: 78 },
      { name: "Physics", grade: "B-", marks: 75 },
      { name: "Chemistry", grade: "C+", marks: 72 },
      { name: "English", grade: "B+", marks: 82 },
    ],
    overall: { grade: "B", percentage: 76.75, gpa: 3.0 },
    status: "good",
  },
  {
    id: "RES003",
    student: {
      id: "STU003",
      name: "Carol Davis",
      class: "Grade 9-B",
      rollNumber: "015",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    subjects: [
      { name: "Mathematics", grade: "A", marks: 94 },
      { name: "Science", grade: "A", marks: 91 },
      { name: "English", grade: "A-", marks: 87 },
      { name: "History", grade: "B+", marks: 84 },
    ],
    overall: { grade: "A", percentage: 89.0, gpa: 3.8 },
    status: "excellent",
  },
]

export function ResultsTable() {
  const [results] = useState(resultsData)

  const handleViewResult = (resultId: string) => {
    console.log("View result:", resultId)
  }

  const handleEditResult = (resultId: string) => {
    console.log("Edit result:", resultId)
  }

  const handleDownloadResult = (resultId: string) => {
    console.log("Download result:", resultId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-blue-100 text-blue-800"
      case "average":
        return "bg-yellow-100 text-yellow-800"
      case "poor":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Overall Grade</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead>GPA</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={result.student.avatar || "/placeholder.svg"} alt={result.student.name} />
                    <AvatarFallback>
                      {result.student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{result.student.name}</div>
                    <div className="text-sm text-gray-500">Roll: {result.student.rollNumber}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{result.student.class}</Badge>
              </TableCell>
              <TableCell>
                <div className="text-lg font-semibold text-gray-900">{result.overall.grade}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-gray-900">{result.overall.percentage}%</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-gray-900">{result.overall.gpa}</div>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(result.status)}>{result.status}</Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewResult(result.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleEditResult(result.id)}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Marks
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownloadResult(result.id)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Report
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

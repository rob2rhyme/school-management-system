"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Users, UserCheck, UserX } from "lucide-react"

const classesData = [
  { id: "class1", name: "Grade 9-A", students: 30 },
  { id: "class2", name: "Grade 9-B", students: 28 },
  { id: "class3", name: "Grade 10-A", students: 32 },
  { id: "class4", name: "Grade 10-B", students: 29 },
  { id: "class5", name: "Grade 11-A", students: 27 },
]

const studentsData = [
  {
    id: "STU001",
    name: "Alice Johnson",
    rollNumber: "001",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
  {
    id: "STU002",
    name: "Bob Smith",
    rollNumber: "002",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
  {
    id: "STU003",
    name: "Carol Davis",
    rollNumber: "003",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: false,
  },
  {
    id: "STU004",
    name: "David Wilson",
    rollNumber: "004",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
  {
    id: "STU005",
    name: "Emma Brown",
    rollNumber: "005",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
  {
    id: "STU006",
    name: "Frank Miller",
    rollNumber: "006",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: false,
  },
  {
    id: "STU007",
    name: "Grace Lee",
    rollNumber: "007",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
  {
    id: "STU008",
    name: "Henry Taylor",
    rollNumber: "008",
    avatar: "/placeholder.svg?height=40&width=40",
    isPresent: true,
  },
]

export function AttendanceTracker() {
  const [selectedClass, setSelectedClass] = useState("class1")
  const [students, setStudents] = useState(studentsData)
  const [isSaving, setIsSaving] = useState(false)

  const presentCount = students.filter((student) => student.isPresent).length
  const absentCount = students.length - presentCount
  const attendancePercentage = ((presentCount / students.length) * 100).toFixed(1)

  const handleAttendanceChange = (studentId: string, isPresent: boolean) => {
    setStudents((prev) => prev.map((student) => (student.id === studentId ? { ...student, isPresent } : student)))
  }

  const handleSaveAttendance = async () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      console.log("Attendance saved:", students)
    }, 1000)
  }

  const markAllPresent = () => {
    setStudents((prev) => prev.map((student) => ({ ...student, isPresent: true })))
  }

  const markAllAbsent = () => {
    setStudents((prev) => prev.map((student) => ({ ...student, isPresent: false })))
  }

  return (
    <div className="space-y-6">
      {/* Class Selection and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Select Class</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {classesData.map((classItem) => (
                  <SelectItem key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-2xl font-bold">{students.length}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <UserCheck className="h-5 w-5 text-green-600" />
              <span className="text-2xl font-bold text-green-600">{presentCount}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <UserX className="h-5 w-5 text-red-600" />
              <span className="text-2xl font-bold text-red-600">{absentCount}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Attendance Summary</CardTitle>
              <p className="text-sm text-gray-600 mt-1">
                {classesData.find((c) => c.id === selectedClass)?.name} - {new Date().toLocaleDateString()}
              </p>
            </div>
            <Badge
              variant={Number.parseFloat(attendancePercentage) >= 90 ? "default" : "destructive"}
              className="text-lg px-3 py-1"
            >
              {attendancePercentage}%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Button variant="outline" size="sm" onClick={markAllPresent}>
              Mark All Present
            </Button>
            <Button variant="outline" size="sm" onClick={markAllAbsent}>
              Mark All Absent
            </Button>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${attendancePercentage}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Student List */}
      <Card>
        <CardHeader>
          <CardTitle>Student Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
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
                    <h4 className="font-medium text-gray-900">{student.name}</h4>
                    <p className="text-sm text-gray-600">Roll No: {student.rollNumber}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Badge variant={student.isPresent ? "default" : "destructive"}>
                    {student.isPresent ? "Present" : "Absent"}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`present-${student.id}`}
                      checked={student.isPresent}
                      onCheckedChange={(checked) => handleAttendanceChange(student.id, checked as boolean)}
                    />
                    <label htmlFor={`present-${student.id}`} className="text-sm font-medium cursor-pointer">
                      Present
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <Button onClick={handleSaveAttendance} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Attendance"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

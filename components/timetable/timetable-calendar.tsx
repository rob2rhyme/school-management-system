"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Users } from "lucide-react"

const timeSlots = [
  "08:00 - 08:45",
  "08:45 - 09:30",
  "09:30 - 10:15",
  "10:15 - 10:30", // Break
  "10:30 - 11:15",
  "11:15 - 12:00",
  "12:00 - 12:45",
  "12:45 - 13:30", // Lunch
  "13:30 - 14:15",
  "14:15 - 15:00",
]

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const timetableData = {
  Monday: [
    {
      subject: "Mathematics",
      teacher: "Ms. Johnson",
      room: "Room 201",
      class: "Grade 10-A",
      color: "bg-blue-100 text-blue-800",
    },
    {
      subject: "Physics",
      teacher: "Mr. Wilson",
      room: "Lab 1",
      class: "Grade 11-A",
      color: "bg-green-100 text-green-800",
    },
    {
      subject: "English",
      teacher: "Mrs. Davis",
      room: "Room 105",
      class: "Grade 9-A",
      color: "bg-purple-100 text-purple-800",
    },
    { type: "break", label: "Morning Break" },
    {
      subject: "Chemistry",
      teacher: "Dr. Brown",
      room: "Lab 2",
      class: "Grade 12-A",
      color: "bg-red-100 text-red-800",
    },
    {
      subject: "Biology",
      teacher: "Mrs. Anderson",
      room: "Lab 3",
      class: "Grade 10-B",
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      subject: "History",
      teacher: "Mr. Taylor",
      room: "Room 301",
      class: "Grade 11-B",
      color: "bg-indigo-100 text-indigo-800",
    },
    { type: "break", label: "Lunch Break" },
    { subject: "Art", teacher: "Ms. White", room: "Art Room", class: "Grade 9-B", color: "bg-pink-100 text-pink-800" },
    {
      subject: "PE",
      teacher: "Coach Miller",
      room: "Gymnasium",
      class: "Grade 10-A",
      color: "bg-orange-100 text-orange-800",
    },
  ],
  Tuesday: [
    {
      subject: "English",
      teacher: "Mrs. Davis",
      room: "Room 105",
      class: "Grade 10-A",
      color: "bg-purple-100 text-purple-800",
    },
    {
      subject: "Mathematics",
      teacher: "Ms. Johnson",
      room: "Room 201",
      class: "Grade 9-A",
      color: "bg-blue-100 text-blue-800",
    },
    {
      subject: "Chemistry",
      teacher: "Dr. Brown",
      room: "Lab 2",
      class: "Grade 11-A",
      color: "bg-red-100 text-red-800",
    },
    { type: "break", label: "Morning Break" },
    {
      subject: "Physics",
      teacher: "Mr. Wilson",
      room: "Lab 1",
      class: "Grade 12-A",
      color: "bg-green-100 text-green-800",
    },
    {
      subject: "History",
      teacher: "Mr. Taylor",
      room: "Room 301",
      class: "Grade 10-B",
      color: "bg-indigo-100 text-indigo-800",
    },
    {
      subject: "Biology",
      teacher: "Mrs. Anderson",
      room: "Lab 3",
      class: "Grade 9-B",
      color: "bg-yellow-100 text-yellow-800",
    },
    { type: "break", label: "Lunch Break" },
    {
      subject: "Music",
      teacher: "Mr. Garcia",
      room: "Music Room",
      class: "Grade 11-B",
      color: "bg-teal-100 text-teal-800",
    },
    {
      subject: "Computer Science",
      teacher: "Ms. Lee",
      room: "Computer Lab",
      class: "Grade 12-A",
      color: "bg-cyan-100 text-cyan-800",
    },
  ],
  // Add more days...
}

export function TimetableCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Timetable</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 gap-2 min-w-[800px]">
            {/* Header */}
            <div className="font-semibold text-gray-700 p-3 bg-gray-50 rounded-lg">Time</div>
            {weekDays.map((day) => (
              <div key={day} className="font-semibold text-gray-700 p-3 bg-gray-50 rounded-lg text-center">
                {day}
              </div>
            ))}

            {/* Time slots */}
            {timeSlots.map((timeSlot, index) => (
              <div key={timeSlot} className="contents">
                <div className="p-3 text-sm text-gray-600 font-medium border-r border-gray-200 flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {timeSlot}
                </div>
                {weekDays.map((day) => {
                  const dayData = timetableData[day as keyof typeof timetableData] || []
                  const classData = dayData[index]

                  if (!classData) {
                    return (
                      <div key={`${day}-${index}`} className="p-2 border border-gray-100 rounded-lg min-h-[80px]" />
                    )
                  }

                  if (classData.type === "break") {
                    return (
                      <div
                        key={`${day}-${index}`}
                        className="p-2 border border-gray-100 rounded-lg min-h-[80px] flex items-center justify-center bg-gray-50"
                      >
                        <span className="text-sm text-gray-500 font-medium">{classData.label}</span>
                      </div>
                    )
                  }

                  return (
                    <div key={`${day}-${index}`} className="p-2 border border-gray-100 rounded-lg min-h-[80px]">
                      <div className={`p-3 rounded-lg h-full ${classData.color}`}>
                        <div className="font-semibold text-sm mb-1">{classData.subject}</div>
                        <div className="text-xs space-y-1">
                          <div className="flex items-center">
                            <Users className="h-3 w-3 mr-1" />
                            {classData.class}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {classData.room}
                          </div>
                          <div className="font-medium">{classData.teacher}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

const todaysClasses = [
  {
    subject: "Mathematics",
    class: "Grade 10-A",
    time: "09:00 - 09:45",
    room: "Room 201",
    teacher: "Ms. Johnson",
    status: "ongoing" as const,
  },
  {
    subject: "Physics",
    class: "Grade 11-B",
    time: "10:00 - 10:45",
    room: "Lab 1",
    teacher: "Mr. Smith",
    status: "upcoming" as const,
  },
  {
    subject: "English Literature",
    class: "Grade 9-C",
    time: "11:00 - 11:45",
    room: "Room 105",
    teacher: "Mrs. Davis",
    status: "upcoming" as const,
  },
  {
    subject: "Chemistry",
    class: "Grade 12-A",
    time: "14:00 - 14:45",
    room: "Lab 2",
    teacher: "Dr. Wilson",
    status: "scheduled" as const,
  },
]

export function TodaysClasses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Today's Classes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todaysClasses.map((classItem, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium text-gray-900">{classItem.subject}</h4>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      classItem.status === "ongoing"
                        ? "bg-green-100 text-green-800"
                        : classItem.status === "upcoming"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {classItem.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {classItem.class} • {classItem.teacher}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{classItem.room}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

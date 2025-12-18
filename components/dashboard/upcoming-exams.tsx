import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock } from "lucide-react"

const upcomingExams = [
  {
    subject: "Mathematics",
    class: "Grade 10-A",
    date: "2025-02-05",
    time: "09:00 AM",
    duration: "2 hours",
    type: "Mid-term",
  },
  {
    subject: "Physics",
    class: "Grade 11-B",
    date: "2025-02-07",
    time: "10:00 AM",
    duration: "1.5 hours",
    type: "Unit Test",
  },
  {
    subject: "English",
    class: "Grade 9-C",
    date: "2025-02-10",
    time: "11:00 AM",
    duration: "2 hours",
    type: "Final",
  },
]

export function UpcomingExams() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Upcoming Exams</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingExams.map((exam, index) => (
            <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{exam.subject}</h4>
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">{exam.type}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{exam.class}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{exam.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>
                    {exam.time} ({exam.duration})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

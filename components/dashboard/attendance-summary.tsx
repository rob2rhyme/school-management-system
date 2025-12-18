import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const attendanceData = [
  { class: "Grade 9-A", present: 28, total: 30, percentage: 93.3 },
  { class: "Grade 9-B", present: 25, total: 28, percentage: 89.3 },
  { class: "Grade 10-A", present: 32, total: 33, percentage: 97.0 },
  { class: "Grade 10-B", present: 29, total: 31, percentage: 93.5 },
  { class: "Grade 11-A", present: 26, total: 27, percentage: 96.3 },
]

export function AttendanceSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Today's Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {attendanceData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">{item.class}</h4>
                <p className="text-sm text-gray-600">
                  {item.present}/{item.total} students
                </p>
              </div>
              <div className="text-right">
                <div
                  className={`text-lg font-semibold ${
                    item.percentage >= 95
                      ? "text-green-600"
                      : item.percentage >= 90
                        ? "text-yellow-600"
                        : "text-red-600"
                  }`}
                >
                  {item.percentage.toFixed(1)}%
                </div>
                <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className={`h-2 rounded-full ${
                      item.percentage >= 95 ? "bg-green-500" : item.percentage >= 90 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

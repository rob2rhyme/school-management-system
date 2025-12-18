import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

const announcements = [
  {
    title: "Parent-Teacher Conference",
    content: "Scheduled for next Friday. Please confirm your attendance.",
    priority: "high" as const,
    date: "2025-01-25",
    author: "Principal Office",
  },
  {
    title: "Science Fair Registration",
    content: "Registration deadline extended to January 30th.",
    priority: "medium" as const,
    date: "2025-01-23",
    author: "Science Department",
  },
  {
    title: "Library Hours Update",
    content: "Extended hours during exam period: 7 AM - 9 PM.",
    priority: "low" as const,
    date: "2025-01-22",
    author: "Library Staff",
  },
  {
    title: "Sports Day Preparation",
    content: "All students to report to the ground at 8 AM tomorrow.",
    priority: "medium" as const,
    date: "2025-01-21",
    author: "Sports Department",
  },
]

export function RecentAnnouncements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Announcements</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                <Badge
                  variant={
                    announcement.priority === "high"
                      ? "destructive"
                      : announcement.priority === "medium"
                        ? "default"
                        : "secondary"
                  }
                >
                  {announcement.priority}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{announcement.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{announcement.author}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{announcement.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { TimetableCalendar } from "@/components/timetable/timetable-calendar"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Filter, Calendar } from "lucide-react"

export default function TimetablePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-outfit font-bold text-gray-900">Timetable</h1>
            <p className="text-gray-600">View and manage class schedules</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Add Schedule
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="grade9a">Grade 9-A</SelectItem>
              <SelectItem value="grade9b">Grade 9-B</SelectItem>
              <SelectItem value="grade10a">Grade 10-A</SelectItem>
              <SelectItem value="grade10b">Grade 10-B</SelectItem>
              <SelectItem value="grade11a">Grade 11-A</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by teacher" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Teachers</SelectItem>
              <SelectItem value="johnson">Ms. Johnson</SelectItem>
              <SelectItem value="smith">Mr. Smith</SelectItem>
              <SelectItem value="davis">Mrs. Davis</SelectItem>
              <SelectItem value="wilson">Dr. Wilson</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        <TimetableCalendar />
      </div>
    </DashboardLayout>
  )
}

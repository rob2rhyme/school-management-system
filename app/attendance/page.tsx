import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { AttendanceTracker } from "@/components/attendance/attendance-tracker"
import { Button } from "@/components/ui/button"
import { Calendar, Download } from "lucide-react"

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-outfit font-bold text-gray-900">Attendance</h1>
            <p className="text-gray-600">Track and manage student attendance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Select Date
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <AttendanceTracker />
      </div>
    </DashboardLayout>
  )
}

import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { TodaysClasses } from "@/components/dashboard/todays-classes"
import { RecentAnnouncements } from "@/components/dashboard/recent-announcements"
import { UpcomingExams } from "@/components/dashboard/upcoming-exams"
import { AttendanceSummary } from "@/components/dashboard/attendance-summary"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening at your school today.</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TodaysClasses />
          <RecentAnnouncements />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <UpcomingExams />
          <AttendanceSummary />
        </div>
      </div>
    </DashboardLayout>
  )
}

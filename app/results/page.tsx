import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ResultsOverview } from "@/components/results/results-overview"
import { ResultsTable } from "@/components/results/results-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Download, Search, Filter } from "lucide-react"

export default function ResultsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-outfit font-bold text-gray-900">Results</h1>
            <p className="text-gray-600">Manage student grades and academic performance</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Upload Marks
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Results
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search by student name, class, or subject..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <ResultsOverview />
        <ResultsTable />
      </div>
    </DashboardLayout>
  )
}

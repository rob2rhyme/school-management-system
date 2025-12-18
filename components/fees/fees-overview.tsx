import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Clock, AlertCircle } from "lucide-react"

const feesStats = [
  {
    title: "Total Collected",
    value: "$124,580",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Pending Payments",
    value: "$23,450",
    change: "-12%",
    changeType: "negative" as const,
    icon: Clock,
  },
  {
    title: "Collection Rate",
    value: "84.1%",
    change: "+3.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Overdue",
    value: "$8,920",
    change: "+15%",
    changeType: "negative" as const,
    icon: AlertCircle,
  },
]

export function FeesOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {feesStats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.changeType === "positive"
                  ? "text-green-600"
                  : stat.changeType === "negative"
                    ? "text-red-600"
                    : "text-gray-500"
              }`}
            >
              {stat.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

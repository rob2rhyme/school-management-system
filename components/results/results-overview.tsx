import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Award, AlertTriangle } from "lucide-react"

const statsData = [
  {
    title: "Average Grade",
    value: "B+",
    change: "+0.2",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Pass Rate",
    value: "94.2%",
    change: "+2.1%",
    changeType: "positive" as const,
    icon: Award,
  },
  {
    title: "Top Performers",
    value: "127",
    change: "+15",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "At Risk",
    value: "23",
    change: "-5",
    changeType: "negative" as const,
    icon: AlertTriangle,
  },
]

export function ResultsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => (
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
              {stat.change} from last term
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

import {
  Calendar,
  Users,
  GraduationCap,
  ClipboardCheck,
  FileText,
  CreditCard,
  Clock,
  MessageSquare,
} from "lucide-react"

const features = [
  {
    icon: ClipboardCheck,
    title: "Attendance Management",
    description: "Digital attendance tracking with real-time notifications and automated reports",
  },
  {
    icon: FileText,
    title: "Result Management",
    description: "Comprehensive grade tracking, report cards, and academic performance analytics",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Online fee collection, payment tracking, and automated receipt generation",
  },
  {
    icon: Calendar,
    title: "Timetable System",
    description: "Dynamic scheduling with conflict detection and resource optimization",
  },
  {
    icon: Users,
    title: "Student Profiles",
    description: "Complete student information system with academic and personal records",
  },
  {
    icon: GraduationCap,
    title: "Teacher Management",
    description: "Staff profiles, subject assignments, and performance tracking",
  },
  {
    icon: Clock,
    title: "Class Scheduling",
    description: "Automated class scheduling with room and resource allocation",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Integrated messaging system for school-wide announcements and updates",
  },
]

export function PlatformOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-foreground mb-4">
            Everything You Need to Run Your School
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform covers every aspect of school management, from student enrollment to graduation
            day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl hover:bg-accent/50 hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

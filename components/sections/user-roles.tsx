import { Shield, BookOpen, Users, UserCheck } from "lucide-react"

const roles = [
  {
    icon: Shield,
    title: "School Administrators",
    description: "Complete system control with advanced analytics, user management, and institutional oversight.",
    features: ["User Role Management", "System Configuration", "Advanced Reports", "Data Analytics"],
  },
  {
    icon: BookOpen,
    title: "Teaching Staff",
    description: "Streamlined tools for classroom management, grading, and student communication.",
    features: ["Class Management", "Grade Entry", "Attendance Tracking", "Parent Communication"],
  },
  {
    icon: Users,
    title: "Students",
    description: "Personal dashboard with academic progress, schedules, and school announcements.",
    features: ["Academic Progress", "Timetable Access", "Assignment Submission", "Fee Status"],
  },
  {
    icon: UserCheck,
    title: "Parents & Guardians",
    description: "Stay connected with real-time updates on your child's academic journey.",
    features: ["Progress Monitoring", "Fee Payments", "Teacher Communication", "Event Updates"],
  },
]

export function UserRoles() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-gray-900 mb-4">Designed for Every User</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Role-based access ensures everyone gets exactly what they need, when they need it, with appropriate
            permissions and interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl">
                    <role.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{role.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{role.description}</p>
                  <ul className="space-y-2">
                    {role.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

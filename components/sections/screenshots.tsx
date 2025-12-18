export function Screenshots() {
  const screenshots = [
    {
      title: "Dashboard Overview",
      description: "Comprehensive dashboard with key metrics and quick actions",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Student Management",
      description: "Complete student profiles with academic records and attendance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Attendance Tracking",
      description: "Digital attendance system with real-time updates",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Grade Management",
      description: "Intuitive grade entry and report generation system",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-outfit font-bold text-gray-900 mb-4">
            See School Management System in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our intuitive interface designed for efficiency and ease of use.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={screenshot.title} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img
                src={screenshot.image || "/placeholder.svg"}
                alt={screenshot.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">{screenshot.title}</h3>
                <p className="text-gray-200 text-sm">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

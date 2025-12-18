import { Header } from "@/components/layout/header"
import { Hero } from "@/components/sections/hero"
import { PlatformOverview } from "@/components/sections/platform-overview"
import { UserRoles } from "@/components/sections/user-roles"
import { Screenshots } from "@/components/sections/screenshots"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PlatformOverview />
        <UserRoles />
        <Screenshots />
      </main>
      <Footer />
    </div>
  )
}

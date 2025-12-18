import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { ProfileCard } from "@/components/profile/profile-card"
import { ChangePasswordForm } from "@/components/profile/change-password-form"
import { PersonalInfoForm } from "@/components/profile/personal-info-form"

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <PersonalInfoForm />
            <ChangePasswordForm />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

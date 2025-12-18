import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { GeneralSettings } from "@/components/settings/general-settings"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { SecuritySettings } from "@/components/settings/security-settings"
import { RoleManagement } from "@/components/settings/role-management"

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-outfit font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">Manage your application preferences and system configuration</p>
        </div>

        <div className="space-y-6">
          <GeneralSettings />
          <NotificationSettings />
          <SecuritySettings />
          <RoleManagement />
        </div>
      </div>
    </DashboardLayout>
  )
}

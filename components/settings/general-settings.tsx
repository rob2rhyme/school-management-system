"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Palette, Globe, Clock } from "lucide-react"

export function GeneralSettings() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isAutoSave, setIsAutoSave] = React.useState(true)
  const [isCompactView, setIsCompactView] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  const handleSaveSettings = () => {
    console.log("General settings saved")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Palette className="h-5 w-5" />
          <span>General Settings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="theme" className="block text-sm font-medium text-foreground mb-2">
              Theme Preference
            </Label>
            <Select value={mounted ? theme ?? "system" : "system"} onValueChange={setTheme}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light Theme</SelectItem>
                <SelectItem value="dark">Dark Theme</SelectItem>
                <SelectItem value="system">System Default</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">
              <Globe className="h-4 w-4 inline mr-1" />
              Language
            </Label>
            <Select defaultValue="en">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Spanish</SelectItem>
                <SelectItem value="fr">French</SelectItem>
                <SelectItem value="de">German</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="timezone" className="block text-sm font-medium text-foreground mb-2">
              <Clock className="h-4 w-4 inline mr-1" />
              Timezone
            </Label>
            <Select defaultValue="utc-5">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="utc-5">Eastern Time (UTC-5)</SelectItem>
                <SelectItem value="utc-6">Central Time (UTC-6)</SelectItem>
                <SelectItem value="utc-7">Mountain Time (UTC-7)</SelectItem>
                <SelectItem value="utc-8">Pacific Time (UTC-8)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dateFormat" className="block text-sm font-medium text-foreground mb-2">
              Date Format
            </Label>
            <Select defaultValue="mm-dd-yyyy">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="darkMode" className="text-sm font-medium text-foreground">
                Dark Mode
              </Label>
              <p className="text-xs text-muted-foreground">Enable dark theme for better viewing in low light</p>
            </div>
            <Switch
              id="darkMode"
              checked={mounted && resolvedTheme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              disabled={!mounted}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="autoSave" className="text-sm font-medium text-foreground">
                Auto Save
              </Label>
              <p className="text-xs text-muted-foreground">Automatically save changes as you work</p>
            </div>
            <Switch id="autoSave" checked={isAutoSave} onCheckedChange={setIsAutoSave} />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="compactView" className="text-sm font-medium text-foreground">
                Compact View
              </Label>
              <p className="text-xs text-muted-foreground">Show more information in less space</p>
            </div>
            <Switch id="compactView" checked={isCompactView} onCheckedChange={setIsCompactView} />
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveSettings}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}

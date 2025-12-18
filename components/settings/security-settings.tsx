"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Key, Smartphone } from "lucide-react"

export function SecuritySettings() {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [loginAlerts, setLoginAlerts] = useState(true)
  const [sessionTimeout, setSessionTimeout] = useState(true)

  const handleSaveSettings = () => {
    console.log("Security settings saved")
  }

  const handleEnable2FA = () => {
    console.log("Enable 2FA")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Shield className="h-5 w-5" />
          <span>Security Settings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Authentication</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="twoFactorAuth" className="text-sm font-medium text-foreground">
                  <Smartphone className="h-4 w-4 inline mr-1" />
                  Two-Factor Authentication
                </Label>
                <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="twoFactorAuth" checked={twoFactorAuth} onCheckedChange={setTwoFactorAuth} />
                {!twoFactorAuth && (
                  <Button size="sm" variant="outline" onClick={handleEnable2FA}>
                    Setup
                  </Button>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="loginAlerts" className="text-sm font-medium text-foreground">
                  Login Alerts
                </Label>
                <p className="text-xs text-muted-foreground">Get notified of new login attempts</p>
              </div>
              <Switch id="loginAlerts" checked={loginAlerts} onCheckedChange={setLoginAlerts} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="sessionTimeout" className="text-sm font-medium text-foreground">
                  Automatic Session Timeout
                </Label>
                <p className="text-xs text-muted-foreground">Automatically log out after inactivity</p>
              </div>
              <Switch id="sessionTimeout" checked={sessionTimeout} onCheckedChange={setSessionTimeout} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Session Management</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="sessionDuration" className="block text-sm font-medium text-foreground mb-2">
                Session Duration
              </Label>
              <Select defaultValue="8h">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1h">1 Hour</SelectItem>
                  <SelectItem value="4h">4 Hours</SelectItem>
                  <SelectItem value="8h">8 Hours</SelectItem>
                  <SelectItem value="24h">24 Hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="passwordExpiry" className="block text-sm font-medium text-foreground mb-2">
                Password Expiry
              </Label>
              <Select defaultValue="90d">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30d">30 Days</SelectItem>
                  <SelectItem value="60d">60 Days</SelectItem>
                  <SelectItem value="90d">90 Days</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Active Sessions</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
              <div>
                <div className="text-sm font-medium text-foreground">Current Session</div>
                <div className="text-xs text-muted-foreground">Chrome on Windows • 192.168.1.100</div>
              </div>
              <div className="text-xs text-green-600 font-medium">Active</div>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg border border-border">
              <div>
                <div className="text-sm font-medium text-foreground">Mobile App</div>
                <div className="text-xs text-muted-foreground">iOS App • Last active 2 hours ago</div>
              </div>
              <Button size="sm" variant="outline">
                Revoke
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline">
            <Key className="h-4 w-4 mr-2" />
            Change Password
          </Button>
          <Button onClick={handleSaveSettings}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}

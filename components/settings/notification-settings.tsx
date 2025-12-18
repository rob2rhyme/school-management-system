"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell } from "lucide-react"

export function NotificationSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)
  const [attendanceAlerts, setAttendanceAlerts] = useState(true)
  const [feeReminders, setFeeReminders] = useState(true)
  const [examNotifications, setExamNotifications] = useState(true)

  const handleSaveSettings = () => {
    console.log("Notification settings saved")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Bell className="h-5 w-5" />
          <span>Notification Settings</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Notification Channels</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="emailNotifications" className="text-sm font-medium text-foreground">
                  Email Notifications
                </Label>
                <p className="text-xs text-muted-foreground">Receive notifications via email</p>
              </div>
              <Switch id="emailNotifications" checked={emailNotifications} onCheckedChange={setEmailNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="pushNotifications" className="text-sm font-medium text-foreground">
                  Push Notifications
                </Label>
                <p className="text-xs text-muted-foreground">Receive browser push notifications</p>
              </div>
              <Switch id="pushNotifications" checked={pushNotifications} onCheckedChange={setPushNotifications} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="smsNotifications" className="text-sm font-medium text-foreground">
                  SMS Notifications
                </Label>
                <p className="text-xs text-muted-foreground">Receive notifications via text message</p>
              </div>
              <Switch id="smsNotifications" checked={smsNotifications} onCheckedChange={setSmsNotifications} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Notification Types</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="attendanceAlerts" className="text-sm font-medium text-foreground">
                  Attendance Alerts
                </Label>
                <p className="text-xs text-muted-foreground">Get notified about attendance issues</p>
              </div>
              <Switch id="attendanceAlerts" checked={attendanceAlerts} onCheckedChange={setAttendanceAlerts} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="feeReminders" className="text-sm font-medium text-foreground">
                  Fee Reminders
                </Label>
                <p className="text-xs text-muted-foreground">Receive reminders for pending fee payments</p>
              </div>
              <Switch id="feeReminders" checked={feeReminders} onCheckedChange={setFeeReminders} />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="examNotifications" className="text-sm font-medium text-foreground">
                  Exam Notifications
                </Label>
                <p className="text-xs text-muted-foreground">Get notified about upcoming exams and results</p>
              </div>
              <Switch id="examNotifications" checked={examNotifications} onCheckedChange={setExamNotifications} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">Notification Frequency</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="digestFrequency" className="block text-sm font-medium text-foreground mb-2">
                Email Digest Frequency
              </Label>
              <Select defaultValue="daily">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate</SelectItem>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="quietHours" className="block text-sm font-medium text-foreground mb-2">
                Quiet Hours
              </Label>
              <Select defaultValue="22-06">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Quiet Hours</SelectItem>
                  <SelectItem value="22-06">10 PM - 6 AM</SelectItem>
                  <SelectItem value="23-07">11 PM - 7 AM</SelectItem>
                  <SelectItem value="00-08">12 AM - 8 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSaveSettings}>Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}

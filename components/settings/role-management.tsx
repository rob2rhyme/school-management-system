"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Users, Plus, Edit, Trash2 } from "lucide-react"

const rolesData = [
  {
    id: "admin",
    name: "Administrator",
    description: "Full system access and management capabilities",
    userCount: 3,
    permissions: {
      students: { read: true, write: true, delete: true },
      teachers: { read: true, write: true, delete: true },
      classes: { read: true, write: true, delete: true },
      attendance: { read: true, write: true, delete: true },
      results: { read: true, write: true, delete: true },
      fees: { read: true, write: true, delete: true },
      settings: { read: true, write: true, delete: true },
    },
  },
  {
    id: "teacher",
    name: "Teacher",
    description: "Access to assigned classes and student management",
    userCount: 45,
    permissions: {
      students: { read: true, write: true, delete: false },
      teachers: { read: true, write: false, delete: false },
      classes: { read: true, write: true, delete: false },
      attendance: { read: true, write: true, delete: false },
      results: { read: true, write: true, delete: false },
      fees: { read: true, write: false, delete: false },
      settings: { read: false, write: false, delete: false },
    },
  },
  {
    id: "staff",
    name: "Staff",
    description: "Limited access to administrative functions",
    userCount: 12,
    permissions: {
      students: { read: true, write: true, delete: false },
      teachers: { read: true, write: false, delete: false },
      classes: { read: true, write: false, delete: false },
      attendance: { read: true, write: true, delete: false },
      results: { read: true, write: false, delete: false },
      fees: { read: true, write: true, delete: false },
      settings: { read: false, write: false, delete: false },
    },
  },
]

export function RoleManagement() {
  const [roles] = useState(rolesData)
  const [selectedRole, setSelectedRole] = useState(roles[0])

  const handleSavePermissions = () => {
    console.log("Permissions saved for role:", selectedRole.id)
  }

  const handleAddRole = () => {
    console.log("Add new role")
  }

  const handleEditRole = (roleId: string) => {
    console.log("Edit role:", roleId)
  }

  const handleDeleteRole = (roleId: string) => {
    console.log("Delete role:", roleId)
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-5 w-5" />
            <span>Role Management</span>
          </CardTitle>
          <Button size="sm" onClick={handleAddRole}>
            <Plus className="h-4 w-4 mr-2" />
            Add Role
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">System Roles</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedRole.id === role.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedRole(role)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-gray-900">{role.name}</h5>
                  <Badge variant="secondary">{role.userCount} users</Badge>
                </div>
                <p className="text-xs text-gray-600 mb-3">{role.description}</p>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEditRole(role.id)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  {role.id !== "admin" && (
                    <Button size="sm" variant="outline" onClick={() => handleDeleteRole(role.id)}>
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Permissions for {selectedRole.name}</h4>
          <div className="space-y-4">
            {Object.entries(selectedRole.permissions).map(([module, permissions]) => (
              <div key={module} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <Label className="text-sm font-medium text-gray-900 capitalize">{module}</Label>
                  <p className="text-xs text-gray-500">Manage {module} related operations</p>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Switch id={`${module}-read`} checked={permissions.read} disabled={selectedRole.id === "admin"} />
                    <Label htmlFor={`${module}-read`} className="text-xs text-gray-600">
                      Read
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id={`${module}-write`} checked={permissions.write} disabled={selectedRole.id === "admin"} />
                    <Label htmlFor={`${module}-write`} className="text-xs text-gray-600">
                      Write
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={`${module}-delete`}
                      checked={permissions.delete}
                      disabled={selectedRole.id === "admin"}
                    />
                    <Label htmlFor={`${module}-delete`} className="text-xs text-gray-600">
                      Delete
                    </Label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <Button onClick={handleSavePermissions}>Save Permissions</Button>
        </div>
      </CardContent>
    </Card>
  )
}

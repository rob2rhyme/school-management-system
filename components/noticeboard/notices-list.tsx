"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Edit, Trash2, Pin, Calendar, Clock } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const noticesData = [
  {
    id: "NOT001",
    title: "Parent-Teacher Conference Schedule",
    content:
      "The annual parent-teacher conference is scheduled for next Friday, January 26th. Please confirm your attendance by Wednesday. Individual time slots will be assigned based on availability.",
    priority: "high",
    author: {
      name: "Principal Office",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2025-01-20",
    expiryDate: "2025-01-26",
    isPinned: true,
    views: 245,
    category: "Events",
  },
  {
    id: "NOT002",
    title: "Science Fair Registration Extended",
    content:
      "Due to popular demand, we have extended the registration deadline for the annual science fair to January 30th. Students from grades 9-12 are eligible to participate.",
    priority: "medium",
    author: {
      name: "Science Department",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2025-01-18",
    expiryDate: "2025-01-30",
    isPinned: false,
    views: 189,
    category: "Academic",
  },
  {
    id: "NOT003",
    title: "Library Hours Update",
    content:
      "Starting next week, the library will have extended hours during the exam period. New timings: Monday to Friday 7:00 AM - 9:00 PM, Saturday 9:00 AM - 6:00 PM.",
    priority: "low",
    author: {
      name: "Library Staff",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2025-01-17",
    expiryDate: "2025-02-15",
    isPinned: false,
    views: 156,
    category: "General",
  },
  {
    id: "NOT004",
    title: "Sports Day Preparation Meeting",
    content:
      "All students participating in the upcoming sports day are required to attend the preparation meeting tomorrow at 3:00 PM in the main auditorium.",
    priority: "high",
    author: {
      name: "Sports Department",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2025-01-19",
    expiryDate: "2025-01-22",
    isPinned: true,
    views: 312,
    category: "Sports",
  },
  {
    id: "NOT005",
    title: "Cafeteria Menu Changes",
    content:
      "Starting Monday, the cafeteria will introduce new healthy meal options. The updated menu includes vegetarian and gluten-free alternatives.",
    priority: "low",
    author: {
      name: "Cafeteria Management",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2025-01-16",
    expiryDate: "2025-02-01",
    isPinned: false,
    views: 98,
    category: "General",
  },
]

export function NoticesList() {
  const [notices] = useState(noticesData)

  const handleEditNotice = (noticeId: string) => {
    console.log("Edit notice:", noticeId)
  }

  const handleDeleteNotice = (noticeId: string) => {
    console.log("Delete notice:", noticeId)
  }

  const handlePinNotice = (noticeId: string) => {
    console.log("Pin notice:", noticeId)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Events":
        return "bg-purple-100 text-purple-800"
      case "Academic":
        return "bg-blue-100 text-blue-800"
      case "Sports":
        return "bg-orange-100 text-orange-800"
      case "General":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const today = new Date()
    const diffTime = expiry.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 3 && diffDays > 0
  }

  const isExpired = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const today = new Date()
    return expiry < today
  }

  // Sort notices: pinned first, then by date
  const sortedNotices = [...notices].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1
    if (!a.isPinned && b.isPinned) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="space-y-4">
      {sortedNotices.map((notice) => (
        <Card
          key={notice.id}
          className={`${notice.isPinned ? "ring-2 ring-blue-200 bg-blue-50/30" : ""} ${isExpired(notice.expiryDate) ? "opacity-60" : ""}`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  {notice.isPinned && <Pin className="h-4 w-4 text-blue-600" />}
                  <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
                  <Badge className={getPriorityColor(notice.priority)}>{notice.priority}</Badge>
                  <Badge className={getCategoryColor(notice.category)} variant="outline">
                    {notice.category}
                  </Badge>
                  {isExpiringSoon(notice.expiryDate) && (
                    <Badge variant="destructive" className="text-xs">
                      Expiring Soon
                    </Badge>
                  )}
                  {isExpired(notice.expiryDate) && (
                    <Badge variant="secondary" className="text-xs">
                      Expired
                    </Badge>
                  )}
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={notice.author.avatar || "/placeholder.svg"} alt={notice.author.name} />
                      <AvatarFallback className="text-xs">
                        {notice.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{notice.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{notice.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Expires: {notice.expiryDate}</span>
                  </div>
                  <span>{notice.views} views</span>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleEditNotice(notice.id)}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Notice
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handlePinNotice(notice.id)}>
                    <Pin className="mr-2 h-4 w-4" />
                    {notice.isPinned ? "Unpin" : "Pin"} Notice
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDeleteNotice(notice.id)} className="text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete Notice
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{notice.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

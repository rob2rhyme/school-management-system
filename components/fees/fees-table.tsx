"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MoreHorizontal, Eye, CreditCard, Receipt } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const feesData = [
  {
    id: "FEE001",
    student: {
      id: "STU001",
      name: "Alice Johnson",
      class: "Grade 10-A",
      rollNumber: "001",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    feeStructure: {
      tuition: 1200,
      library: 50,
      lab: 100,
      sports: 75,
      transport: 200,
    },
    totalAmount: 1625,
    paidAmount: 1625,
    pendingAmount: 0,
    status: "paid",
    dueDate: "2025-01-15",
    paymentDate: "2025-01-10",
    receiptNumber: "RCP001",
  },
  {
    id: "FEE002",
    student: {
      id: "STU002",
      name: "Bob Smith",
      class: "Grade 10-A",
      rollNumber: "002",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    feeStructure: {
      tuition: 1200,
      library: 50,
      lab: 100,
      sports: 75,
      transport: 200,
    },
    totalAmount: 1625,
    paidAmount: 800,
    pendingAmount: 825,
    status: "partial",
    dueDate: "2025-01-15",
    paymentDate: "2025-01-05",
    receiptNumber: "RCP002",
  },
  {
    id: "FEE003",
    student: {
      id: "STU003",
      name: "Carol Davis",
      class: "Grade 9-B",
      rollNumber: "015",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    feeStructure: {
      tuition: 1100,
      library: 50,
      lab: 80,
      sports: 75,
      transport: 180,
    },
    totalAmount: 1485,
    paidAmount: 0,
    pendingAmount: 1485,
    status: "pending",
    dueDate: "2025-01-15",
    paymentDate: null,
    receiptNumber: null,
  },
]

export function FeesTable() {
  const [fees] = useState(feesData)

  const handleViewFee = (feeId: string) => {
    console.log("View fee:", feeId)
  }

  const handlePayFee = (feeId: string) => {
    console.log("Pay fee:", feeId)
  }

  const handleDownloadReceipt = (feeId: string) => {
    console.log("Download receipt:", feeId)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "partial":
        return "bg-yellow-100 text-yellow-800"
      case "pending":
        return "bg-red-100 text-red-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Student</TableHead>
            <TableHead>Class</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Paid Amount</TableHead>
            <TableHead>Pending</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fees.map((fee) => (
            <TableRow key={fee.id}>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={fee.student.avatar || "/placeholder.svg"} alt={fee.student.name} />
                    <AvatarFallback>
                      {fee.student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{fee.student.name}</div>
                    <div className="text-sm text-gray-500">Roll: {fee.student.rollNumber}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{fee.student.class}</Badge>
              </TableCell>
              <TableCell>
                <div className="font-medium text-gray-900">${fee.totalAmount}</div>
              </TableCell>
              <TableCell>
                <div className="font-medium text-green-600">${fee.paidAmount}</div>
              </TableCell>
              <TableCell>
                <div className={`font-medium ${fee.pendingAmount > 0 ? "text-red-600" : "text-gray-500"}`}>
                  ${fee.pendingAmount}
                </div>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(fee.status)}>{fee.status}</Badge>
              </TableCell>
              <TableCell>
                <div className="text-sm text-gray-600">{fee.dueDate}</div>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleViewFee(fee.id)}>
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    {fee.pendingAmount > 0 && (
                      <DropdownMenuItem onClick={() => handlePayFee(fee.id)}>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Pay Now
                      </DropdownMenuItem>
                    )}
                    {fee.receiptNumber && (
                      <DropdownMenuItem onClick={() => handleDownloadReceipt(fee.id)}>
                        <Receipt className="mr-2 h-4 w-4" />
                        Download Receipt
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

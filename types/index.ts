export interface Student {
  id: string
  name: string
  email: string
  class: string
  rollNumber: string
  phone: string
  status: "active" | "inactive"
  attendance: number
  avatar?: string
}

export interface Teacher {
  id: string
  name: string
  email: string
  phone: string
  department: string
  subjects: string[]
  classes: string[]
  experience: string
  status: "active" | "on-leave"
  avatar?: string
}

export interface Class {
  id: string
  name: string
  grade: string
  section: string
  students: number
  teacher: string
  subjects: string[]
}

export interface Subject {
  id: string
  name: string
  code: string
  teacher: string
  classes: string[]
  color?: string
}

export interface Attendance {
  id: string
  studentId: string
  classId: string
  date: string
  isPresent: boolean
  remarks?: string
}

export interface Announcement {
  id: string
  title: string
  content: string
  priority: "high" | "medium" | "low"
  date: string
  author: string
  expiryDate?: string
}

export interface Exam {
  id: string
  subject: string
  class: string
  date: string
  time: string
  duration: string
  type: "Mid-term" | "Final" | "Unit Test" | "Quiz"
}

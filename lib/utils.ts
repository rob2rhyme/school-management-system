import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function formatTime(time: string): string {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(`2000-01-01T${time}`))
}

export function calculateAttendancePercentage(present: number, total: number): number {
  return total > 0 ? Math.round((present / total) * 100) : 0
}

export function getAttendanceColor(percentage: number): string {
  if (percentage >= 95) return "text-green-600"
  if (percentage >= 90) return "text-yellow-600"
  return "text-red-600"
}

export function getAttendanceBgColor(percentage: number): string {
  if (percentage >= 95) return "bg-green-500"
  if (percentage >= 90) return "bg-yellow-500"
  return "bg-red-500"
}

export function generateStudentId(): string {
  return `STU${Date.now().toString().slice(-6)}`
}

export function generateTeacherId(): string {
  return `TCH${Date.now().toString().slice(-6)}`
}

export function generateClassId(): string {
  return `CLS${Date.now().toString().slice(-6)}`
}

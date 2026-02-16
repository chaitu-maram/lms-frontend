"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { Dashboard } from "@/components/dashboard"
import { Courses } from "@/components/courses"
 import { Batches } from "@/components/batches"
 import { Trainees } from "@/components/trainees"
import { Calendar } from "@/components/calendar"
import { Assignments } from "@/components/assignments"
import { Exams } from "@/components/exams"
import { Announcements } from "@/components/announcements"
import { Grades } from "@/components/grades"
import { Profile } from "@/components/profile"
import { Header } from "@/components/header"
import { Messages } from "@/components/messages"
import { People } from "@/components/people"
import { Notifications } from "@/components/notifications"
import { SettingsPage } from "@/components/settings"
import { Trainers } from "@/components/trainers"
import { Admin } from "@/components/admin"



export default function LMSApp() {
  const [activeView, setActiveView] = useState("dashboard")

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />
      case "courses":
        return <Courses />
      case "batches":
        return <Batches />
      case "trainees":
        return <Trainees />
      case "calendar":
        return <Calendar />
      case "assignments":
        return <Assignments />
      case "exams":
        return <Exams />
      case "announcements":
        return <Announcements />
      case "grades":
        return <Grades />
      case "messages":
        return <Messages />
      case "people":
        return <People />
      case "notifications":
        return <Notifications />
      case "settings":
        return <SettingsPage />
      case "profile":
        return <Profile />
      case "trainers":
        return <Trainers />
      case "admin":
        return <Admin />
      default:
        return <Dashboard />
    }
  }

  return (
    <SidebarProvider>
      <AppSidebar activeView={activeView} setActiveView={setActiveView} />
      <SidebarInset>
        <Header activeView={activeView} />
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">{renderContent()}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

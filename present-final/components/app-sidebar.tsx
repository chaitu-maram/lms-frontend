"use client"

import {
  BookOpen,
  CalendarIcon,
  FileText,
  GraduationCap,
  Home,
  Settings,
  Users,
  Bell,
  MessageSquare,
  ClipboardList,
  Megaphone,
  UserCheck,
  LogOut,
  Users2,
} from "lucide-react"
import Image from "next/image"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
 

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    id: "dashboard",
    color: "text-blue-500",
  },
  {
    title: "Courses",
    icon: BookOpen,
    id: "courses",
    color: "text-green-500",
  },
  {
    title: "Batches",
    icon: Users2,
    id: "batches",
    color: "text-teal-500",
  },
  {
    title: "Calendar",
    icon: CalendarIcon,
    id: "calendar",
    color: "text-purple-500",
  },
  {
    title: "Assignments",
    icon: FileText,
    id: "assignments",
    color: "text-orange-500",
  },
  {
    title: "Exams",
    icon: ClipboardList,
    id: "exams",
    color: "text-red-500",
  },
  {
    title: "Announcements",
    icon: Megaphone,
    id: "announcements",
    color: "text-cyan-500",
  },
  {
    title: "Grades",
    icon: GraduationCap,
    id: "grades",
    color: "text-yellow-500",
  },
]

const trainerItems = [
  // ✅ NEW ADMIN MENU
  {
    title: "Admin",
    icon: Users2, // you can change icon if you want
    id: "admin",
    color: "text-blue-500",
  },
  {
    title: "Trainers",
    icon: UserCheck,
    id: "trainers",
    color: "text-emerald-500",
  },
  {
    title: "Trainees",
    icon: Users,
    id: "trainees",
    color: "text-rose-500",
  },
]

const secondaryItems = [
  {
    title: "Messages",
    icon: MessageSquare,
    id: "messages",
    color: "text-pink-500",
  },
  {
    title: "People",
    icon: Users,
    id: "people",
    color: "text-indigo-500",
  },
  {
    title: "Notifications",
    icon: Bell,
    id: "notifications",
    color: "text-red-500",
  },
  {
    title: "Settings",
    icon: Settings,
    id: "settings",
    color: "text-gray-500",
  },
]

interface AppSidebarProps {
  activeView: string
  setActiveView: (view: string) => void
}

export function AppSidebar({ activeView, setActiveView }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex-shrink-0">
            <Image
              src="/images/image.jpeg"
              alt="genesis logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeView === item.id}
                    onClick={() => setActiveView(item.id)}
                    className="hover:bg-[#0096FF] hover:text-white transition-colors rounded-md"
                  >
                    <item.icon className={`${item.color} group-hover/menu-item:text-white`} />
                    <span className={activeView === item.id ? "font-semibold" : ""}>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Training</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {trainerItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeView === item.id}
                    onClick={() => setActiveView(item.id)}
                    className="hover:bg-[#0096FF] hover:text-white transition-colors rounded-md"
                  >
                    <item.icon className={`${item.color} group-hover/menu-item:text-white`} />
                    <span className={activeView === item.id ? "font-semibold" : ""}>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    isActive={activeView === item.id}
                    onClick={() => setActiveView(item.id)}
                    className="hover:bg-[#0096FF] hover:text-white transition-colors rounded-md"
                  >
                    <item.icon className={`${item.color} group-hover/menu-item:text-white`} />
                    <span className={activeView === item.id ? "font-semibold" : ""}>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setActiveView("profile")}
              isActive={activeView === "profile"}
              className="hover:bg-[#0096FF] hover:text-white transition-colors rounded-md"
            >
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Tarun Amaraneni</span>
                <span className="truncate text-xs text-muted-foreground">Student</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => {
                // Placeholder logout action
                // Implement real sign-out when auth is integrated
              }}
              className="hover:bg-[#0096FF] hover:text-white transition-colors rounded-md"
            >
              <LogOut className="text-red-500 group-hover/menu-item:text-white" />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}

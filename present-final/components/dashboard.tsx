import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calendar, FileText, GraduationCap, Clock, Users } from 'lucide-react'

export function Dashboard() {
  const stats = [
    {
      title: "Enrolled Courses",
      value: "6",
      description: "Active this semester",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      title: "Pending Assignments",
      value: "12",
      description: "Due this week",
      icon: FileText,
      color: "text-orange-600",
    },
    {
      title: "Upcoming Events",
      value: "8",
      description: "Next 7 days",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Overall GPA",
      value: "3.7",
      description: "Current semester",
      icon: GraduationCap,
      color: "text-purple-600",
    },
  ]

  const recentCourses = [
    {
      name: "Computer Science 101",
      instructor: "Dr. Johnson",
      progress: 75,
      nextClass: "Today, 2:00 PM",
      status: "In Progress",
    },
    {
      name: "Mathematics 201",
      instructor: "Prof. Williams",
      progress: 60,
      nextClass: "Tomorrow, 10:00 AM",
      status: "In Progress",
    },
    {
      name: "Physics 150",
      instructor: "Dr. Brown",
      progress: 90,
      nextClass: "Wed, 1:00 PM",
      status: "Nearly Complete",
    },
  ]

  const upcomingAssignments = [
    {
      title: "Data Structures Project",
      course: "CS 101",
      dueDate: "Oct 25, 2024",
      priority: "High",
    },
    {
      title: "Calculus Problem Set",
      course: "MATH 201",
      dueDate: "Oct 27, 2024",
      priority: "Medium",
    },
    {
      title: "Lab Report",
      course: "PHYS 150",
      dueDate: "Oct 30, 2024",
      priority: "Low",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back, Tarun! Here's what's happening with your courses.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Courses</CardTitle>
            <CardDescription>Your active courses this semester</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCourses.map((course, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">{course.instructor}</p>
                  </div>
                  <Badge variant={course.status === "Nearly Complete" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-3 w-3" />
                  Next class: {course.nextClass}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Assignments</CardTitle>
            <CardDescription>Assignments due soon</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAssignments.map((assignment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{assignment.title}</p>
                  <p className="text-sm text-muted-foreground">{assignment.course}</p>
                  <p className="text-sm text-muted-foreground">Due: {assignment.dueDate}</p>
                </div>
                <Badge 
                  variant={
                    assignment.priority === "High" ? "destructive" : 
                    assignment.priority === "Medium" ? "default" : "secondary"
                  }
                >
                  {assignment.priority}
                </Badge>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              View All Assignments
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="h-20 flex-col gap-2">
              <BookOpen className="h-6 w-6" />
              Browse Courses
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <FileText className="h-6 w-6" />
              Submit Assignment
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Users className="h-6 w-6" />
              Study Groups
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="h-6 w-6" />
              Schedule Meeting
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

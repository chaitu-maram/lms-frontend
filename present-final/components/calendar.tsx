import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, MapPin, Users, Plus } from 'lucide-react'
import { useState } from "react"

export function Calendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const events = [
    {
      id: 1,
      title: "Computer Science 101 - Lecture",
      time: "2:00 PM - 3:00 PM",
      location: "Room 101, Science Building",
      type: "lecture",
      course: "CS 101",
      instructor: "Dr. Johnson",
      date: "Today",
    },
    {
      id: 2,
      title: "Mathematics 201 - Quiz",
      time: "10:00 AM - 11:00 AM",
      location: "Room 205, Math Building",
      type: "exam",
      course: "MATH 201",
      instructor: "Prof. Williams",
      date: "Tomorrow",
    },
    {
      id: 3,
      title: "Physics Lab Session",
      time: "1:00 PM - 4:00 PM",
      location: "Physics Lab 3",
      type: "lab",
      course: "PHYS 150",
      instructor: "Dr. Brown",
      date: "Wednesday",
    },
    {
      id: 4,
      title: "Study Group - Data Structures",
      time: "6:00 PM - 8:00 PM",
      location: "Library Room 302",
      type: "study",
      course: "CS 101",
      organizer: "Student Group",
      date: "Thursday",
    },
    {
      id: 5,
      title: "Assignment Due: Calculus Problem Set",
      time: "11:59 PM",
      location: "Online Submission",
      type: "assignment",
      course: "MATH 201",
      instructor: "Prof. Williams",
      date: "Friday",
    },
  ]

  const upcomingEvents = [
    {
      title: "Midterm Exam - Computer Science",
      date: "Nov 15, 2024",
      time: "2:00 PM",
      type: "exam",
    },
    {
      title: "Project Presentation",
      date: "Nov 20, 2024",
      time: "10:00 AM",
      type: "presentation",
    },
    {
      title: "Final Exam - Mathematics",
      date: "Dec 10, 2024",
      time: "9:00 AM",
      type: "exam",
    },
  ]

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "lecture":
        return "bg-blue-500"
      case "exam":
        return "bg-red-500"
      case "lab":
        return "bg-green-500"
      case "study":
        return "bg-purple-500"
      case "assignment":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getEventTypeBadge = (type: string) => {
    switch (type) {
      case "lecture":
        return "default"
      case "exam":
        return "destructive"
      case "lab":
        return "secondary"
      case "study":
        return "outline"
      case "assignment":
        return "default"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Calendar</h2>
          <p className="text-muted-foreground">
            View your schedule and upcoming events
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar Widget */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view events</CardDescription>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Today's Events */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Your events for today</CardDescription>
              </div>
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`w-1 h-16 rounded-full ${getEventTypeColor(event.type)}`} />
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">{event.course}</p>
                    </div>
                    <Badge variant={getEventTypeBadge(event.type) as any}>
                      {event.type}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {event.instructor || event.organizer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Important Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Important Events</CardTitle>
          <CardDescription>Don't miss these important dates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-2">
                <Badge variant={event.type === "exam" ? "destructive" : "default"}>
                  {event.type}
                </Badge>
                <h4 className="font-medium">{event.title}</h4>
                <div className="text-sm text-muted-foreground">
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Today's Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Lectures scheduled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Total events</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Upcoming Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Next 2 weeks</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Study Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

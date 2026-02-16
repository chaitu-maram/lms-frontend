import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Megaphone, Clock, Calendar, AlertTriangle, Info, CheckCircle, Pin, Search, Filter, Eye, Bookmark, Share2, Download } from 'lucide-react'

export function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Semester End Examination Schedule Released",
      content: "The semester end examination schedule for Fall 2024 has been released. Students are advised to check their individual exam timetables and prepare accordingly. All exams will be conducted in offline mode.",
      author: "Academic Office",
      authorRole: "Administration",
      course: "All Courses",
      courseCode: "GENERAL",
      date: "November 1, 2024",
      time: "10:30 AM",
      priority: "high",
      category: "academic",
      isPinned: true,
      isRead: false,
      attachments: ["Exam_Schedule_Fall_2024.pdf"],
      tags: ["Exams", "Schedule", "Important"],
      views: 1250,
    },
    {
      id: 2,
      title: "Library Extended Hours During Exam Period",
      content: "The university library will extend its operating hours during the examination period from November 15 to December 20, 2024. The library will be open 24/7 to support students' study needs.",
      author: "Library Administration",
      authorRole: "Library Staff",
      course: "All Courses",
      courseCode: "GENERAL",
      date: "October 30, 2024",
      time: "2:15 PM",
      priority: "medium",
      category: "facility",
      isPinned: false,
      isRead: true,
      attachments: [],
      tags: ["Library", "Study", "Extended Hours"],
      views: 890,
    },
    {
      id: 3,
      title: "CS 101 - Assignment 3 Deadline Extension",
      content: "Due to technical issues with the submission portal, the deadline for Assignment 3 has been extended to November 10, 2024, 11:59 PM. Students who have already submitted need not resubmit.",
      author: "Dr. Johnson",
      authorRole: "Instructor",
      course: "Computer Science 101",
      courseCode: "CS 101",
      date: "October 28, 2024",
      time: "4:45 PM",
      priority: "high",
      category: "course",
      isPinned: false,
      isRead: false,
      attachments: [],
      tags: ["Assignment", "Deadline", "Extension"],
      views: 156,
    },
    {
      id: 4,
      title: "Campus Wi-Fi Maintenance Scheduled",
      content: "The campus Wi-Fi network will undergo maintenance on November 5, 2024, from 2:00 AM to 6:00 AM. Internet services may be intermittent during this period. We apologize for any inconvenience.",
      author: "IT Services",
      authorRole: "Technical Team",
      course: "All Courses",
      courseCode: "GENERAL",
      date: "October 27, 2024",
      time: "11:20 AM",
      priority: "medium",
      category: "technical",
      isPinned: false,
      isRead: true,
      attachments: [],
      tags: ["Wi-Fi", "Maintenance", "IT"],
      views: 675,
    },
    {
      id: 5,
      title: "Guest Lecture: AI in Healthcare",
      content: "Join us for an exciting guest lecture on 'Artificial Intelligence in Healthcare' by Dr. Sarah Mitchell from MIT. The lecture will be held on November 12, 2024, at 3:00 PM in the Main Auditorium.",
      author: "Computer Science Department",
      authorRole: "Department",
      course: "Computer Science",
      courseCode: "CS",
      date: "October 25, 2024",
      time: "9:30 AM",
      priority: "low",
      category: "event",
      isPinned: false,
      isRead: true,
      attachments: ["Guest_Lecture_Flyer.pdf"],
      tags: ["Guest Lecture", "AI", "Healthcare"],
      views: 423,
    },
    {
      id: 6,
      title: "Mathematics 201 - Mid-term Results Published",
      content: "The mid-term examination results for Mathematics 201 have been published. Students can view their results in the grades section. Office hours are available for result discussions.",
      author: "Prof. Williams",
      authorRole: "Instructor",
      course: "Mathematics 201",
      courseCode: "MATH 201",
      date: "October 24, 2024",
      time: "1:15 PM",
      priority: "medium",
      category: "course",
      isPinned: false,
      isRead: true,
      attachments: [],
      tags: ["Results", "Mid-term", "Grades"],
      views: 234,
    },
    {
      id: 7,
      title: "Student Council Elections 2024",
      content: "Nominations for Student Council Elections 2024 are now open. Interested students can submit their nominations by November 8, 2024. Voting will take place on November 15, 2024.",
      author: "Student Affairs",
      authorRole: "Administration",
      course: "All Courses",
      courseCode: "GENERAL",
      date: "October 22, 2024",
      time: "3:45 PM",
      priority: "medium",
      category: "student",
      isPinned: true,
      isRead: false,
      attachments: ["Election_Guidelines.pdf", "Nomination_Form.pdf"],
      tags: ["Elections", "Student Council", "Nominations"],
      views: 987,
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "course":
        return <Info className="h-4 w-4 text-blue-500" />
      case "facility":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "technical":
        return <AlertTriangle className="h-4 w-4 text-orange-500" />
      case "event":
        return <Calendar className="h-4 w-4 text-purple-500" />
      case "student":
        return <Megaphone className="h-4 w-4 text-pink-500" />
      default:
        return <Info className="h-4 w-4 text-gray-500" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-red-50 text-red-700 border-red-200"
      case "course":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "facility":
        return "bg-green-50 text-green-700 border-green-200"
      case "technical":
        return "bg-orange-50 text-orange-700 border-orange-200"
      case "event":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "student":
        return "bg-pink-50 text-pink-700 border-pink-200"
      default:
        return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  const AnnouncementCard = ({ announcement }: { announcement: any }) => (
    <Card className={`hover:shadow-lg transition-shadow ${
      !announcement.isRead ? 'border-l-4 border-l-primary' : ''
    } ${announcement.isPinned ? 'ring-2 ring-yellow-200' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              {announcement.isPinned && <Pin className="h-4 w-4 text-yellow-500" />}
              {getCategoryIcon(announcement.category)}
              <CardTitle className="text-lg">{announcement.title}</CardTitle>
              {!announcement.isRead && (
                <div className="h-2 w-2 bg-primary rounded-full" />
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">
                  {announcement.author.split(' ').map((n: string) => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span>{announcement.author}</span>
              <Badge variant="outline" className="text-xs">{announcement.authorRole}</Badge>
            </div>
          </div>
          <div className="text-right space-y-1">
            <Badge variant={getPriorityColor(announcement.priority) as any}>
              {announcement.priority} priority
            </Badge>
            <div className={`text-xs px-2 py-1 rounded-full border ${getCategoryColor(announcement.category)}`}>
              {announcement.category}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{announcement.content}</p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{announcement.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{announcement.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{announcement.views} views</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {announcement.courseCode}
          </Badge>
        </div>

        {announcement.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {announcement.tags.map((tag: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {announcement.attachments.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Attachments:</p>
            <div className="space-y-1">
              {announcement.attachments.map((attachment: string, index: number) => (
                <div key={index} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                  <Download className="h-3 w-3" />
                  <span>{attachment}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Bookmark className="mr-1 h-3 w-3" />
              Save
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="mr-1 h-3 w-3" />
              Share
            </Button>
          </div>
          <Button size="sm">
            <Eye className="mr-2 h-4 w-4" />
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const pinnedAnnouncements = announcements.filter(a => a.isPinned)
  const unreadAnnouncements = announcements.filter(a => !a.isRead)
  const academicAnnouncements = announcements.filter(a => a.category === 'academic')
  const courseAnnouncements = announcements.filter(a => a.category === 'course')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Announcements</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest news and important information
          </p>
        </div>
        <Button>
          <Megaphone className="mr-2 h-4 w-4" />
          Create Announcement
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.length}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Unread</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{unreadAnnouncements.length}</div>
            <p className="text-xs text-muted-foreground">New announcements</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pinned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pinnedAnnouncements.length}</div>
            <p className="text-xs text-muted-foreground">Important items</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {announcements.filter(a => a.priority === 'high').length}
            </div>
            <p className="text-xs text-muted-foreground">Urgent items</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search announcements..." className="pl-8" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="academic">Academic</SelectItem>
            <SelectItem value="course">Course</SelectItem>
            <SelectItem value="facility">Facility</SelectItem>
            <SelectItem value="technical">Technical</SelectItem>
            <SelectItem value="event">Event</SelectItem>
            <SelectItem value="student">Student</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="high">High Priority</SelectItem>
            <SelectItem value="medium">Medium Priority</SelectItem>
            <SelectItem value="low">Low Priority</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="priority">Priority</SelectItem>
            <SelectItem value="category">Category</SelectItem>
            <SelectItem value="views">Views</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Announcement Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Announcements</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadAnnouncements.length})</TabsTrigger>
          <TabsTrigger value="pinned">Pinned ({pinnedAnnouncements.length})</TabsTrigger>
          <TabsTrigger value="academic">Academic ({academicAnnouncements.length})</TabsTrigger>
          <TabsTrigger value="course">Course ({courseAnnouncements.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          <div className="space-y-4">
            {unreadAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pinned" className="space-y-4">
          <div className="space-y-4">
            {pinnedAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="academic" className="space-y-4">
          <div className="space-y-4">
            {academicAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="course" className="space-y-4">
          <div className="space-y-4">
            {courseAnnouncements.map((announcement) => (
              <AnnouncementCard key={announcement.id} announcement={announcement} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Manage your announcement preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Bookmark className="h-6 w-6" />
              Saved Announcements
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Filter className="h-6 w-6" />
              Notification Settings
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Download className="h-6 w-6" />
              Export Archive
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

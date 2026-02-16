import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ClipboardList, Clock, Calendar, AlertCircle, CheckCircle, Play, FileText, Search, Filter, Eye } from 'lucide-react'

export function Exams() {
  const upcomingExams = [
    {
      id: 1,
      title: "Midterm Examination",
      course: "Computer Science 101",
      courseCode: "CS 101",
      date: "November 15, 2024",
      time: "2:00 PM - 4:00 PM",
      duration: "2 hours",
      location: "Exam Hall A, Block 1",
      type: "Written",
      totalMarks: 100,
      passingMarks: 40,
      instructor: "Dr. Johnson",
      status: "scheduled",
      daysLeft: 12,
      syllabus: ["Data Structures", "Algorithms", "Object-Oriented Programming"],
    },
    {
      id: 2,
      title: "Final Examination",
      course: "Mathematics 201",
      courseCode: "MATH 201",
      date: "December 10, 2024",
      time: "9:00 AM - 12:00 PM",
      duration: "3 hours",
      location: "Exam Hall B, Block 2",
      type: "Written",
      totalMarks: 100,
      passingMarks: 40,
      instructor: "Prof. Williams",
      status: "scheduled",
      daysLeft: 37,
      syllabus: ["Calculus", "Linear Algebra", "Differential Equations"],
    },
    {
      id: 3,
      title: "Practical Examination",
      course: "Physics 150",
      courseCode: "PHYS 150",
      date: "November 25, 2024",
      time: "10:00 AM - 1:00 PM",
      duration: "3 hours",
      location: "Physics Lab 1",
      type: "Practical",
      totalMarks: 50,
      passingMarks: 20,
      instructor: "Dr. Brown",
      status: "scheduled",
      daysLeft: 22,
      syllabus: ["Mechanics Lab", "Thermodynamics Lab", "Wave Physics"],
    },
  ]

  const completedExams = [
    {
      id: 4,
      title: "Quiz 1",
      course: "Computer Science 101",
      courseCode: "CS 101",
      date: "October 15, 2024",
      time: "2:00 PM - 3:00 PM",
      duration: "1 hour",
      type: "Online",
      totalMarks: 25,
      obtainedMarks: 22,
      grade: "A-",
      status: "completed",
      result: "Pass",
    },
    {
      id: 5,
      title: "Unit Test 1",
      course: "Mathematics 201",
      courseCode: "MATH 201",
      date: "October 20, 2024",
      time: "10:00 AM - 11:30 AM",
      duration: "1.5 hours",
      type: "Written",
      totalMarks: 50,
      obtainedMarks: 42,
      grade: "B+",
      status: "completed",
      result: "Pass",
    },
  ]

  const onlineExams = [
    {
      id: 6,
      title: "Programming Assessment",
      course: "Computer Science 101",
      courseCode: "CS 101",
      date: "November 8, 2024",
      time: "3:00 PM - 5:00 PM",
      duration: "2 hours",
      type: "Online",
      totalMarks: 75,
      status: "available",
      attempts: 1,
      maxAttempts: 2,
      questions: 30,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "default"
      case "completed":
        return "secondary"
      case "available":
        return "default"
      case "in-progress":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "scheduled":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "available":
        return <Play className="h-4 w-4 text-blue-500" />
      case "in-progress":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <ClipboardList className="h-4 w-4" />
    }
  }

  const ExamCard = ({ exam, showResult = false }: { exam: any, showResult?: boolean }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {getStatusIcon(exam.status)}
              <CardTitle className="text-lg">{exam.title}</CardTitle>
            </div>
            <CardDescription>
              {exam.course} ({exam.courseCode})
            </CardDescription>
            {exam.instructor && (
              <p className="text-sm text-muted-foreground">Instructor: {exam.instructor}</p>
            )}
          </div>
          <div className="text-right space-y-1">
            <Badge variant={getStatusColor(exam.status) as any}>
              {exam.status}
            </Badge>
            {exam.daysLeft !== undefined && (
              <div className="text-sm text-muted-foreground">
                {exam.daysLeft} days left
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{exam.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{exam.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
            <span>{exam.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>{exam.totalMarks} marks</span>
          </div>
        </div>

        {exam.location && (
          <div className="text-sm">
            <strong>Location:</strong> {exam.location}
          </div>
        )}

        {exam.duration && (
          <div className="text-sm">
            <strong>Duration:</strong> {exam.duration}
          </div>
        )}

        {showResult && exam.obtainedMarks !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Score</span>
              <span>{exam.obtainedMarks}/{exam.totalMarks}</span>
            </div>
            <Progress value={(exam.obtainedMarks / exam.totalMarks) * 100} className="h-2" />
            <div className="flex justify-between items-center">
              <Badge variant={exam.result === "Pass" ? "default" : "destructive"}>
                {exam.result}
              </Badge>
              <span className="font-medium text-lg">{exam.grade}</span>
            </div>
          </div>
        )}

        {exam.syllabus && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Syllabus:</p>
            <div className="flex flex-wrap gap-1">
              {exam.syllabus.map((topic: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {exam.questions && (
          <div className="text-sm">
            <strong>Questions:</strong> {exam.questions} | <strong>Attempts:</strong> {exam.attempts}/{exam.maxAttempts}
          </div>
        )}

        <div className="flex gap-2">
          {exam.status === "scheduled" && (
            <>
              <Button className="flex-1" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </Button>
              <Button variant="outline" size="sm">
                Study Material
              </Button>
            </>
          )}
          {exam.status === "available" && (
            <Button className="flex-1" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Start Exam
            </Button>
          )}
          {exam.status === "completed" && (
            <Button variant="outline" className="flex-1" size="sm">
              <Eye className="mr-2 h-4 w-4" />
              View Result
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Exams</h2>
          <p className="text-muted-foreground">
            Manage your examinations and track your performance
          </p>
        </div>
        <Button>
          <ClipboardList className="mr-2 h-4 w-4" />
          Exam Schedule
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Upcoming Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{upcomingExams.length}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Completed Exams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{completedExams.length}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Overall performance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Next Exam</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">12</div>
            <p className="text-xs text-muted-foreground">Days remaining</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search exams..." className="pl-8" />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by course" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="cs101">CS 101</SelectItem>
            <SelectItem value="math201">MATH 201</SelectItem>
            <SelectItem value="phys150">PHYS 150</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="written">Written</SelectItem>
            <SelectItem value="online">Online</SelectItem>
            <SelectItem value="practical">Practical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Exam Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingExams.length})</TabsTrigger>
          <TabsTrigger value="online">Online Exams ({onlineExams.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedExams.length})</TabsTrigger>
          <TabsTrigger value="results">Results</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="online" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {onlineExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {completedExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} showResult={true} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exam Results Summary</CardTitle>
              <CardDescription>Your performance across all completed exams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedExams.map((exam) => (
                  <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <p className="font-medium">{exam.title}</p>
                      <p className="text-sm text-muted-foreground">{exam.course}</p>
                      <p className="text-sm text-muted-foreground">{exam.date}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-lg font-bold">{exam.grade}</div>
                      <div className="text-sm text-muted-foreground">
                        {exam.obtainedMarks}/{exam.totalMarks}
                      </div>
                      <Badge variant={exam.result === "Pass" ? "default" : "destructive"}>
                        {exam.result}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Exam Calendar Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Exam Calendar</CardTitle>
          <CardDescription>Upcoming exam schedule at a glance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingExams.slice(0, 3).map((exam) => (
              <div key={exam.id} className="flex items-center gap-4 p-3 border rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {new Date(exam.date).getDate()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {new Date(exam.date).toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">{exam.title}</p>
                  <p className="text-sm text-muted-foreground">{exam.course}</p>
                  <p className="text-sm text-muted-foreground">{exam.time}</p>
                </div>
                <div className="text-right">
                  <Badge variant="outline">{exam.type}</Badge>
                  <p className="text-sm text-muted-foreground mt-1">{exam.location}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

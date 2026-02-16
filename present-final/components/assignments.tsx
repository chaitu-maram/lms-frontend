import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Clock, AlertCircle, CheckCircle, Upload, Search } from 'lucide-react'

export function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Data Structures Project",
      course: "Computer Science 101",
      courseCode: "CS 101",
      dueDate: "Oct 25, 2024",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "high",
      points: 100,
      description: "Implement a binary search tree with insertion, deletion, and traversal methods.",
      submitted: false,
      progress: 60,
    },
    {
      id: 2,
      title: "Calculus Problem Set #5",
      course: "Mathematics 201",
      courseCode: "MATH 201",
      dueDate: "Oct 27, 2024",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "medium",
      points: 50,
      description: "Solve integration problems using various techniques.",
      submitted: false,
      progress: 30,
    },
    {
      id: 3,
      title: "Lab Report - Thermodynamics",
      course: "Physics 150",
      courseCode: "PHYS 150",
      dueDate: "Oct 30, 2024",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "low",
      points: 75,
      description: "Analyze experimental data and write a comprehensive lab report.",
      submitted: false,
      progress: 10,
    },
    {
      id: 4,
      title: "Essay - Modern Literature",
      course: "English Literature",
      courseCode: "ENG 102",
      dueDate: "Oct 20, 2024",
      dueTime: "11:59 PM",
      status: "submitted",
      priority: "medium",
      points: 80,
      description: "Write a 5-page essay analyzing themes in contemporary fiction.",
      submitted: true,
      progress: 100,
      grade: "A-",
    },
    {
      id: 5,
      title: "Chemical Reactions Lab",
      course: "Chemistry 101",
      courseCode: "CHEM 101",
      dueDate: "Nov 5, 2024",
      dueTime: "11:59 PM",
      status: "pending",
      priority: "medium",
      points: 60,
      description: "Complete lab exercises on chemical reaction rates.",
      submitted: false,
      progress: 0,
    },
  ]

  const pendingAssignments = assignments.filter(a => a.status === "pending")
  const submittedAssignments = assignments.filter(a => a.status === "submitted")
  const overdueAssignments = assignments.filter(a => a.status === "overdue")

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4 text-orange-500" />
      case "submitted":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const AssignmentCard = ({ assignment }: { assignment: any }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {getStatusIcon(assignment.status)}
              <CardTitle className="text-lg">{assignment.title}</CardTitle>
            </div>
            <CardDescription>
              {assignment.course} ({assignment.courseCode})
            </CardDescription>
          </div>
          <div className="text-right space-y-1">
            <Badge variant={getPriorityColor(assignment.priority) as any}>
              {assignment.priority} priority
            </Badge>
            <div className="text-sm font-medium">{assignment.points} pts</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{assignment.description}</p>
        
        {assignment.status === "pending" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{assignment.progress}%</span>
            </div>
            <Progress value={assignment.progress} className="h-2" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            Due: {assignment.dueDate} at {assignment.dueTime}
          </div>
          {assignment.grade && (
            <div className="font-medium text-green-600">
              Grade: {assignment.grade}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {assignment.status === "pending" ? (
            <>
              <Button className="flex-1" size="sm">
                <Upload className="mr-2 h-4 w-4" />
                Submit
              </Button>
              <Button variant="outline" size="sm">
                Save Draft
              </Button>
            </>
          ) : (
            <Button variant="outline" className="flex-1" size="sm">
              View Submission
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
          <h2 className="text-3xl font-bold tracking-tight">Assignments</h2>
          <p className="text-muted-foreground">
            Manage your assignments and track submission deadlines
          </p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Assignment
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{pendingAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Due soon</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Submitted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{submittedAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{overdueAssignments.length}</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">B+</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search assignments..." className="pl-8" />
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
            <SelectItem value="eng102">ENG 102</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="due-date">Due Date</SelectItem>
            <SelectItem value="priority">Priority</SelectItem>
            <SelectItem value="course">Course</SelectItem>
            <SelectItem value="points">Points</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Assignment Tabs */}
      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingAssignments.length})</TabsTrigger>
          <TabsTrigger value="submitted">Submitted ({submittedAssignments.length})</TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({overdueAssignments.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {assignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {pendingAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="submitted" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {submittedAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          <div className="text-center py-8">
            <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-lg font-medium">No overdue assignments!</h3>
            <p className="text-muted-foreground">You're all caught up. Keep up the good work!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

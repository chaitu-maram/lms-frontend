import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Award, BookOpen, Download } from 'lucide-react'

export function Grades() {
  const courses = [
    {
      id: 1,
      name: "Computer Science 101",
      code: "CS 101",
      instructor: "Dr. Johnson",
      currentGrade: "A-",
      percentage: 91.5,
      credits: 3,
      assignments: [
        { name: "Project 1", grade: "A", points: 95, maxPoints: 100, weight: 20 },
        { name: "Midterm Exam", grade: "A-", points: 88, maxPoints: 100, weight: 30 },
        { name: "Quiz 1", grade: "A+", points: 98, maxPoints: 100, weight: 10 },
        { name: "Quiz 2", grade: "B+", points: 87, maxPoints: 100, weight: 10 },
        { name: "Homework 1", grade: "A", points: 92, maxPoints: 100, weight: 15 },
        { name: "Homework 2", grade: "A-", points: 89, maxPoints: 100, weight: 15 },
      ],
      trend: "up",
    },
    {
      id: 2,
      name: "Mathematics 201",
      code: "MATH 201",
      instructor: "Prof. Williams",
      currentGrade: "B+",
      percentage: 87.2,
      credits: 4,
      assignments: [
        { name: "Problem Set 1", grade: "B+", points: 85, maxPoints: 100, weight: 15 },
        { name: "Problem Set 2", grade: "A-", points: 90, maxPoints: 100, weight: 15 },
        { name: "Midterm Exam", grade: "B", points: 82, maxPoints: 100, weight: 35 },
        { name: "Quiz 1", grade: "A", points: 94, maxPoints: 100, weight: 10 },
        { name: "Quiz 2", grade: "B+", points: 88, maxPoints: 100, weight: 10 },
        { name: "Homework", grade: "A-", points: 91, maxPoints: 100, weight: 15 },
      ],
      trend: "up",
    },
    {
      id: 3,
      name: "Physics 150",
      code: "PHYS 150",
      instructor: "Dr. Brown",
      currentGrade: "A",
      percentage: 94.8,
      credits: 3,
      assignments: [
        { name: "Lab Report 1", grade: "A+", points: 98, maxPoints: 100, weight: 20 },
        { name: "Lab Report 2", grade: "A", points: 95, maxPoints: 100, weight: 20 },
        { name: "Midterm Exam", grade: "A", points: 93, maxPoints: 100, weight: 30 },
        { name: "Quiz 1", grade: "A+", points: 97, maxPoints: 100, weight: 15 },
        { name: "Quiz 2", grade: "A", points: 92, maxPoints: 100, weight: 15 },
      ],
      trend: "up",
    },
    {
      id: 4,
      name: "English Literature",
      code: "ENG 102",
      instructor: "Prof. Davis",
      currentGrade: "B",
      percentage: 83.5,
      credits: 3,
      assignments: [
        { name: "Essay 1", grade: "B+", points: 87, maxPoints: 100, weight: 25 },
        { name: "Essay 2", grade: "B", points: 82, maxPoints: 100, weight: 25 },
        { name: "Midterm Exam", grade: "B-", points: 79, maxPoints: 100, weight: 25 },
        { name: "Participation", grade: "A-", points: 90, maxPoints: 100, weight: 15 },
        { name: "Quiz 1", grade: "B+", points: 85, maxPoints: 100, weight: 10 },
      ],
      trend: "down",
    },
  ]

  const semesterStats = {
    gpa: 3.7,
    totalCredits: 13,
    completedCredits: 13,
    averageGrade: "B+",
    highestGrade: "A",
    lowestGrade: "B",
  }

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "text-green-600"
    if (grade.startsWith("B")) return "text-blue-600"
    if (grade.startsWith("C")) return "text-yellow-600"
    if (grade.startsWith("D")) return "text-orange-600"
    return "text-red-600"
  }

  const getGradeBadgeVariant = (grade: string) => {
    if (grade.startsWith("A")) return "default"
    if (grade.startsWith("B")) return "secondary"
    if (grade.startsWith("C")) return "outline"
    return "destructive"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Grades</h2>
          <p className="text-muted-foreground">
            Track your academic performance and progress
          </p>
        </div>
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Export Transcript
        </Button>
      </div>

      {/* Semester Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="h-4 w-4" />
              Current GPA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{semesterStats.gpa}</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{semesterStats.completedCredits}/{semesterStats.totalCredits}</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Average Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{semesterStats.averageGrade}</div>
            <p className="text-xs text-muted-foreground">All courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Grade Range</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{semesterStats.highestGrade} - {semesterStats.lowestGrade}</div>
            <p className="text-xs text-muted-foreground">High - Low</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select semester" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fall2024">Fall 2024</SelectItem>
            <SelectItem value="spring2024">Spring 2024</SelectItem>
            <SelectItem value="fall2023">Fall 2023</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by grade" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            <SelectItem value="a">A Grades</SelectItem>
            <SelectItem value="b">B Grades</SelectItem>
            <SelectItem value="c">C Grades</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Course Grades */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Course Overview</TabsTrigger>
          <TabsTrigger value="detailed">Detailed Breakdown</TabsTrigger>
          <TabsTrigger value="trends">Grade Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <Card key={course.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{course.name}</CardTitle>
                      <CardDescription>{course.code} • {course.instructor}</CardDescription>
                    </div>
                    <div className="text-right space-y-1">
                      <div className={`text-2xl font-bold ${getGradeColor(course.currentGrade)}`}>
                        {course.currentGrade}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {course.percentage}%
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Course Progress</span>
                      <span>{course.percentage}%</span>
                    </div>
                    <Progress value={course.percentage} className="h-2" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{course.credits} Credits</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {course.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <span className="text-sm text-muted-foreground">
                        {course.trend === "up" ? "Improving" : "Declining"}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" size="sm">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-4">
          {courses.map((course) => (
            <Card key={course.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.code} • Current Grade: {course.currentGrade}</CardDescription>
                  </div>
                  <Badge variant={getGradeBadgeVariant(course.currentGrade) as any}>
                    {course.currentGrade}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {course.assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="space-y-1">
                        <p className="font-medium">{assignment.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Weight: {assignment.weight}%
                        </p>
                      </div>
                      <div className="text-right space-y-1">
                        <Badge variant={getGradeBadgeVariant(assignment.grade) as any}>
                          {assignment.grade}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {assignment.points}/{assignment.maxPoints}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Grade Trends</CardTitle>
              <CardDescription>Your academic performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">↗</div>
                    <p className="text-sm font-medium">Improving Courses</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-600">→</div>
                    <p className="text-sm font-medium">Stable Courses</p>
                    <p className="text-2xl font-bold">1</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-red-600">↘</div>
                    <p className="text-sm font-medium">Declining Courses</p>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/50">
                  <p className="text-muted-foreground">Grade trend chart would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

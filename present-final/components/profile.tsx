import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, MapPin, Calendar, BookOpen, Award, Edit, Camera } from 'lucide-react'

export function Profile() {
  const studentInfo = {
    name: "Tarun Amaraneni",
    email: "tarun.amaraneni@university.edu",
    studentId: "STU2024001",
    phone: "+1 (555) 123-4567",
    address: "123 University Ave, College Town, ST 12345",
    dateOfBirth: "January 15, 2002",
    enrollmentDate: "August 2022",
    expectedGraduation: "May 2026",
    major: "Computer Science",
    minor: "Mathematics",
    advisor: "Dr. Johnson",
    gpa: 3.7,
    totalCredits: 45,
    status: "Full-time",
  }

  const academicHistory = [
    { semester: "Fall 2024", gpa: 3.8, credits: 15, status: "In Progress" },
    { semester: "Spring 2024", gpa: 3.7, credits: 16, status: "Completed" },
    { semester: "Fall 2023", gpa: 3.6, credits: 14, status: "Completed" },
    { semester: "Spring 2023", gpa: 3.5, credits: 15, status: "Completed" },
  ]

  const achievements = [
    { title: "Dean's List", semester: "Spring 2024", description: "Academic excellence" },
    { title: "Programming Contest Winner", semester: "Fall 2023", description: "1st place in university coding competition" },
    { title: "Honor Society Member", semester: "Fall 2023", description: "Inducted into Computer Science Honor Society" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
          <p className="text-muted-foreground">
            Manage your personal information and academic details
          </p>
        </div>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit Profile
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <div className="relative mx-auto">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" />
                <AvatarFallback className="text-lg">TA</AvatarFallback>
              </Avatar>
              <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <CardTitle>{studentInfo.name}</CardTitle>
              <CardDescription>{studentInfo.studentId}</CardDescription>
              <Badge variant="secondary">{studentInfo.status} Student</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{studentInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Born {studentInfo.dateOfBirth}</span>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current GPA</span>
                <span className="font-medium">{studentInfo.gpa}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Credits</span>
                <span className="font-medium">{studentInfo.totalCredits}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Expected Graduation</span>
                <span className="font-medium">{studentInfo.expectedGraduation}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="personal" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Tarun" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Amaraneni" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue={studentInfo.email} />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={studentInfo.phone} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input id="dateOfBirth" type="date" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea id="address" defaultValue={studentInfo.address} />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="academic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Information</CardTitle>
                  <CardDescription>Your academic program details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Student ID</Label>
                      <Input value={studentInfo.studentId} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Enrollment Status</Label>
                      <Input value={studentInfo.status} disabled />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Major</Label>
                      <Input value={studentInfo.major} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Minor</Label>
                      <Input value={studentInfo.minor} disabled />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Academic Advisor</Label>
                      <Input value={studentInfo.advisor} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Expected Graduation</Label>
                      <Input value={studentInfo.expectedGraduation} disabled />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Current GPA</Label>
                      <Input value={studentInfo.gpa} disabled />
                    </div>
                    <div className="space-y-2">
                      <Label>Total Credits</Label>
                      <Input value={studentInfo.totalCredits} disabled />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic History</CardTitle>
                  <CardDescription>Your semester-by-semester academic record</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {academicHistory.map((record, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="space-y-1">
                          <p className="font-medium">{record.semester}</p>
                          <p className="text-sm text-muted-foreground">{record.credits} Credits</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="font-medium">GPA: {record.gpa}</p>
                          <Badge variant={record.status === "Completed" ? "default" : "secondary"}>
                            {record.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Awards</CardTitle>
                  <CardDescription>Your academic accomplishments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                        <Award className="h-6 w-6 text-yellow-500 mt-1" />
                        <div className="space-y-1">
                          <p className="font-medium">{achievement.title}</p>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          <Badge variant="outline">{achievement.semester}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

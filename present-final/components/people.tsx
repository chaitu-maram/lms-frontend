import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Mail, Phone, UserPlus, MessageSquare } from 'lucide-react'

export function People() {
  const instructors = [
    {
      id: 1,
      name: "Dr. Johnson",
      title: "Computer Science Professor",
      department: "Computer Science",
      email: "johnson@university.edu",
      phone: "+1 (555) 123-4567",
      office: "CS Building, Room 301",
      courses: ["CS 101", "CS 301"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
    },
    {
      id: 2,
      name: "Prof. Williams",
      title: "Mathematics Professor",
      department: "Mathematics",
      email: "williams@university.edu",
      phone: "+1 (555) 234-5678",
      office: "Math Building, Room 205",
      courses: ["MATH 201", "MATH 301"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: false,
    },
    {
      id: 3,
      name: "Dr. Brown",
      title: "Physics Professor",
      department: "Physics",
      email: "brown@university.edu",
      phone: "+1 (555) 345-6789",
      office: "Physics Building, Room 150",
      courses: ["PHYS 150", "PHYS 250"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
    },
  ]

  const classmates = [
    {
      id: 1,
      name: "Sarah Chen",
      major: "Computer Science",
      year: "Junior",
      email: "sarah.chen@student.university.edu",
      courses: ["CS 101", "MATH 201"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      major: "Computer Science",
      year: "Junior",
      email: "mike.rodriguez@student.university.edu",
      courses: ["CS 101", "PHYS 150"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: false,
    },
    {
      id: 3,
      name: "Emily Davis",
      major: "Mathematics",
      year: "Senior",
      email: "emily.davis@student.university.edu",
      courses: ["MATH 201", "PHYS 150"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: true,
    },
    {
      id: 4,
      name: "Alex Thompson",
      major: "Physics",
      year: "Sophomore",
      email: "alex.thompson@student.university.edu",
      courses: ["PHYS 150", "MATH 201"],
      avatar: "/placeholder.svg?height=60&width=60",
      online: false,
    },
  ]

  const PersonCard = ({ person, type }: { person: any, type: 'instructor' | 'student' }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={person.avatar || "/placeholder.svg"} />
              <AvatarFallback>{person.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {person.online && (
              <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
            )}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">{person.name}</CardTitle>
            <CardDescription>
              {type === 'instructor' ? person.title : `${person.major} - ${person.year}`}
            </CardDescription>
            {type === 'instructor' && (
              <Badge variant="outline" className="mt-1">{person.department}</Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span>{person.email}</span>
          </div>
          {type === 'instructor' && (
            <>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span>{person.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{person.office}</span>
              </div>
            </>
          )}
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium">Courses:</p>
          <div className="flex flex-wrap gap-1">
            {person.courses.map((course: string) => (
              <Badge key={course} variant="secondary" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1">
            <MessageSquare className="mr-2 h-4 w-4" />
            Message
          </Button>
          <Button variant="outline" size="sm">
            <UserPlus className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">People</h2>
          <p className="text-muted-foreground">
            Connect with instructors and classmates
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search people..." className="pl-8" />
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
            <SelectValue placeholder="Show online" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All People</SelectItem>
            <SelectItem value="online">Online Only</SelectItem>
            <SelectItem value="offline">Offline Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="instructors" className="space-y-4">
        <TabsList>
          <TabsTrigger value="instructors">Instructors ({instructors.length})</TabsTrigger>
          <TabsTrigger value="classmates">Classmates ({classmates.length})</TabsTrigger>
          <TabsTrigger value="groups">Study Groups</TabsTrigger>
        </TabsList>

        <TabsContent value="instructors" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor) => (
              <PersonCard key={instructor.id} person={instructor} type="instructor" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="classmates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classmates.map((classmate) => (
              <PersonCard key={classmate.id} person={classmate} type="student" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <div className="text-center py-8">
            <Users className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No study groups yet</h3>
            <p className="text-muted-foreground mb-4">Create or join study groups to collaborate with classmates</p>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Create Study Group
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

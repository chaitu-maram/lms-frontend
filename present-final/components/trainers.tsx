"use client"

import { useState, useEffect } from "react"

import { Search, Mail, Phone, User, Eye, Edit, Trash2, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface Trainer {
  id: string
  name: string
  email: string
  contactNumber: string
  tags: string[]
  active: boolean
  expertiseArea?: string
  qualifications?: string
  bio?: string
}

const trainersData: Trainer[] = [
  {
    id: "TR001",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@srm.edu",
    contactNumber: "+91 9876543210",
    tags: ["Machine Learning", "Data Science", "Python"],
    active: true,
    expertiseArea: "Machine Learning",
    qualifications: "PhD in Computer Science, 10+ years teaching",
    bio: "Researcher and educator focusing on applied ML and DS.",
  },
  {
    id: "TR002",
    name: "Prof. Tarun Amaraneni",
    email: "amaranenitarun@gmail.com",
    contactNumber: "+91 7032822570",
    tags: ["Web Development", "JavaScript", "React"],
    active: true,
    expertiseArea: "Web Development",
    qualifications: "B.Tech, Industry experience in JS/React",
    bio: "Frontend specialist passionate about UX and performance.",
  },
  {
    id: "TR003",
    name: "Dr. Priya Sharma",
    email: "priya.sharma@srm.edu",
    contactNumber: "+91 9876543212",
    tags: ["Database Systems", "SQL", "MongoDB"],
    active: false,
    expertiseArea: "Databases",
    qualifications: "PhD in Information Systems",
    bio: "Designs scalable data architectures and teaches DBMS.",
  },
  {
    id: "TR004",
    name: "Prof. David Wilson",
    email: "david.wilson@srm.edu",
    contactNumber: "+91 9876543213",
    tags: ["Mobile Development", "Flutter", "Android"],
    active: true,
    expertiseArea: "Mobile Engineering",
    qualifications: "MSc, Published apps on Play Store",
    bio: "Builds delightful mobile apps; enjoys mentoring teams.",
  },
  {
    id: "TR005",
    name: "Dr. Anita Patel",
    email: "anita.patel@srm.edu",
    contactNumber: "+91 9876543214",
    tags: ["Cloud Computing", "AWS", "DevOps"],
    active: true,
    expertiseArea: "Cloud & DevOps",
    qualifications: "AWS Solutions Architect, 8+ years",
    bio: "Helps students master cloud-native patterns and tooling.",
  },
  {
    id: "TR006",
    name: "Prof. James Rodriguez",
    email: "james.rodriguez@srm.edu",
    contactNumber: "+91 9876543215",
    tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
    active: false,
    expertiseArea: "Cybersecurity",
    qualifications: "CISSP, CEH",
    bio: "Secures systems and teaches threat modeling hands-on.",
  },
  {
    id: "TR007",
    name: "Dr. Kavya Reddy",
    email: "kavya.reddy@srm.edu",
    contactNumber: "+91 9876543216",
    tags: ["UI/UX Design", "Figma", "User Research"],
    active: true,
    expertiseArea: "UI/UX",
    qualifications: "PhD HCI, 6+ years in product design",
    bio: "Focuses on user-centered design and accessibility.",
  },
  {
    id: "TR008",
    name: "Prof. Robert Kim",
    email: "robert.kim@srm.edu",
    contactNumber: "+91 9876543217",
    tags: ["AI", "Deep Learning", "TensorFlow"],
    active: true,
    expertiseArea: "AI / Deep Learning",
    qualifications: "MS AI, Published papers in CV",
    bio: "Explores neural networks for real-world AI problems.",
  },
]

export function Trainers() {
  useEffect(() => {
  const fetchTrainers = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/trainers/")
      const data = await res.json()

      const formatted = data.map((t: any) => ({
        id: t.id,
        name: `${t.first_name} ${t.last_name}`,
        email: t.email,
        contactNumber: t.contact_number,
        tags: [],
        active: t.is_active,
        expertiseArea: t.expertise_area,
        qualifications: t.qualifications,
        bio: t.bio,
      }))

      setTrainers(formatted)
    } catch (error) {
      console.error("Failed to fetch trainers", error)
    } finally {
      setLoading(false)
    }
  }

  fetchTrainers()
}, [])

  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newTrainer, setNewTrainer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    tags: "",
  })
  const [trainers, setTrainers] = useState<Trainer[]>([])
const [loading, setLoading] = useState(true)

  const [viewTrainer, setViewTrainer] = useState<Trainer | null>(null)
  const [editingTrainer, setEditingTrainer] = useState<(Trainer & { firstName?: string; lastName?: string }) | null>(null)
  const [deleteTrainer, setDeleteTrainer] = useState<Trainer | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const filteredTrainers = trainers.filter(
    (trainer) =>
      trainer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trainer.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )
  const totalPages = Math.max(1, Math.ceil(filteredTrainers.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const paginatedTrainers = filteredTrainers.slice(startIndex, startIndex + pageSize)

  const handleView = (trainer: Trainer) => {
    console.log("View trainer:", trainer)
    // Add view logic here
  }

  const handleEdit = (trainer: Trainer) => {
    console.log("Edit trainer:", trainer)
    // Add edit logic here
  }

  const handleDelete = (trainer: Trainer) => {
    console.log("Delete trainer:", trainer)
    // Add delete logic here
  }

  const handleAddTrainer = () => {
    const name = `${newTrainer.firstName} ${newTrainer.lastName}`.trim()
    const nextNum = Math.max(0, ...trainers.map((t) => Number(t.id.replace(/\D/g, "")) || 0)) + 1
    const id = `TR${String(nextNum).padStart(3, "0")}`
    setTrainers([
      ...trainers,
      { id, name, email: newTrainer.email, contactNumber: newTrainer.contactNumber, tags: [], active: true },
    ])
    setIsAddDialogOpen(false)
    setNewTrainer({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      tags: "",
    })
  }

  const handleUpdateTrainer = async () => {
    if (!editingTrainer) return

    const [firstName = "", lastName = ""] = editingTrainer.name.split(" ")

    try {
      await fetch(`http://127.0.0.1:8000/api/auth/trainers/${editingTrainer.id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: editingTrainer.firstName ?? firstName,
          last_name: editingTrainer.lastName ?? lastName,
          email: editingTrainer.email,
          contact_number: editingTrainer.contactNumber,
        }),
      })

      setTrainers((prev) =>
        prev.map((t) =>
          t.id === editingTrainer.id
            ? {
                ...t,
                name: `${editingTrainer.firstName ?? firstName} ${editingTrainer.lastName ?? lastName}`,
                email: editingTrainer.email,
                contactNumber: editingTrainer.contactNumber,
              }
            : t,
        ),
      )

      setEditingTrainer(null)
    } catch (err) {
      console.error("Update failed", err)
    }
  }


  const handleConfirmDelete = async () => {
    if (!deleteTrainer) return

    try {
      await fetch(`http://127.0.0.1:8000/api/auth/trainers/${deleteTrainer.id}/`, {
        method: "DELETE",
      })

      setTrainers((prev) => prev.filter((t) => t.id !== deleteTrainer.id))
      setDeleteTrainer(null)
    } catch (err) {
      console.error("Delete failed", err)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trainers</h1>
          <p className="text-muted-foreground">Manage and view trainer information</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Trainer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Trainer</DialogTitle>
              <DialogDescription>Enter the details of the new trainer. Click save when you're done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="firstName" className="text-right">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  value={newTrainer.firstName}
                  onChange={(e) => setNewTrainer({ ...newTrainer, firstName: e.target.value })}
                  className="col-span-3"
                  placeholder="John"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lastName" className="text-right">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  value={newTrainer.lastName}
                  onChange={(e) => setNewTrainer({ ...newTrainer, lastName: e.target.value })}
                  className="col-span-3"
                  placeholder="Doe"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newTrainer.email}
                  onChange={(e) => setNewTrainer({ ...newTrainer, email: e.target.value })}
                  className="col-span-3"
                  placeholder="john.doe@srm.edu"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contact" className="text-right">
                  Contact
                </Label>
                <Input
                  id="contact"
                  value={newTrainer.contactNumber}
                  onChange={(e) => setNewTrainer({ ...newTrainer, contactNumber: e.target.value })}
                  className="col-span-3"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAddTrainer}>
                Save Trainer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Trainers</CardTitle>
          <div className="relative w-64 md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, ID, or tags..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="pl-8"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Trainer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Contact Number</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrainers.length > 0 ? (
                  paginatedTrainers.map((trainer, index) => (
                    <TableRow key={trainer.id}>
                      <TableCell className="font-medium">{trainer.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={`/placeholder_image.png?key=cvynh&height=32&width=32`} />
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-medium">{trainer.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <a href={`mailto:${trainer.email}`} className="text-blue-600 hover:underline">
                            {trainer.email}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <a href={`tel:${trainer.contactNumber}`} className="text-blue-600 hover:underline">
                            {trainer.contactNumber}
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Switch
                            checked={trainer.active}
                            onCheckedChange={async (checked) => {
                              try {
                                await fetch(`http://127.0.0.1:8000/api/auth/trainers/${trainer.id}/`, {
                                  method: "PATCH",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    is_active: checked,
                                  }),
                                })

                                setTrainers((prev) =>
                                  prev.map((t) => (t.id === trainer.id ? { ...t, active: checked } : t)),
                                )
                              } catch (err) {
                                console.error("Status update failed", err)
                              }
                            }}

                            className="data-[state=checked]:bg-[#0096FF]"
                          />
                          <span className={trainer.active ? "text-green-600" : "text-gray-500"}>
                            {trainer.active ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            className="bg-[#0096FF] text-white hover:bg-[#0086E6] shadow-md transition-all duration-200 hover:shadow-lg"
                            onClick={() => setViewTrainer(trainer)}
                          >
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-green-500 text-white hover:bg-green-600 shadow-md transition-all duration-200 hover:shadow-lg"
                            onClick={() => setEditingTrainer({ ...trainer })}
                          >
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-500 text-white hover:bg-red-600 shadow-md transition-all duration-200 hover:shadow-lg"
                            onClick={() => setDeleteTrainer(trainer)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                      No trainers found matching your search criteria.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="py-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage((p) => Math.max(1, p - 1))
                    }}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === i + 1}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(i + 1)
                      }}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>

      {/* View Trainer Dialog */}
      <Dialog open={!!viewTrainer} onOpenChange={(open) => !open && setViewTrainer(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Trainer Details</DialogTitle>
          </DialogHeader>
          {viewTrainer && (
            <div className="grid gap-3">
              <div>
                <div className="text-xs text-muted-foreground">Trainer ID</div>
                <div className="font-medium">{viewTrainer.id}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Name</div>
                <div className="font-medium">{viewTrainer.name}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">{viewTrainer.email}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Contact</div>
                <div className="font-medium">{viewTrainer.contactNumber}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Expertise Area</div>
                <div className="font-medium">{viewTrainer.expertiseArea || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Qualifications</div>
                <div className="leading-relaxed">{viewTrainer.qualifications || "—"}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Bio</div>
                <div className="leading-relaxed">{viewTrainer.bio || "—"}</div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Edit Trainer Dialog */}
      <Dialog open={!!editingTrainer} onOpenChange={(open) => !open && setEditingTrainer(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Edit Trainer</DialogTitle>
          </DialogHeader>
          {editingTrainer && (
            <div className="grid gap-4 py-2">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">First Name</Label>
                <Input
                  value={editingTrainer.firstName ?? editingTrainer.name.split(" ")[0]}
                  onChange={(e) => setEditingTrainer({ ...editingTrainer, firstName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Last Name</Label>
                <Input
                  value={editingTrainer.lastName ?? editingTrainer.name.split(" ").slice(1).join(" ")}
                  onChange={(e) => setEditingTrainer({ ...editingTrainer, lastName: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Email</Label>
                <Input
                  value={editingTrainer.email}
                  onChange={(e) => setEditingTrainer({ ...editingTrainer, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Contact</Label>
                <Input
                  value={editingTrainer.contactNumber}
                  onChange={(e) => setEditingTrainer({ ...editingTrainer, contactNumber: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setEditingTrainer(null)}>
                  Cancel
                </Button>
                <Button onClick={handleUpdateTrainer} className="bg-blue-500 text-white hover:bg-blue-600">
                  Update
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteTrainer} onOpenChange={(open) => !open && setDeleteTrainer(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this trainer?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTrainer ? `${deleteTrainer.id} — ${deleteTrainer.name}` : ""}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete} className="bg-rose-600 hover:bg-rose-700">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

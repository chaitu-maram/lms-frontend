// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Search, Plus, Eye, Edit, Trash2, ChevronsUpDown, Check } from "lucide-react"

// type Course = {
//   id: number
//   name: string
//   courseId: string
//   description: string
//   trainer: string
//   trainerId: string
// }

// export function Courses() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [viewCourse, setViewCourse] = useState<{
//     id: number
//     name: string
//     courseId: string
//     description: string
//     trainer: string
//     trainerId: string
//   } | null>(null)
//   const [editingCourse, setEditingCourse] = useState<Course | null>(null)
//   const [newCourse, setNewCourse] = useState({
//     name: "",
//     description: "",
//     trainer: "",
//     trainerId: "",
//   })

//   const [courses, setCourses] = useState<Course[]>(() => {
//     const baseDescriptions = [
//       "Introduction to programming concepts and problem-solving techniques using modern programming languages.",
//       "Advanced data structures and algorithms for efficient programming solutions.",
//       "Full-stack web development using modern frameworks and technologies.",
//       "Foundations of computer systems and architecture.",
//       "Principles of database design and SQL.",
//       "Operating systems concepts and process management.",
//       "Network fundamentals and protocols.",
//       "Software engineering methodologies and practices.",
//       "Machine learning fundamentals and applications.",
//       "Data visualization and analytics techniques.",
//     ]
//     const trainerPool = [
//       { id: "TR001", name: "Dr. Sarah Johnson" },
//       { id: "TR002", name: "Prof. Michael Chen" },
//       { id: "TR003", name: "Dr. Priya Sharma" },
//       { id: "TR004", name: "Prof. David Wilson" },
//       { id: "TR005", name: "Dr. Anita Patel" },
//       { id: "TR006", name: "Prof. James Rodriguez" },
//       { id: "TR007", name: "Dr. Kavya Reddy" },
//       { id: "TR008", name: "Prof. Robert Kim" },
//     ]
//     const generated: Course[] = []
//     for (let i = 1; i <= 20; i++) {
//       const trainer = trainerPool[(i - 1) % trainerPool.length]
//       generated.push({
//         id: i,
//         name: `Course ${i}`,
//         courseId: `C${(100 + i).toString()}`,
//         description: baseDescriptions[(i - 1) % baseDescriptions.length],
//         trainer: trainer.name,
//         trainerId: trainer.id,
//       })
//     }
//     return generated
//   })

//   const trainerOptions = [
//     { id: "TR001", name: "Dr. Sarah Johnson" },
//     { id: "TR002", name: "Prof. Michael Chen" },
//     { id: "TR003", name: "Dr. Priya Sharma" },
//     { id: "TR004", name: "Prof. David Wilson" },
//     { id: "TR005", name: "Dr. Anita Patel" },
//     { id: "TR006", name: "Prof. James Rodriguez" },
//     { id: "TR007", name: "Dr. Kavya Reddy" },
//     { id: "TR008", name: "Prof. Robert Kim" },
//   ]

//   const [isAddTrainerOpen, setIsAddTrainerOpen] = useState(false)
//   const [isEditTrainerOpen, setIsEditTrainerOpen] = useState(false)
//   const [deleteCourse, setDeleteCourse] = useState<Course | null>(null)

//   const [currentPage, setCurrentPage] = useState(1)
//   const pageSize = 5

//   const filteredCourses = courses.filter(
//     (course) =>
//       course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.courseId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.trainer.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       course.trainerId.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   const totalPages = Math.max(1, Math.ceil(filteredCourses.length / pageSize))
//   const startIndex = (currentPage - 1) * pageSize
//   const paginatedCourses = filteredCourses.slice(startIndex, startIndex + pageSize)

//   const handleAddCourse = () => {
//     // Add course logic here
//     console.log("Adding course:", newCourse)
//     // Insert a simple new course into the in-memory list
//     const nextId = Math.max(0, ...courses.map((c) => c.id)) + 1
//     setCourses([
//       ...courses,
//       {
//         id: nextId,
//         name: newCourse.name,
//         courseId: `C${nextId.toString().padStart(3, "0")}`,
//         description: newCourse.description,
//         trainer: newCourse.trainer,
//         trainerId: newCourse.trainerId,
//       },
//     ])
//     setIsAddDialogOpen(false)
//     setNewCourse({
//       name: "",
//       description: "",
//       trainer: "",
//       trainerId: "",
//     })
//   }

//   const handleUpdateCourse = () => {
//     if (!editingCourse) return
//     setCourses((prev) => prev.map((c) => (c.id === editingCourse.id ? editingCourse : c)))
//     setEditingCourse(null)
//   }

//   const handleConfirmDelete = () => {
//     if (!deleteCourse) return
//     setCourses((prev) => prev.filter((c) => c.id !== deleteCourse.id))
//     setDeleteCourse(null)
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
//           <p className="text-muted-foreground">manage courses</p>
//         </div>
//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-[#0096FF] text-white hover:bg-[#0086E6]">
//               <Plus className="mr-2 h-4 w-4" />
//               Add Course
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add New Course</DialogTitle>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               {/* Course ID removed per requirement */}
//               <div className="grid gap-2">
//                 <Label htmlFor="courseName">Course Name</Label>
//                 <Input
//                   id="courseName"
//                   placeholder="e.g., Computer Science 101"
//                   value={newCourse.name}
//                   onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="courseDescription">Course Description</Label>
//                 <Textarea
//                   id="courseDescription"
//                   placeholder="Enter course description..."
//                   value={newCourse.description}
//                   onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="trainerSelect">Trainer</Label>
//                 <Popover open={isAddTrainerOpen} onOpenChange={setIsAddTrainerOpen}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       id="trainerSelect"
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={isAddTrainerOpen}
//                       className="w-full justify-between"
//                     >
//                       {newCourse.trainerId && newCourse.trainer
//                         ? `${newCourse.trainerId} — ${newCourse.trainer}`
//                         : "Select trainer (ID — Name)"}
//                       <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
//                     <Command>
//                       <CommandInput placeholder="Search trainer..." />
//                       <CommandEmpty>No trainer found.</CommandEmpty>
//                       <CommandList>
//                         <CommandGroup>
//                           {trainerOptions.map((t) => (
//                             <CommandItem
//                               key={t.id}
//                               value={`${t.id}|${t.name}`}
//                               onSelect={(value) => {
//                                 const [id, name] = value.split("|")
//                                 setNewCourse({ ...newCourse, trainerId: id, trainer: name })
//                                 setIsAddTrainerOpen(false)
//                               }}
//                             >
//                               <Check
//                                 className={`mr-2 h-4 w-4 ${
//                                   newCourse.trainerId === t.id ? "opacity-100" : "opacity-0"
//                                 }`}
//                               />
//                               {t.id} — {t.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleAddCourse} className="bg-blue-500 text-white hover:bg-blue-600">
//                 Save Course
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Filters */}
//       <div className="flex gap-4">
//         <div className="relative w-64 md:w-80">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             placeholder="Search courses..."
//             className="pl-8"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value)
//               setCurrentPage(1)
//             }}
//           />
//         </div>
//       </div>

//       {/* Courses Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>All Courses</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Course ID</TableHead>
//                 <TableHead>Course Name</TableHead>
//                 <TableHead>Course Description</TableHead>
//                 <TableHead>Trainer</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredCourses.length > 0 ? (
//                 paginatedCourses.map((course, index) => (
//                   <TableRow key={course.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                     <TableCell className="font-medium">{course.courseId}</TableCell>
//                     <TableCell>{course.name}</TableCell>
//                     <TableCell className="max-w-md">
//                       <p className="truncate">{course.description}</p>
//                     </TableCell>
//                     <TableCell>{`${course.trainer} (${course.trainerId})`}</TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex justify-end gap-2">
//                         <Button
//                           size="sm"
//                           className="bg-[#0096FF] text-white hover:bg-[#0086E6] shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setViewCourse(course)}
//                         >
//                           <Eye className="h-3 w-3" />
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-green-500 text-white hover:bg-green-600 shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setEditingCourse({ ...course })}
//                         >
//                           <Edit className="h-3 w-3" />
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-red-500 text-white hover:bg-red-600 shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setDeleteCourse(course)}
//                         >
//                           <Trash2 className="h-3 w-3" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
//                     No courses found matching your search.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//         <div className="py-4">
//           <Pagination>
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setCurrentPage((p) => Math.max(1, p - 1))
//                   }}
//                 />
//               </PaginationItem>
//               {Array.from({ length: totalPages }).map((_, i) => (
//                 <PaginationItem key={i}>
//                   <PaginationLink
//                     href="#"
//                     isActive={currentPage === i + 1}
//                     onClick={(e) => {
//                       e.preventDefault()
//                       setCurrentPage(i + 1)
//                     }}
//                   >
//                     {i + 1}
//                   </PaginationLink>
//                 </PaginationItem>
//               ))}
//               <PaginationItem>
//                 <PaginationNext
//                   href="#"
//                   onClick={(e) => {
//                     e.preventDefault()
//                     setCurrentPage((p) => Math.min(totalPages, p + 1))
//                   }}
//                 />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       </Card>

//       {/* View Course Dialog */}
//       <Dialog open={!!viewCourse} onOpenChange={(open) => !open && setViewCourse(null)}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>Course Details</DialogTitle>
//           </DialogHeader>
//           {viewCourse && (
//             <div className="grid gap-4">
//               <div>
//                 <div className="text-xs text-muted-foreground">Course ID</div>
//                 <div className="font-medium">{viewCourse.courseId}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Name</div>
//                 <div className="font-medium">{viewCourse.name}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Trainer</div>
//                 <div className="font-medium">{viewCourse.trainer}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Trainer ID</div>
//                 <div className="font-medium">{viewCourse.trainerId}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Description</div>
//                 <div className="leading-relaxed">{viewCourse.description}</div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Edit Course Dialog */}
//       <Dialog open={!!editingCourse} onOpenChange={(open) => !open && setEditingCourse(null)}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>Edit Course</DialogTitle>
//           </DialogHeader>
//           {editingCourse && (
//             <div className="grid gap-4 py-2">
//               <div className="grid gap-2">
//                 <Label htmlFor="editCourseId">Course ID</Label>
//                 <Input
//                   id="editCourseId"
//                   value={editingCourse.courseId}
//                   disabled
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editCourseName">Course Name</Label>
//                 <Input
//                   id="editCourseName"
//                   value={editingCourse.name}
//                   onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editCourseDescription">Course Description</Label>
//                 <Textarea
//                   id="editCourseDescription"
//                   value={editingCourse.description}
//                   onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editTrainerSelect">Trainer</Label>
//                 <Popover open={isEditTrainerOpen} onOpenChange={setIsEditTrainerOpen}>
//                   <PopoverTrigger asChild>
//                     <Button
//                       id="editTrainerSelect"
//                       variant="outline"
//                       role="combobox"
//                       aria-expanded={isEditTrainerOpen}
//                       className="w-full justify-between"
//                     >
//                       {editingCourse.trainerId && editingCourse.trainer
//                         ? `${editingCourse.trainerId} — ${editingCourse.trainer}`
//                         : "Select trainer (ID — Name)"}
//                       <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
//                     <Command>
//                       <CommandInput placeholder="Search trainer..." />
//                       <CommandEmpty>No trainer found.</CommandEmpty>
//                       <CommandList>
//                         <CommandGroup>
//                           {trainerOptions.map((t) => (
//                             <CommandItem
//                               key={t.id}
//                               value={`${t.id}|${t.name}`}
//                               onSelect={(value) => {
//                                 const [id, name] = value.split("|")
//                                 setEditingCourse({ ...editingCourse, trainerId: id, trainer: name })
//                                 setIsEditTrainerOpen(false)
//                               }}
//                             >
//                               <Check
//                                 className={`mr-2 h-4 w-4 ${
//                                   editingCourse.trainerId === t.id ? "opacity-100" : "opacity-0"
//                                 }`}
//                               />
//                               {t.id} — {t.name}
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>
//               </div>
//               <div className="flex justify-end gap-2 pt-2">
//                 <Button variant="outline" onClick={() => setEditingCourse(null)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={handleUpdateCourse} className="bg-blue-500 text-white hover:bg-blue-600">
//                   Update
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation */}
//       <AlertDialog open={!!deleteCourse} onOpenChange={(open) => !open && setDeleteCourse(null)}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure you want to delete this course?</AlertDialogTitle>
//             <AlertDialogDescription>
//               {deleteCourse ? `${deleteCourse.courseId} — ${deleteCourse.name}` : ""}
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleConfirmDelete} className="bg-rose-600 hover:bg-rose-700">
//               Delete
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//       {/* Course Statistics */}
//       <div className="grid gap-4 md:grid-cols-3">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Total Courses</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{filteredCourses.length}</div>
//             <p className="text-xs text-muted-foreground">{searchTerm ? "Filtered courses" : "Active courses"}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Total Trainers</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{new Set(filteredCourses.map((course) => course.trainer)).size}</div>
//             <p className="text-xs text-muted-foreground">Assigned trainers</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Course Status</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">Active</div>
//             <p className="text-xs text-muted-foreground">Current status</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"
import { Search, Plus, Edit, Trash2 } from "lucide-react"

type Course = {
  id: number
  course_id: string
  course_name: string
  course_description: string
  trainer: number
  trainer_name: string
}

export function Courses() {
  const API = "http://127.0.0.1:8011/api/auth/courses/"


  const [courses, setCourses] = useState<Course[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [deleteCourse, setDeleteCourse] = useState<Course | null>(null)

  const [form, setForm] = useState({
    course_name: "",
    course_description: "",
    trainer: "",
  })

  /* ================= FETCH COURSES ================= */

  const fetchCourses = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setCourses(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  /* ================= ADD ================= */

  const handleAdd = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_name: form.course_name,
        course_description: form.course_description,
        trainer: form.trainer,
      }),
    })

    setIsAddOpen(false)
    setForm({ course_name: "", course_description: "", trainer: "" })
    fetchCourses()
  }

  /* ================= UPDATE ================= */

  const handleUpdate = async () => {
    if (!editingCourse) return

    await fetch(`${API}${editingCourse.id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_name: editingCourse.course_name,
        course_description: editingCourse.course_description,
        trainer: editingCourse.trainer,
      }),
    })

    setEditingCourse(null)
    fetchCourses()
  }

  /* ================= DELETE ================= */

  const handleDelete = async () => {
    if (!deleteCourse) return

    await fetch(`${API}${deleteCourse.id}/`, {
      method: "DELETE",
    })

    setDeleteCourse(null)
    fetchCourses()
  }

  /* ================= FILTER ================= */

  const filtered = courses.filter(c =>
    c.course_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.course_id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Courses</h2>

        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Add Course</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Course</DialogTitle>
            </DialogHeader>

            <div className="grid gap-3">
              <Label>Name</Label>
              <Input
                value={form.course_name}
                onChange={(e) => setForm({ ...form, course_name: e.target.value })}
              />

              <Label>Description</Label>
              <Textarea
                value={form.course_description}
                onChange={(e) => setForm({ ...form, course_description: e.target.value })}
              />

              <Label>Trainer ID</Label>
              <Input
                value={form.trainer}
                onChange={(e) => setForm({ ...form, trainer: e.target.value })}
              />

              <Button onClick={handleAdd}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Input
        placeholder="Search..."
        className="w-72"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Trainer</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map(course => (
                <TableRow key={course.id}>
                  <TableCell>{course.course_id}</TableCell>
                  <TableCell>{course.course_name}</TableCell>
                  <TableCell>{course.course_description}</TableCell>
                  <TableCell>{course.trainer_name}</TableCell>
                  <TableCell className="space-x-2">
                    <Button size="sm" className="bg-green-500 text-white" onClick={() => setEditingCourse(course)}>
                      <Edit size={14}/>
                    </Button>

                    <Button size="sm" className="bg-red-500 text-white" onClick={() => setDeleteCourse(course)}>
                      <Trash2 size={14}/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>


      {/* ================= EDIT COURSE ================= */}
<Dialog open={!!editingCourse} onOpenChange={() => setEditingCourse(null)}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Course</DialogTitle>
    </DialogHeader>

    {editingCourse && (
      <div className="grid gap-3">
        <Label>Name</Label>
        <Input
          value={editingCourse.course_name}
          onChange={(e) =>
            setEditingCourse({
              ...editingCourse,
              course_name: e.target.value,
            })
          }
        />

        <Label>Description</Label>
        <Textarea
          value={editingCourse.course_description}
          onChange={(e) =>
            setEditingCourse({
              ...editingCourse,
              course_description: e.target.value,
            })
          }
        />

        <Label>Trainer ID</Label>
        <Input
          value={editingCourse.trainer}
          onChange={(e) =>
            setEditingCourse({
              ...editingCourse,
              trainer: Number(e.target.value),
            })
          }
        />

        <Button onClick={handleUpdate}>Update</Button>
      </div>
    )}
  </DialogContent>
</Dialog>


      {/* DELETE CONFIRM */}
      <AlertDialog open={!!deleteCourse} onOpenChange={() => setDeleteCourse(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Course?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

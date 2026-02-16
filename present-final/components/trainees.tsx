// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Search, Plus, Eye, Edit, Trash2, Mail, Phone, User } from "lucide-react"

// interface Trainee {
//   id: number
//   traineeId: string
//   name: string
//   email: string
//   phone: string
//   active: boolean
// }

// export function Trainees() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [viewTrainee, setViewTrainee] = useState<Trainee | null>(null)
//   const [editingTrainee, setEditingTrainee] = useState<Trainee | null>(null)
//   const [newTrainee, setNewTrainee] = useState({ name: "", email: "", phone: "", active: true })

//   const [trainees, setTrainees] = useState<Trainee[]>(() => {
//     const list: Trainee[] = []
//     for (let i = 1; i <= 20; i++) {
//       list.push({
//         id: i,
//         traineeId: `T${(100 + i).toString()}`,
//         name: `Trainee ${i}`,
//         email: `trainee${i}@example.com`,
//         phone: `+91 98${(76543000 + i).toString()}`,
//         active: i % 2 === 0,
//       })
//     }
//     return list
//   })

//   const [deleteTrainee, setDeleteTrainee] = useState<Trainee | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)
//   const pageSize = 5

//   const filtered = trainees.filter(t =>
//     t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     t.traineeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     t.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     (t.active ? "active" : "inactive").includes(searchTerm.toLowerCase())
//   )

//   const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
//   const startIndex = (currentPage - 1) * pageSize
//   const page = filtered.slice(startIndex, startIndex + pageSize)

//   const handleAdd = () => {
//     if (!newTrainee.name || !newTrainee.email || !newTrainee.phone) return
//     const nextId = Math.max(0, ...trainees.map(t => t.id)) + 1
//     setTrainees([
//       ...trainees,
//       { id: nextId, traineeId: `T${String(100 + nextId)}`, name: newTrainee.name, email: newTrainee.email, phone: newTrainee.phone, active: newTrainee.active }
//     ])
//     setIsAddDialogOpen(false)
//     setNewTrainee({ name: "", email: "", phone: "", active: true })
//   }

//   const handleUpdate = () => {
//     if (!editingTrainee) return
//     setTrainees(prev => prev.map(t => t.id === editingTrainee.id ? editingTrainee : t))
//     setEditingTrainee(null)
//   }

//   const handleConfirmDelete = () => {
//     if (!deleteTrainee) return
//     setTrainees(prev => prev.filter(t => t.id !== deleteTrainee.id))
//     setDeleteTrainee(null)
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Trainees</h2>
//           <p className="text-muted-foreground">manage trainees</p>
//         </div>
//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-blue-500 text-white hover:bg-blue-600">
//               <Plus className="mr-2 h-4 w-4" />
//               Add Trainee
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add New Trainee</DialogTitle>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" value={newTrainee.name} onChange={(e) => setNewTrainee({ ...newTrainee, name: e.target.value })} />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" type="email" value={newTrainee.email} onChange={(e) => setNewTrainee({ ...newTrainee, email: e.target.value })} />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="phone">Phone</Label>
//                 <Input id="phone" value={newTrainee.phone} onChange={(e) => setNewTrainee({ ...newTrainee, phone: e.target.value })} />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="active">Status</Label>
//                 <div className="flex items-center gap-2">
//                   <Switch id="active" checked={newTrainee.active} onCheckedChange={(checked) => setNewTrainee({ ...newTrainee, active: checked })} />
//                   <span className={newTrainee.active ? "text-green-600" : "text-gray-500"}>
//                     {newTrainee.active ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
//               <Button onClick={handleAdd} className="bg-blue-500 text-white hover:bg-blue-600">Save Trainee</Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex gap-4">
//         <div className="relative w-64 md:w-80">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input placeholder="Search trainees..." className="pl-8" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }} />
//         </div>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>All Trainees</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Trainee ID</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.length ? page.map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell className="font-medium">{t.traineeId}</TableCell>
//                   <TableCell>
//                     <div className="flex items-center space-x-3">
//                       <Avatar className="h-8 w-8">
//                         <AvatarImage src={`https://i.pravatar.cc/32?img=${t.traineeId.replace(/\D/g, '')}`} />
//                         <AvatarFallback>
//                           <User className="h-4 w-4" />
//                         </AvatarFallback>
//                       </Avatar>
//                       <span className="font-medium">{t.name}</span>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center space-x-2">
//                       <Mail className="h-4 w-4 text-muted-foreground" />
//                       <a href={`mailto:${t.email}`} className="text-blue-600 hover:underline">{t.email}</a>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center space-x-2">
//                       <Phone className="h-4 w-4 text-muted-foreground" />
//                       <a href={`tel:${t.phone}`} className="text-blue-600 hover:underline">{t.phone}</a>
//                     </div>
//                   </TableCell>
//                   <TableCell>
//                     <div className="flex items-center gap-2">
//                       <Switch
//                         checked={t.active}
//                         onCheckedChange={(checked) => setTrainees(prev => prev.map(x => x.id === t.id ? { ...x, active: checked } : x))}
//                         className="data-[state=checked]:bg-[#0096FF]"
//                       />
//                       <span className={t.active ? "text-green-600" : "text-gray-500"}>{t.active ? "Active" : "Inactive"}</span>
//                     </div>
//                   </TableCell>
//                   <TableCell className="text-right">
//                     <div className="flex justify-end gap-2">
//                       <Button size="sm" className="bg-[#0096FF] text-white hover:bg-[#0086E6]" onClick={() => setViewTrainee(t)}>
//                         <Eye className="h-3 w-3" />
//                       </Button>
//                       <Button size="sm" className="bg-green-500 text-white hover:bg-green-600" onClick={() => setEditingTrainee({ ...t })}>
//                         <Edit className="h-3 w-3" />
//                       </Button>
//                       <Button size="sm" className="bg-red-500 text-white hover:bg-red-600" onClick={() => setDeleteTrainee(t)}>
//                         <Trash2 className="h-3 w-3" />
//                       </Button>
//                     </div>
//                   </TableCell>
//                 </TableRow>
//               )) : (
//                 <TableRow>
//                   <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No trainees found.</TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </CardContent>
//         <div className="py-4">
//           <Pagination>
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1)) }} />
//               </PaginationItem>
//               {Array.from({ length: totalPages }).map((_, i) => (
//                 <PaginationItem key={i}>
//                   <PaginationLink href="#" isActive={currentPage === i + 1} onClick={(e) => { e.preventDefault(); setCurrentPage(i + 1) }}>
//                     {i + 1}
//                   </PaginationLink>
//                 </PaginationItem>
//               ))}
//               <PaginationItem>
//                 <PaginationNext href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1)) }} />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       </Card>

//       <Dialog open={!!viewTrainee} onOpenChange={(open) => !open && setViewTrainee(null)}>
//         <DialogContent className="sm:max-w-[500px]">
//           <DialogHeader>
//             <DialogTitle>Trainee Details</DialogTitle>
//           </DialogHeader>
//           {viewTrainee && (
//             <div className="grid gap-4">
//               <div className="flex items-center space-x-4 mb-2">
//                 <Avatar className="h-16 w-16">
//                   <AvatarImage src={`https://i.pravatar.cc/64?img=${viewTrainee.traineeId.replace(/\D/g, '')}`} />
//                   <AvatarFallback>
//                     <User className="h-8 w-8" />
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="text-xs text-muted-foreground">Trainee ID</div>
//                   <div className="font-medium">{viewTrainee.traineeId}</div>
//                   <div className="text-xs text-muted-foreground mt-1">Name</div>
//                   <div className="font-medium">{viewTrainee.name}</div>
//                 </div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Email</div>
//                 <a className="font-medium text-blue-600 hover:underline" href={`mailto:${viewTrainee.email}`}>{viewTrainee.email}</a>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Phone</div>
//                 <a className="font-medium text-blue-600 hover:underline" href={`tel:${viewTrainee.phone}`}>{viewTrainee.phone}</a>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Status</div>
//                 <div className="font-medium">{viewTrainee.active ? "Active" : "Inactive"}</div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={!!editingTrainee} onOpenChange={(open) => !open && setEditingTrainee(null)}>
//         <DialogContent className="sm:max-w-[500px]">
//           <DialogHeader>
//             <DialogTitle>Edit Trainee</DialogTitle>
//           </DialogHeader>
//           {editingTrainee && (
//             <div className="grid gap-4 py-2">
//               <div className="grid gap-2">
//                 <Label htmlFor="editId">Trainee ID</Label>
//                 <Input id="editId" value={editingTrainee.traineeId} disabled />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editName">Name</Label>
//                 <Input id="editName" value={editingTrainee.name} onChange={(e) => setEditingTrainee({ ...editingTrainee, name: e.target.value })} />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editEmail">Email</Label>
//                 <Input id="editEmail" value={editingTrainee.email} onChange={(e) => setEditingTrainee({ ...editingTrainee, email: e.target.value })} />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editPhone">Phone</Label>
//                 <Input id="editPhone" value={editingTrainee.phone} onChange={(e) => setEditingTrainee({ ...editingTrainee, phone: e.target.value })} />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="editActive">Status</Label>
//                 <div className="flex items-center gap-2">
//                   <Switch id="editActive" checked={editingTrainee.active} onCheckedChange={(checked) => setEditingTrainee({ ...editingTrainee, active: checked })} />
//                   <span className={editingTrainee.active ? "text-green-600" : "text-gray-500"}>{editingTrainee.active ? "Active" : "Inactive"}</span>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-2 pt-2">
//                 <Button variant="outline" onClick={() => setEditingTrainee(null)}>Cancel</Button>
//                 <Button onClick={handleUpdate} className="bg-blue-500 text-white hover:bg-blue-600">Update</Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <AlertDialog open={!!deleteTrainee} onOpenChange={(open) => !open && setDeleteTrainee(null)}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure you want to delete this trainee?</AlertDialogTitle>
//             <AlertDialogDescription>
//               {deleteTrainee ? `${deleteTrainee.traineeId} — ${deleteTrainee.name}` : ""}
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleConfirmDelete} className="bg-rose-600 hover:bg-rose-700">Delete</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   )
// }



// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
// import { Label } from "@/components/ui/label"
// import { Search, Plus, Trash2 } from "lucide-react"

// import { Mail, Phone, User, Eye, Edit } from "lucide-react"

// interface Trainee {
//   id: string
//   traineeId: string
//   name: string
//   email: string
//   phone: string
//   active: boolean
// }

// export function Trainees() {
//   const [trainees, setTrainees] = useState<Trainee[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [deleteTrainee, setDeleteTrainee] = useState<Trainee | null>(null)
//   const [viewTrainee, setViewTrainee] = useState<any>(null);
//   const [editingTrainee, setEditingTrainee] = useState<any>(null);
  

//   const [newTrainee, setNewTrainee] = useState({
//     name: "",
//     email: "",
//     phone: ""
//   })

//   /* ================= FETCH FROM DJANGO ================= */

//   useEffect(() => {
//     fetchTrainees()
//   }, [])

//   const fetchTrainees = async () => {
//   try {
//     const res = await fetch("http://127.0.0.1:8000/api/auth/list_of_trainees/")
//     const data = await res.json()

//     // 🔥 Convert Django data → OLD UI FORMAT (no layout change)
//     const mappedData: Trainee[] = data.map((t: any) => ({
//       id: t.id,
//       traineeId: t.user_code ? t.user_code : t.id,   // same as before
//       name: `${t.first_name} ${t.last_name}`,        // combine names
//       email: t.email,
//       phone: t.contact_number ? t.contact_number : "",
//       active: t.is_active,
//     }))

//     setTrainees(mappedData)
//   } catch (error) {
//     console.error("Error fetching trainees:", error)
//   } finally {
//     setLoading(false)
//   }
// }

//   /* ================= ADD TRAINEE ================= */

//   const handleAdd = async () => {
//     const [first_name, last_name] = newTrainee.name.split(" ")

//     const formData = new FormData()
//     formData.append("first_name", first_name)
//     formData.append("last_name", last_name || "")
//     formData.append("email", newTrainee.email)
//     formData.append("password", "Temp@123")  // default password
//     formData.append("contact_number", newTrainee.phone)

//     try {
//       await fetch("http://127.0.0.1:8000/api/auth/register/trainee/", {
//         method: "POST",
//         body: formData,
//       })

//       fetchTrainees()
//       setIsAddDialogOpen(false)
//       setNewTrainee({ name: "", email: "", phone: "" })
//     } catch (err) {
//       console.error("Add failed:", err)
//     }
//   }

//   /* ================= DELETE TRAINEE ================= */

//   const handleConfirmDelete = async () => {
//     if (!deleteTrainee) return

//     await fetch(`http://127.0.0.1:8000/api/auth/trainees/${deleteTrainee.id}/delete/`, {

//       method: "DELETE",
//     })

//     fetchTrainees()
//     setDeleteTrainee(null)
//   }

//   /* ================= SEARCH FILTER ================= */

//   const filtered = trainees.filter(t =>
//     t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     t.email.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   /* ================= UI ================= */

//   if (loading) return <div className="p-6">Loading trainees...</div>

//   return (
//     <div className="space-y-6">

//       {/* HEADER */}
//       <div className="flex justify-between">
//         <h2 className="text-2xl font-bold">Trainees</h2>

//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-blue-600 text-white">
//               <Plus className="mr-2 h-4 w-4" />
//               Add Trainee
//             </Button>
//           </DialogTrigger>

//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add Trainee</DialogTitle>
//             </DialogHeader>

//             <div className="grid gap-4">
//               <div>
//                 <Label>Name</Label>
//                 <Input
//                   value={newTrainee.name}
//                   onChange={(e) => setNewTrainee({ ...newTrainee, name: e.target.value })}
//                 />
//               </div>

//               <div>
//                 <Label>Email</Label>
//                 <Input
//                   value={newTrainee.email}
//                   onChange={(e) => setNewTrainee({ ...newTrainee, email: e.target.value })}
//                 />
//               </div>

//               <div>
//                 <Label>Phone</Label>
//                 <Input
//                   value={newTrainee.phone}
//                   onChange={(e) => setNewTrainee({ ...newTrainee, phone: e.target.value })}
//                 />
//               </div>

//               <Button onClick={handleAdd} className="bg-green-600 text-white">
//                 Save
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* SEARCH */}
//       <div className="relative w-72">
//         <Search className="absolute left-2 top-2.5 h-4 w-4" />
//         <Input
//           placeholder="Search..."
//           className="pl-8"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* TABLE */}
//       <Card>
//         <CardHeader>
//           <CardTitle>All Trainees</CardTitle>
//         </CardHeader>

//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>ID</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Email</TableHead>
//                 <TableHead>Phone</TableHead>
//                 <TableHead>Action</TableHead>
//               </TableRow>
//             </TableHeader>

//             <TableBody>
//               {filtered.map((t) => (
//                 <TableRow key={t.id}>
//                   <TableCell>{t.traineeId}</TableCell>
//                   <TableCell>{t.name}</TableCell>
//                   <TableCell>{t.email}</TableCell>
//                   <TableCell>{t.phone}</TableCell>
//                   <TableCell>
//                     {/* <Button
//                       size="sm"
//                       className="bg-red-500 text-white"
//                       onClick={() => setDeleteTrainee(t)}
//                     >
//                       <Trash2 size={14} />
//                     </Button> */}
//                     <div className="flex gap-2">
//   {/* View Button */}
//   <Button
//     size="sm"
//     className="bg-[#0096FF] text-white hover:bg-[#0086E6] shadow-md transition-all duration-200 hover:shadow-lg"
//     onClick={() => setViewTrainee(t)}
//   >
//     <Eye className="h-3 w-3" />
//   </Button>

//   {/* Edit Button */}
//   <Button
//     size="sm"
//     className="bg-green-500 text-white hover:bg-green-600 shadow-md transition-all duration-200 hover:shadow-lg"
//     onClick={() => setEditingTrainee({ ...t })}
//   >
//     <Edit className="h-3 w-3" />
//   </Button>

//   {/* Delete Button */}
//   <Button
//     size="sm"
//     className="bg-red-500 text-white hover:bg-red-600 shadow-md transition-all duration-200 hover:shadow-lg"
//     onClick={() => setDeleteTrainee(t)}
//   >
//     <Trash2 className="h-3 w-3" />
//   </Button>
// </div>

                    
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>

//           </Table>
//         </CardContent>
//       </Card>

//       {/* DELETE CONFIRM */}
//       <AlertDialog open={!!deleteTrainee} onOpenChange={() => setDeleteTrainee(null)}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Delete Trainee?</AlertDialogTitle>
//             <AlertDialogDescription>
//               {deleteTrainee?.name}
//             </AlertDialogDescription>
//           </AlertDialogHeader>

//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction onClick={handleConfirmDelete}>
//               Delete
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//     </div>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Label } from "@/components/ui/label"

/* ✅ ALL ICONS IMPORTED HERE */
import { Search, Plus, Trash2, Mail, Phone, User, Eye, Edit } from "lucide-react"

interface Trainee {
  id: string
  traineeId: string
  name: string
  email: string
  phone: string
  active: boolean
}

export function Trainees() {
  const [trainees, setTrainees] = useState<Trainee[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [deleteTrainee, setDeleteTrainee] = useState<Trainee | null>(null)
  const [viewTrainee, setViewTrainee] = useState<any>(null)
  const [editingTrainee, setEditingTrainee] = useState<any>(null)

  const [newTrainee, setNewTrainee] = useState({
    name: "",
    email: "",
    phone: ""
  })

  /* ================= FETCH FROM DJANGO ================= */

  useEffect(() => {
    fetchTrainees()
  }, [])

  const fetchTrainees = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/list_of_trainees/")
      const data = await res.json()

      const mappedData: Trainee[] = data.map((t: any) => ({
        id: t.id,
        traineeId: t.user_code ? t.user_code : t.id,
        name: `${t.first_name} ${t.last_name}`,
        email: t.email,
        phone: t.contact_number ? t.contact_number : "",
        active: t.is_active,
      }))

      setTrainees(mappedData)
    } catch (error) {
      console.error("Error fetching trainees:", error)
    } finally {
      setLoading(false)
    }
  }

  /* ================= ADD TRAINEE ================= */

  const handleAdd = async () => {
    const [first_name, last_name] = newTrainee.name.split(" ")

    const formData = new FormData()
    formData.append("first_name", first_name)
    formData.append("last_name", last_name || "")
    formData.append("email", newTrainee.email)
    formData.append("password", "Temp@123")
    formData.append("contact_number", newTrainee.phone)

    try {
      await fetch("http://127.0.0.1:8000/api/auth/register/trainee/", {
        method: "POST",
        body: formData,
      })

      fetchTrainees()
      setIsAddDialogOpen(false)
      setNewTrainee({ name: "", email: "", phone: "" })
    } catch (err) {
      console.error("Add failed:", err)
    }
  }

  /* ================= DELETE TRAINEE ================= */

  const handleConfirmDelete = async () => {
    if (!deleteTrainee) return

    await fetch(`http://127.0.0.1:8000/api/auth/trainees/${deleteTrainee.id}/delete/`, {
      method: "DELETE",
    })

    fetchTrainees()
    setDeleteTrainee(null)
  }

  /* ================= UPDATE TRAINEE ================= */

// const handleUpdateTrainee = async () => {
//   if (!editingTrainee) return

//   const [first_name, last_name] = editingTrainee.name.split(" ")

//   const formData = new FormData()
//   formData.append("first_name", first_name)
//   formData.append("last_name", last_name || "")
//   formData.append("email", editingTrainee.email)
//   formData.append("contact_number", editingTrainee.phone)

//   try {
//     await fetch(`http://127.0.0.1:8000/api/auth/trainees/${editingTrainee.id}/`, {
//       method: "PUT",
//       body: formData,
//     })

//     fetchTrainees()
//     setEditingTrainee(null)
//   } catch (err) {
//     console.error("Update failed:", err)
//   }
// }



const handleUpdateTrainee = async () => {
  if (!editingTrainee) return

  /* 🔥 Split full name into first + last */
  const nameParts = editingTrainee.name.trim().split(" ")
  const first_name = nameParts[0]
  const last_name = nameParts.slice(1).join(" ") || ""

  const formData = new FormData()
  formData.append("first_name", first_name)
  formData.append("last_name", last_name)
  formData.append("email", editingTrainee.email)
  formData.append("contact_number", editingTrainee.phone)

  try {
    await fetch(`http://127.0.0.1:8000/api/auth/trainees/${editingTrainee.id}/`, {
      method: "PATCH",   // ✅ MUST be PATCH
      body: formData,
    })

    fetchTrainees()
    setEditingTrainee(null)

  } catch (err) {
    console.error("Update failed:", err)
  }
}


  /* ================= SEARCH FILTER ================= */

  const filtered = trainees.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div className="p-6">Loading trainees...</div>

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Trainees</h2>

        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white">
              <Plus className="mr-2 h-4 w-4" />
              Add Trainee
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Trainee</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
              <div>
                <Label>Name</Label>
                <Input
                  value={newTrainee.name}
                  onChange={(e) => setNewTrainee({ ...newTrainee, name: e.target.value })}
                />
              </div>

              <div>
                <Label>Email</Label>
                <Input
                  value={newTrainee.email}
                  onChange={(e) => setNewTrainee({ ...newTrainee, email: e.target.value })}
                />
              </div>

              <div>
                <Label>Phone</Label>
                <Input
                  value={newTrainee.phone}
                  onChange={(e) => setNewTrainee({ ...newTrainee, phone: e.target.value })}
                />
              </div>

              <Button onClick={handleAdd} className="bg-green-600 text-white">
                Save
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* SEARCH */}
      <div className="relative w-72">
        <Search className="absolute left-2 top-2.5 h-4 w-4" />
        <Input
          placeholder="Search..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <Card>
        <CardHeader>
          <CardTitle>All Trainees</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filtered.map((t) => (
                <TableRow key={t.id}>
                  <TableCell>{t.traineeId}</TableCell>
                  <TableCell>{t.name}</TableCell>
                  <TableCell>{t.email}</TableCell>
                  <TableCell>{t.phone}</TableCell>

                  <TableCell>
                    <div className="flex gap-2">

                      {/* View */}
                      <Button
                        size="sm"
                        className="bg-[#0096FF] text-white hover:bg-[#0086E6]"
                        onClick={() => setViewTrainee(t)}
                      >
                        <Eye className="h-3 w-3" />
                      </Button>

                      {/* Edit */}
                      <Button
                        size="sm"
                        className="bg-green-500 text-white hover:bg-green-600"
                        onClick={() => setEditingTrainee({ ...t })}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>

                      {/* Delete */}
                      <Button
                        size="sm"
                        className="bg-red-500 text-white hover:bg-red-600"
                        onClick={() => setDeleteTrainee(t)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>

                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

          </Table>
        </CardContent>
      </Card>
      {/* VIEW TRAINEE DIALOG */}
<Dialog open={!!viewTrainee} onOpenChange={() => setViewTrainee(null)}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Trainee Details</DialogTitle>
    </DialogHeader>

    {viewTrainee && (
      <div className="space-y-3">
        <p><b>ID:</b> {viewTrainee.traineeId}</p>
        <p><b>Name:</b> {viewTrainee.name}</p>
        <p><b>Email:</b> {viewTrainee.email}</p>
        <p><b>Phone:</b> {viewTrainee.phone}</p>
      </div>
    )}
  </DialogContent>
</Dialog>

{/* EDIT TRAINEE DIALOG */}
<Dialog open={!!editingTrainee} onOpenChange={() => setEditingTrainee(null)}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Edit Trainee</DialogTitle>
    </DialogHeader>

    {editingTrainee && (
      <div className="grid gap-4">

        <div>
          <Label>Name</Label>
          <Input
            value={editingTrainee.name}
            onChange={(e) =>
              setEditingTrainee({ ...editingTrainee, name: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Email</Label>
          <Input
            value={editingTrainee.email}
            onChange={(e) =>
              setEditingTrainee({ ...editingTrainee, email: e.target.value })
            }
          />
        </div>

        <div>
          <Label>Phone</Label>
          <Input
            value={editingTrainee.phone}
            onChange={(e) =>
              setEditingTrainee({ ...editingTrainee, phone: e.target.value })
            }
          />
        </div>

        <Button
          className="bg-green-600 text-white"
          onClick={handleUpdateTrainee}
        >
          Update Trainee
        </Button>

      </div>
    )}
  </DialogContent>
</Dialog>


      {/* DELETE CONFIRM */}
      <AlertDialog open={!!deleteTrainee} onOpenChange={() => setDeleteTrainee(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Trainee?</AlertDialogTitle>
            <AlertDialogDescription>
              {deleteTrainee?.name}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}


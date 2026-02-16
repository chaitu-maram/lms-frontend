// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
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
// import { Switch } from "@/components/ui/switch"
// import { Search, Plus, Eye, Edit, Trash2, Calendar, UserPlus, ChevronsUpDown, Check } from "lucide-react"

// type Batch = {
//   id: number
//   name: string
//   batchId: string
//   description: string
//   startDate: string
//   endDate: string
//   active: boolean // true = Active, false = Inactive
// }

// export function Batches() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [isAddTraineesDialogOpen, setIsAddTraineesDialogOpen] = useState(false)
//   const [selectedBatch, setSelectedBatch] = useState<Batch | null>(null)
//   const [isTraineeSelectOpen, setIsTraineeSelectOpen] = useState(false)
//   const [selectedTrainee, setSelectedTrainee] = useState<{ id: string; name: string } | null>(null)
//   const [viewBatch, setViewBatch] = useState<Batch | null>(null)
//   const [editingBatch, setEditingBatch] = useState<Batch | null>(null)
//   const [newBatch, setNewBatch] = useState({
//     name: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     active: true, // true = Active, false = Inactive
//   })

//   const [batches, setBatches] = useState<Batch[]>(() => {
//     const generated: Batch[] = []
    
//     for (let i = 1; i <= 15; i++) {
//       const startDate = new Date()
//       startDate.setDate(startDate.getDate() + (i * 30))
//       const endDate = new Date(startDate)
//       endDate.setDate(endDate.getDate() + 90)
      
//       generated.push({
//         id: i,
//         name: `Batch ${i}`,
//         batchId: `B${(100 + i).toString()}`,
//         description: `Description for Batch ${i} focusing on module ${(i % 5) + 1}.`,
//         startDate: startDate.toISOString().split('T')[0],
//         endDate: endDate.toISOString().split('T')[0],
//         active: i % 3 !== 0, // Alternate between active and inactive
//       })
//     }
//     return generated
//   })

//   const [deleteBatch, setDeleteBatch] = useState<Batch | null>(null)
//   const [currentPage, setCurrentPage] = useState(1)
//   const pageSize = 5

//   const filteredBatches = batches.filter(
//     (batch) =>
//       batch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       batch.batchId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       batch.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       (batch.active ? "active" : "inactive").includes(searchTerm.toLowerCase()),
//   )

//   const totalPages = Math.max(1, Math.ceil(filteredBatches.length / pageSize))
//   const startIndex = (currentPage - 1) * pageSize
//   const paginatedBatches = filteredBatches.slice(startIndex, startIndex + pageSize)

//   const traineeOptions = Array.from({ length: 20 }).map((_, i) => ({
//     id: `T${200 + i}`,
//     name: `Trainee ${i + 1}`,
//   }))

//   const handleAddBatch = () => {
//     if (!newBatch.name || !newBatch.startDate || !newBatch.endDate) {
//       alert("Please fill in all required fields")
//       return
//     }

//     const nextId = Math.max(0, ...batches.map((b) => b.id)) + 1
//     setBatches([
//       ...batches,
//       {
//         id: nextId,
//         name: newBatch.name,
//         batchId: `B${nextId.toString().padStart(3, "0")}`,
//         description: newBatch.description,
//         startDate: newBatch.startDate,
//         endDate: newBatch.endDate,
//         active: newBatch.active,
//       },
//     ])
//     setIsAddDialogOpen(false)
//     setNewBatch({
//       name: "",
//       description: "",
//       startDate: "",
//       endDate: "",
//       active: true,
//     })
//   }

//   const handleUpdateBatch = () => {
//     if (!editingBatch) return
//     setBatches((prev) => prev.map((b) => (b.id === editingBatch.id ? editingBatch : b)))
//     setEditingBatch(null)
//   }

//   const handleConfirmDelete = () => {
//     if (!deleteBatch) return
//     setBatches((prev) => prev.filter((b) => b.id !== deleteBatch.id))
//     setDeleteBatch(null)
//   }

//   const getStatusColor = (active: boolean) => {
//     return active ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h2 className="text-3xl font-bold tracking-tight">Batches</h2>
//           <p className="text-muted-foreground">manage batches</p>
//         </div>
//         <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-[#0096FF] text-white hover:bg-[#0086E6]">
//               <Plus className="mr-2 h-4 w-4" />
//               Add Batch
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Add New Batch</DialogTitle>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="batchName">Batch Name</Label>
//                 <Input
//                   id="batchName"
//                   placeholder="e.g., Morning Batch 2024"
//                   value={newBatch.name}
//                   onChange={(e) => setNewBatch({ ...newBatch, name: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="batchDescription">Description</Label>
//                 <Textarea
//                   id="batchDescription"
//                   placeholder="Brief description of the batch"
//                   value={newBatch.description}
//                   onChange={(e) => setNewBatch({ ...newBatch, description: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="startDate">Start Date</Label>
//                 <Input
//                   id="startDate"
//                   type="date"
//                   value={newBatch.startDate}
//                   onChange={(e) => setNewBatch({ ...newBatch, startDate: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="endDate">End Date</Label>
//                 <Input
//                   id="endDate"
//                   type="date"
//                   value={newBatch.endDate}
//                   onChange={(e) => setNewBatch({ ...newBatch, endDate: e.target.value })}
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="active">Status</Label>
//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     id="active"
//                     checked={newBatch.active}
//                     onCheckedChange={(checked) => setNewBatch({ ...newBatch, active: checked })}
//                   />
//                   <Label htmlFor="active" className="text-sm">
//                     {newBatch.active ? "Active" : "Inactive"}
//                   </Label>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-2">
//               <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleAddBatch} className="bg-blue-500 text-white hover:bg-blue-600">
//                 Save Batch
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
//             placeholder="Search batches..."
//             className="pl-8"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value)
//               setCurrentPage(1)
//             }}
//           />
//         </div>
//       </div>

//       {/* Batches Table */}
//       <Card>
//         <CardHeader>
//           <CardTitle>All Batches</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Batch ID</TableHead>
//                 <TableHead>Batch Name</TableHead>
//                 <TableHead>Description</TableHead>
//                 <TableHead>Start Date</TableHead>
//                 <TableHead>End Date</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead className="text-right">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredBatches.length > 0 ? (
//                 paginatedBatches.map((batch, index) => (
//                   <TableRow key={batch.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//                     <TableCell className="font-medium">{batch.batchId}</TableCell>
//                     <TableCell>{batch.name}</TableCell>
//                     <TableCell className="max-w-md"><p className="truncate">{batch.description}</p></TableCell>
//                     <TableCell>{new Date(batch.startDate).toLocaleDateString()}</TableCell>
//                     <TableCell>{new Date(batch.endDate).toLocaleDateString()}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-2">
//                         <Switch
//                           checked={batch.active}
//                           onCheckedChange={(checked) =>
//                             setBatches((prev) =>
//                               prev.map((b) => (b.id === batch.id ? { ...b, active: checked } : b)),
//                             )
//                           }
//                           className="data-[state=checked]:bg-[#0096FF]"
//                         />
//                         <span className={batch.active ? "text-green-600" : "text-gray-500"}>
//                           {batch.active ? "Active" : "Inactive"}
//                         </span>
//                       </div>
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex justify-end gap-2">
//                         <Button
//                           size="sm"
//                           className="bg-purple-500 text-white hover:bg-purple-600 shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => {
//                             setSelectedBatch(batch)
//                             setIsAddTraineesDialogOpen(true)
//                           }}
//                           title="Add Trainees"
//                         >
//                           <UserPlus className="h-3 w-3" />
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-[#0096FF] text-white hover:bg-[#0086E6] shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setViewBatch(batch)}
//                         >
//                           <Eye className="h-3 w-3" />
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-green-500 text-white hover:bg-green-600 shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setEditingBatch({ ...batch })}
//                         >
//                           <Edit className="h-3 w-3" />
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-red-500 text-white hover:bg-red-600 shadow-md transition-all duration-200 hover:shadow-lg"
//                           onClick={() => setDeleteBatch(batch)}
//                         >
//                           <Trash2 className="h-3 w-3" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
//                     No batches found matching your search.
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

//       {/* View Batch Dialog */}
//       <Dialog open={!!viewBatch} onOpenChange={(open) => !open && setViewBatch(null)}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>Batch Details</DialogTitle>
//           </DialogHeader>
//           {viewBatch && (
//             <div className="grid gap-4">
//               <div>
//                 <div className="text-xs text-muted-foreground">Batch ID</div>
//                 <div className="font-medium">{viewBatch.batchId}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Name</div>
//                 <div className="font-medium">{viewBatch.name}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Description</div>
//                 <div className="leading-relaxed">{viewBatch.description}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Start Date</div>
//                 <div className="font-medium">{new Date(viewBatch.startDate).toLocaleDateString()}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">End Date</div>
//                 <div className="font-medium">{new Date(viewBatch.endDate).toLocaleDateString()}</div>
//               </div>
//               <div>
//                 <div className="text-xs text-muted-foreground">Status</div>
//                 <div className="font-medium">
//                   <span className={viewBatch.active ? "text-green-600" : "text-gray-500"}>
//                     {viewBatch.active ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Edit Batch Dialog */}
//       <Dialog open={!!editingBatch} onOpenChange={(open) => !open && setEditingBatch(null)}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>Edit Batch</DialogTitle>
//           </DialogHeader>
//           {editingBatch && (
//             <div className="grid gap-4 py-2">
//               <div className="grid gap-2">
//                 <Label htmlFor="editBatchId">Batch ID</Label>
//                 <Input
//                   id="editBatchId"
//                   value={editingBatch.batchId}
//                   disabled
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editBatchName">Batch Name</Label>
//                 <Input
//                   id="editBatchName"
//                   value={editingBatch.name}
//                   onChange={(e) => setEditingBatch({ ...editingBatch, name: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editBatchDescription">Description</Label>
//                 <Textarea
//                   id="editBatchDescription"
//                   value={editingBatch.description}
//                   onChange={(e) => setEditingBatch({ ...editingBatch, description: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editStartDate">Start Date</Label>
//                 <Input
//                   id="editStartDate"
//                   type="date"
//                   value={editingBatch.startDate}
//                   onChange={(e) => setEditingBatch({ ...editingBatch, startDate: e.target.value })}
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="editEndDate">End Date</Label>
//                 <Input
//                   id="editEndDate"
//                   type="date"
//                   value={editingBatch.endDate}
//                   onChange={(e) => setEditingBatch({ ...editingBatch, endDate: e.target.value })}
//                 />
//               </div>
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="editActive">Status</Label>
//                 <div className="flex items-center space-x-2">
//                   <Switch
//                     id="editActive"
//                     checked={editingBatch.active}
//                     onCheckedChange={(checked) => setEditingBatch({ ...editingBatch, active: checked })}
//                   />
//                   <Label htmlFor="editActive" className="text-sm">
//                     {editingBatch.active ? "Active" : "Inactive"}
//                   </Label>
//                 </div>
//               </div>
//               <div className="flex justify-end gap-2 pt-2">
//                 <Button variant="outline" onClick={() => setEditingBatch(null)}>
//                   Cancel
//                 </Button>
//                 <Button onClick={handleUpdateBatch} className="bg-blue-500 text-white hover:bg-blue-600">
//                   Update
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       {/* Delete Confirmation */}
//       <AlertDialog open={!!deleteBatch} onOpenChange={(open) => !open && setDeleteBatch(null)}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure you want to delete this batch?</AlertDialogTitle>
//             <AlertDialogDescription>
//               {deleteBatch ? `${deleteBatch.batchId} — ${deleteBatch.name}` : ""}
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

//       {/* Batch Statistics */}
//       <div className="grid gap-4 md:grid-cols-3">
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Total Batches</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{filteredBatches.length}</div>
//             <p className="text-xs text-muted-foreground">{searchTerm ? "Filtered batches" : "All batches"}</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Active Batches</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{batches.filter(b => b.active).length}</div>
//             <p className="text-xs text-muted-foreground">Currently running</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="pb-2">
//             <CardTitle className="text-base">Inactive Batches</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{batches.filter(b => !b.active).length}</div>
//             <p className="text-xs text-muted-foreground">Currently paused</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Add Trainees Dialog */}
//       <Dialog open={isAddTraineesDialogOpen} onOpenChange={setIsAddTraineesDialogOpen}>
//         <DialogContent className="sm:max-w-[600px]">
//           <DialogHeader>
//             <DialogTitle>Add Trainees to Batch</DialogTitle>
//             <DialogDescription>
//               {selectedBatch ? `Add trainees to ${selectedBatch.name} (${selectedBatch.batchId})` : ""}
//             </DialogDescription>
//           </DialogHeader>
//           {selectedBatch && (
//             <div className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="traineeSelect">Trainee</Label>
//                 <Popover open={isTraineeSelectOpen} onOpenChange={setIsTraineeSelectOpen}>
//                   <PopoverTrigger asChild>
//                     <Button id="traineeSelect" variant="outline" role="combobox" className="w-full justify-between">
//                       {selectedTrainee ? `${selectedTrainee.name} (${selectedTrainee.id})` : 'Select trainee'}
//                       <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
//                     <Command>
//                       <CommandInput placeholder="Search trainee..." />
//                       <CommandEmpty>No trainee found.</CommandEmpty>
//                       <CommandList>
//                         <CommandGroup>
//                           {traineeOptions.map((t) => (
//                             <CommandItem
//                               key={t.id}
//                               value={`${t.id}|${t.name}`}
//                               onSelect={(value) => {
//                                 const [id, name] = value.split('|')
//                                 setSelectedTrainee({ id, name })
//                                 setIsTraineeSelectOpen(false)
//                               }}
//                             >
//                               <Check className={`mr-2 h-4 w-4 ${selectedTrainee?.id === t.id ? 'opacity-100' : 'opacity-0'}`} />
//                               {t.name} ({t.id})
//                             </CommandItem>
//                           ))}
//                         </CommandGroup>
//                       </CommandList>
//                     </Command>
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               <div className="flex justify-end gap-2 pt-4">
//                 <Button 
//                   variant="outline" 
//                   onClick={() => {
//                     setIsAddTraineesDialogOpen(false)
//                     setSelectedBatch(null)
//                   }}
//                 >
//                   Cancel
//                 </Button>
//                 <Button 
//                   className="bg-purple-500 text-white hover:bg-purple-600"
//                   onClick={() => {
//                     if (!selectedTrainee) return
//                     console.log("Adding trainee to batch:", selectedBatch.batchId, selectedTrainee)
//                     setIsAddTraineesDialogOpen(false)
//                     setSelectedBatch(null)
//                     setSelectedTrainee(null)
//                   }}
//                 >
//                   Add Trainee
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Search, Plus, Eye, Edit, Trash2 } from "lucide-react"

import { fetchBatches, createBatch, updateBatch, deleteBatch as apiDeleteBatch } from "../app/services/api"

type Batch = {
  batch_id: string
  batch_name: string
  description: string
  start_date: string
  end_date: string
  status: "Active" | "Inactive"
}

export function Batches() {
  const [batches, setBatches] = useState<Batch[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingBatch, setEditingBatch] = useState<Batch | null>(null)
  const [deleteBatch, setDeleteBatch] = useState<Batch | null>(null)
  const [newBatch, setNewBatch] = useState<Omit<Batch, "batch_id">>({
    batch_name: "",
    description: "",
    start_date: "",
    end_date: "",
    status: "Active",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  useEffect(() => {
    loadBatches()
  }, [])

  const loadBatches = async () => {
    try {
      const data = await fetchBatches()
      setBatches(data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleAddBatch = async () => {
    if (!newBatch.batch_name || !newBatch.start_date || !newBatch.end_date) {
      alert("Please fill all fields")
      return
    }
    try {
      await createBatch(newBatch)
      setNewBatch({ batch_name: "", description: "", start_date: "", end_date: "", status: "Active" })
      setIsAddDialogOpen(false)
      loadBatches()
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdateBatch = async () => {
    if (!editingBatch) return
    try {
      await updateBatch(editingBatch.batch_id, editingBatch)
      setEditingBatch(null)
      loadBatches()
    } catch (err) {
      console.error(err)
    }
  }

  const handleDeleteBatch = async () => {
    if (!deleteBatch) return
    try {
      await apiDeleteBatch(deleteBatch.batch_id)
      setDeleteBatch(null)
      loadBatches()
    } catch (err) {
      console.error(err)
    }
  }

  const filteredBatches = batches.filter(
    (b) =>
      b.batch_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.batch_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalPages = Math.max(1, Math.ceil(filteredBatches.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const paginatedBatches = filteredBatches.slice(startIndex, startIndex + pageSize)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Batches</h2>
          <p className="text-muted-foreground">Manage your batches</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white"><Plus className="mr-2" />Add Batch</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Batch</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label>Batch Name</Label>
                <Input value={newBatch.batch_name} onChange={(e) => setNewBatch({ ...newBatch, batch_name: e.target.value })} />
              </div>
              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea value={newBatch.description} onChange={(e) => setNewBatch({ ...newBatch, description: e.target.value })} />
              </div>
              <div className="grid gap-2">
                <Label>Start Date</Label>
                <Input type="date" value={newBatch.start_date} onChange={(e) => setNewBatch({ ...newBatch, start_date: e.target.value })} />
              </div>
              <div className="grid gap-2">
                <Label>End Date</Label>
                <Input type="date" value={newBatch.end_date} onChange={(e) => setNewBatch({ ...newBatch, end_date: e.target.value })} />
              </div>
              <div className="grid gap-2">
                <Label>Status</Label>
                <select value={newBatch.status} onChange={(e) => setNewBatch({ ...newBatch, status: e.target.value as "Active" | "Inactive" })} className="border p-2 rounded">
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddBatch} className="bg-blue-500 text-white">Save</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative w-64 md:w-80">
        <Search className="absolute left-2 top-2 text-gray-400" />
        <Input className="pl-8" placeholder="Search..." value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }} />
      </div>

      {/* Table */}
      <Card>
        <CardHeader><CardTitle>All Batches</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Start</TableHead>
                <TableHead>End</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedBatches.map((b) => (
                <TableRow key={b.batch_id}>
                  <TableCell>{b.batch_id}</TableCell>
                  <TableCell>{b.batch_name}</TableCell>
                  <TableCell>{b.description}</TableCell>
                  <TableCell>{b.start_date}</TableCell>
                  <TableCell>{b.end_date}</TableCell>
                  <TableCell>{b.status}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" onClick={() => setEditingBatch(b)} className="bg-green-500 text-white"><Edit /></Button>
                    <Button size="sm" onClick={() => setDeleteBatch(b)} className="bg-red-500 text-white"><Trash2 /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Edit Dialog */}
      {editingBatch && (
        <Dialog open={!!editingBatch} onOpenChange={(open) => !open && setEditingBatch(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader><DialogTitle>Edit Batch</DialogTitle></DialogHeader>
            <div className="grid gap-4 py-2">
              <Label>Batch Name</Label>
              <Input value={editingBatch.batch_name} onChange={(e) => setEditingBatch({ ...editingBatch, batch_name: e.target.value })} />
              <Label>Description</Label>
              <Textarea value={editingBatch.description} onChange={(e) => setEditingBatch({ ...editingBatch, description: e.target.value })} />
              <Label>Start Date</Label>
              <Input type="date" value={editingBatch.start_date} onChange={(e) => setEditingBatch({ ...editingBatch, start_date: e.target.value })} />
              <Label>End Date</Label>
              <Input type="date" value={editingBatch.end_date} onChange={(e) => setEditingBatch({ ...editingBatch, end_date: e.target.value })} />
              <Label>Status</Label>
              <select value={editingBatch.status} onChange={(e) => setEditingBatch({ ...editingBatch, status: e.target.value as "Active" | "Inactive" })} className="border p-2 rounded">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setEditingBatch(null)}>Cancel</Button>
                <Button onClick={handleUpdateBatch} className="bg-blue-500 text-white">Update</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Delete Confirmation */}
      {deleteBatch && (
        <Dialog open={!!deleteBatch} onOpenChange={(open) => !open && setDeleteBatch(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader><DialogTitle>Delete Batch</DialogTitle></DialogHeader>
            <p>Are you sure you want to delete {deleteBatch.batch_name}?</p>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setDeleteBatch(null)}>Cancel</Button>
              <Button onClick={handleDeleteBatch} className="bg-red-500 text-white">Delete</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

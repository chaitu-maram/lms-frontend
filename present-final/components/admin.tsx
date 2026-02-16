"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search, User, Eye, Plus } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Switch } from "@/components/ui/switch"

interface AdminType {
  id: string
  name: string
  email: string
  contactNumber: string
  active: boolean
}

export function Admin() {
  const router = useRouter()

  const [admins, setAdmins] = useState<AdminType[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [viewAdmin, setViewAdmin] = useState<AdminType | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const pageSize = 5

  // ✅ Fetch Admins
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8011/api/auth/admins/")

        if (!res.ok) throw new Error("Failed API")

        const data = await res.json()

        const formatted = data.map((a: any) => ({
          id: a.id,
          name: `${a.first_name} ${a.last_name}`,
          email: a.email,
          contactNumber: a.contact_number,
          active: a.is_active,
        }))

        setAdmins(formatted)
      } catch (err) {
        console.error("Admin fetch error:", err)
        setAdmins([]) // prevent crash
      } finally {
        setLoading(false)
      }
    }

    fetchAdmins()
  }, [])

  // 🔎 Search
  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      admin.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.max(1, Math.ceil(filteredAdmins.length / pageSize))
  const startIndex = (currentPage - 1) * pageSize
  const paginatedAdmins = filteredAdmins.slice(startIndex, startIndex + pageSize)

  // ✅ Toggle Active Status
  const toggleStatus = async (admin: AdminType, checked: boolean) => {
    try {
      await fetch(`http://127.0.0.1:8011/api/auth/admins/${admin.id}/`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: checked }),
      })

      setAdmins((prev) =>
        prev.map((a) => (a.id === admin.id ? { ...a, active: checked } : a))
      )
    } catch (err) {
      console.error("Status update failed", err)
    }
  }

  if (loading) {
    return <div className="p-6">Loading admins...</div>
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admins</h1>
          <p className="text-muted-foreground">Manage institute administrators</p>
        </div>

        {/* ➕ Redirect to Signup Page */}
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => router.push("/signup/admin")}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Admin
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle>Search Admins</CardTitle>
          <div className="relative w-64 md:w-80">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, email, or ID..."
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
          {filteredAdmins.length === 0 ? (
            <div className="text-center py-10 text-muted-foreground">
              No admins found.
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">View</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {paginatedAdmins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell>{admin.id}</TableCell>

                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src="/placeholder_image.png" />
                              <AvatarFallback>
                                <User className="h-4 w-4" />
                              </AvatarFallback>
                            </Avatar>
                            {admin.name}
                          </div>
                        </TableCell>

                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.contactNumber}</TableCell>

                        <TableCell>
                          <Switch
                            checked={admin.active}
                            onCheckedChange={(checked) =>
                              toggleStatus(admin, checked)
                            }
                          />
                        </TableCell>

                        <TableCell className="text-right">
                          <Button size="sm" onClick={() => setViewAdmin(admin)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
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
                          setCurrentPage((p) =>
                            Math.min(totalPages, p + 1)
                          )
                        }}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* View Dialog */}
      <Dialog open={!!viewAdmin} onOpenChange={() => setViewAdmin(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Details</DialogTitle>
          </DialogHeader>

          {viewAdmin && (
            <div className="space-y-2">
              <p><strong>ID:</strong> {viewAdmin.id}</p>
              <p><strong>Name:</strong> {viewAdmin.name}</p>
              <p><strong>Email:</strong> {viewAdmin.email}</p>
              <p><strong>Contact:</strong> {viewAdmin.contactNumber}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

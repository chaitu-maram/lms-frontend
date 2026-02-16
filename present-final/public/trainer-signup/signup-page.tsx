"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, GraduationCap, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [logoFile, setLogoFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [showVerifyPassword, setShowVerifyPassword] = useState(false)

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLogoFile(file)
    }
  }

  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setCoverFile(file)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-2"
      style={{
        backgroundImage: "url('/images/background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-4">
          <div className="flex justify-center mb-2">
            <div className="bg-blue-600 p-2 rounded-full">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-blue-900">Admin Signup Form</h1>
        </div>

        <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <form className="space-y-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                {/* Add vertical divider line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 transform -translate-x-1/2"></div>

                {/* Left Column - Personal Information */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-1">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="firstName" className="text-sm text-blue-800">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="lastName" className="text-sm text-blue-800">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-sm text-blue-800">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="admin@yourinstitute.com"
                      required
                      className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-sm text-blue-800">
                        Password *
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Create password"
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="verifyPassword" className="text-sm text-blue-800">
                        Verify Password *
                      </Label>
                      <div className="relative">
                        <Input
                          id="verifyPassword"
                          name="verifyPassword"
                          type={showVerifyPassword ? "text" : "password"}
                          placeholder="Confirm password"
                          required
                          className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
                        >
                          {showVerifyPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="contactNumber" className="text-sm text-blue-800">
                      Contact Number *
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                        <span className="text-lg">🇮🇳</span>
                      </div>
                      <Input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        placeholder="+91"
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pl-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="phoneNumber" className="text-sm text-blue-800">
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                        <span className="text-lg">🇮🇳</span>
                      </div>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="+91"
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pl-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column - Institute Information */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-1">
                    Institute Information
                  </h3>
                  <div className="space-y-1">
                    <Label htmlFor="instituteName" className="text-sm text-blue-800">
                      Institute Name *
                    </Label>
                    <Input
                      id="instituteName"
                      name="instituteName"
                      placeholder="Institute name"
                      required
                      className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="logo" className="text-sm text-blue-800">
                        Institute Logo
                      </Label>
                      <div className="border-2 border-dashed border-blue-300 rounded-lg p-2 text-center hover:border-blue-400 transition-colors">
                        <input
                          id="logo"
                          name="logo"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                        <label htmlFor="logo" className="cursor-pointer">
                          <Upload className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                          <p className="text-xs text-blue-700 font-medium">
                            {logoFile ? logoFile.name : "Upload logo"}
                          </p>
                          <p className="text-xs text-blue-500">PNG, JPG</p>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="cover" className="text-sm text-blue-800">
                        Cover Picture
                      </Label>
                      <div className="border-2 border-dashed border-blue-300 rounded-lg p-2 text-center hover:border-blue-400 transition-colors">
                        <input
                          id="cover"
                          name="cover"
                          type="file"
                          accept="image/png,image/jpeg"
                          onChange={handleCoverUpload}
                          className="hidden"
                        />
                        <label htmlFor="cover" className="cursor-pointer">
                          <Upload className="h-5 w-5 text-blue-500 mx-auto mb-1" />
                          <p className="text-xs text-blue-700 font-medium">
                            {coverFile ? coverFile.name : "Upload cover"}
                          </p>
                          <p className="text-xs text-blue-500">PNG, JPG</p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="address" className="text-sm text-blue-800">
                      Institute Address *
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      placeholder="Complete institute address"
                      required
                      rows={2}
                      className="text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Submit - Full Width */}
              <div className="space-y-3 pt-2 border-t border-blue-200">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-blue-800">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white py-2 font-semibold">
                    Create Institute Account
                  </Button>
                  <p className="text-center text-sm text-blue-700">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold underline">
                      Sign in here
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

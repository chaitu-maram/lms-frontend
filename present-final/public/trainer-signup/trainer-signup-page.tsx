"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Eye, EyeOff, User } from "lucide-react"
import { useState } from "react"

export default function TrainerSignupPage() {
  const [profileFile, setProfileFile] = useState<File | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showVerifyPassword, setShowVerifyPassword] = useState(false)

  const handleProfileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfileFile(file)
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
              <User className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-blue-900">Trainer Signup Form</h1>
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
                      placeholder="trainer@email.com"
                      required
                      className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="password" className="text-sm text-blue-800">
                        Password *
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create password"
                          required
                          className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
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
                  <div className="grid grid-cols-2 gap-3">
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
                  <div className="space-y-1">
                    <Label htmlFor="adminCode" className="text-sm text-blue-800">
                      Admin Code *
                    </Label>
                    <Input
                      id="adminCode"
                      name="adminCode"
                      placeholder="Enter admin provided code"
                      required
                      className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Right Column - Professional Information */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-blue-900 border-b border-blue-200 pb-1">
                    Professional Information
                  </h3>
                  <div className="space-y-1">
                    <Label htmlFor="expertiseArea" className="text-sm text-blue-800">
                      Expertise Area *
                    </Label>
                    <Input
                      id="expertiseArea"
                      name="expertiseArea"
                      placeholder="e.g., Mathematics, Physics, Computer Science"
                      required
                      className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="qualifications" className="text-sm text-blue-800">
                      Qualifications *
                    </Label>
                    <Textarea
                      id="qualifications"
                      name="qualifications"
                      placeholder="List your educational qualifications and certifications"
                      required
                      rows={2}
                      className="text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="bio" className="text-sm text-blue-800">
                      Bio *
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Brief description about yourself and teaching experience"
                      required
                      rows={3}
                      className="text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="profileImage" className="text-sm text-blue-800">
                      Profile Image
                    </Label>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-3 text-center hover:border-blue-400 transition-colors">
                      <input
                        id="profileImage"
                        name="profileImage"
                        type="file"
                        accept="image/png,image/jpeg"
                        onChange={handleProfileUpload}
                        className="hidden"
                      />
                      <label htmlFor="profileImage" className="cursor-pointer">
                        <Upload className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                        <p className="text-sm text-blue-700 font-medium">
                          {profileFile ? profileFile.name : "Upload profile picture"}
                        </p>
                        <p className="text-xs text-blue-500">PNG, JPG (Max 5MB)</p>
                      </label>
                    </div>
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
                    Create Trainer Account
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

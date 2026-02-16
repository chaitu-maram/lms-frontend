"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Eye, EyeOff, User, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Page() {
  const [profileFile, setProfileFile] = useState<File | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showVerifyPassword, setShowVerifyPassword] = useState(false)
  const [expertiseValue, setExpertiseValue] = useState("")
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([])
  const [qualificationsValue, setQualificationsValue] = useState("")
  const [selectedQualifications, setSelectedQualifications] = useState<string[]>([])
  const [expertiseOpen, setExpertiseOpen] = useState(false)
  const [qualificationsOpen, setQualificationsOpen] = useState(false)
  const [expertiseFocusedIndex, setExpertiseFocusedIndex] = useState(-1)
  const [qualificationsFocusedIndex, setQualificationsFocusedIndex] = useState(-1)
  const [filteredExpertiseOptions, setFilteredExpertiseOptions] = useState<{ value: string; label: string }[]>([])
  const [filteredQualificationsOptions, setFilteredQualificationsOptions] = useState<
    { value: string; label: string }[]
  >([])

  const expertiseRef = useRef<HTMLDivElement>(null)
  const qualificationsRef = useRef<HTMLDivElement>(null)

  const expertiseOptions = [
    { value: "mathematics", label: "Mathematics" },
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "computer-science", label: "Computer Science" },
    { value: "english", label: "English" },
    { value: "history", label: "History" },
    { value: "geography", label: "Geography" },
    { value: "economics", label: "Economics" },
    { value: "business-studies", label: "Business Studies" },
    { value: "psychology", label: "Psychology" },
    { value: "sociology", label: "Sociology" },
    { value: "art-design", label: "Art & Design" },
    { value: "music", label: "Music" },
    { value: "physical-education", label: "Physical Education" },
    { value: "data-science", label: "Data Science" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "artificial-intelligence", label: "Artificial Intelligence" },
    { value: "web-development", label: "Web Development" },
    { value: "mobile-development", label: "Mobile Development" },
  ]

  const qualificationsOptions = [
    { value: "phd", label: "PhD" },
    { value: "masters", label: "Master's Degree" },
    { value: "bachelors", label: "Bachelor's Degree" },
    { value: "diploma", label: "Diploma" },
    { value: "certificate", label: "Professional Certificate" },
    { value: "high-school", label: "High School" },
    { value: "associate", label: "Associate Degree" },
    { value: "postgraduate", label: "Postgraduate Diploma" },
    { value: "doctorate", label: "Doctorate" },
    { value: "mba", label: "MBA" },
    { value: "mca", label: "MCA" },
    { value: "btech", label: "B.Tech" },
    { value: "mtech", label: "M.Tech" },
  ]

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        expertiseRef.current &&
        !expertiseRef.current.contains(event.target as Node) &&
        qualificationsRef.current &&
        !qualificationsRef.current.contains(event.target as Node)
      ) {
        setExpertiseOpen(false)
        setQualificationsOpen(false)
        setExpertiseFocusedIndex(-1)
        setQualificationsFocusedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (expertiseValue.length > 0) {
      const filtered = expertiseOptions.filter((option) =>
        option.label.toLowerCase().includes(expertiseValue.toLowerCase()),
      )
      setFilteredExpertiseOptions(filtered)
    } else {
      setFilteredExpertiseOptions(expertiseOptions)
    }
    setExpertiseFocusedIndex(-1) // Reset focus when options change
  }, [expertiseValue])

  useEffect(() => {
    if (qualificationsValue.length > 0) {
      const filtered = qualificationsOptions.filter((option) =>
        option.label.toLowerCase().includes(qualificationsValue.toLowerCase()),
      )
      setFilteredQualificationsOptions(filtered)
    } else {
      setFilteredQualificationsOptions(qualificationsOptions)
    }
    setQualificationsFocusedIndex(-1) // Reset focus when options change
  }, [qualificationsValue])

  // Auto-scroll focused item into view for expertise dropdown
  useEffect(() => {
    if (expertiseOpen && expertiseFocusedIndex >= 0) {
      const dropdownElement = expertiseRef.current?.querySelector("[data-dropdown]")
      const focusedElement = dropdownElement?.children[expertiseFocusedIndex] as HTMLElement
      if (focusedElement && dropdownElement) {
        focusedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      }
    }
  }, [expertiseOpen, expertiseFocusedIndex])

  // Auto-scroll focused item into view for qualifications dropdown
  useEffect(() => {
    if (qualificationsOpen && qualificationsFocusedIndex >= 0) {
      const dropdownElement = qualificationsRef.current?.querySelector("[data-dropdown]")
      const focusedElement = dropdownElement?.children[qualificationsFocusedIndex] as HTMLElement
      if (focusedElement && dropdownElement) {
        focusedElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      }
    }
  }, [qualificationsOpen, qualificationsFocusedIndex])

  const handleProfileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setProfileFile(file)
    }
  }

  const handleExpertiseSelect = (value: string) => {
    const selectedOption = expertiseOptions.find((opt) => opt.value === value)
    if (selectedOption && !selectedExpertise.includes(selectedOption.label)) {
      const newExpertise = [...selectedExpertise, selectedOption.label]
      setSelectedExpertise(newExpertise)
      setExpertiseValue("")
    }
    setExpertiseOpen(false)
    setExpertiseFocusedIndex(-1)
  }

  const handleQualificationsSelect = (value: string) => {
    const selectedOption = qualificationsOptions.find((opt) => opt.value === value)
    if (selectedOption && !selectedQualifications.includes(selectedOption.label)) {
      const newQualifications = [...selectedQualifications, selectedOption.label]
      setSelectedQualifications(newQualifications)
      setQualificationsValue("")
    }
    setQualificationsOpen(false)
    setQualificationsFocusedIndex(-1)
  }

  const handleExpertiseInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setExpertiseValue(value)

    // Close qualifications dropdown when expertise is opened
    setQualificationsOpen(false)
    setQualificationsFocusedIndex(-1)

    // Show dropdown when typing
    if (value.length > 0) {
      setExpertiseOpen(true)
    }
  }

  const handleQualificationsInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQualificationsValue(value)

    // Close expertise dropdown when qualifications is opened
    setExpertiseOpen(false)
    setExpertiseFocusedIndex(-1)

    // Show dropdown when typing
    if (value.length > 0) {
      setQualificationsOpen(true)
    }
  }

  const handleExpertiseKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      if (expertiseFocusedIndex >= 0 && expertiseFocusedIndex < filteredExpertiseOptions.length) {
        // Select the focused option
        handleExpertiseSelect(filteredExpertiseOptions[expertiseFocusedIndex].value)
      } else {
        // Add custom value
        const value = expertiseValue.trim()
        if (value && !selectedExpertise.includes(value)) {
          const newExpertise = [...selectedExpertise, value]
          setSelectedExpertise(newExpertise)
          setExpertiseValue("")
          setExpertiseOpen(false)
        }
      }
    } else if (e.key === "Escape") {
      e.preventDefault()
      setExpertiseOpen(false)
      setExpertiseFocusedIndex(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (!expertiseOpen) {
        setExpertiseOpen(true)
      }
      setExpertiseFocusedIndex((prev) => (prev < filteredExpertiseOptions.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (!expertiseOpen) {
        setExpertiseOpen(true)
      }
      setExpertiseFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredExpertiseOptions.length - 1))
    }
  }

  const handleQualificationsKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      if (qualificationsFocusedIndex >= 0 && qualificationsFocusedIndex < filteredQualificationsOptions.length) {
        // Select the focused option
        handleQualificationsSelect(filteredQualificationsOptions[qualificationsFocusedIndex].value)
      } else {
        // Add custom value
        const value = qualificationsValue.trim()
        if (value && !selectedQualifications.includes(value)) {
          const newQualifications = [...selectedQualifications, value]
          setSelectedQualifications(newQualifications)
          setQualificationsValue("")
          setQualificationsOpen(false)
        }
      }
    } else if (e.key === "Escape") {
      e.preventDefault()
      setQualificationsOpen(false)
      setQualificationsFocusedIndex(-1)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (!qualificationsOpen) {
        setQualificationsOpen(true)
      }
      setQualificationsFocusedIndex((prev) => (prev < filteredQualificationsOptions.length - 1 ? prev + 1 : 0))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      if (!qualificationsOpen) {
        setQualificationsOpen(true)
      }
      setQualificationsFocusedIndex((prev) => (prev > 0 ? prev - 1 : filteredQualificationsOptions.length - 1))
    }
  }

  const removeExpertise = (expertiseToRemove: string) => {
    const updatedExpertise = selectedExpertise.filter((item) => item !== expertiseToRemove)
    setSelectedExpertise(updatedExpertise)
  }

  const removeQualification = (qualificationToRemove: string) => {
    const updatedQualifications = selectedQualifications.filter((item) => item !== qualificationToRemove)
    setSelectedQualifications(updatedQualifications)
  }

  const clearExpertise = () => {
    setExpertiseValue("")
    setSelectedExpertise([])
  }

  const clearQualifications = () => {
    setQualificationsValue("")
    setSelectedQualifications([])
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-2"
      style={{
        backgroundImage: "url('/images/marble-background.png')",
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
                    <div className="relative" ref={expertiseRef}>
                      <Input
                        id="expertiseArea"
                        name="expertiseArea"
                        value={expertiseValue}
                        onChange={handleExpertiseInputChange}
                        onKeyDown={handleExpertiseKeyDown}
                        onClick={() => {
                          setExpertiseOpen(true)
                          setQualificationsOpen(false)
                          setQualificationsFocusedIndex(-1)
                        }}
                        onFocus={() => {
                          setExpertiseOpen(true)
                          setQualificationsOpen(false)
                          setQualificationsFocusedIndex(-1)
                        }}
                        placeholder="Type expertise area and press Enter, or select from suggestions..."
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-16"
                      />
                      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex gap-1">
                        {selectedExpertise.length > 0 && (
                          <button
                            type="button"
                            onClick={clearExpertise}
                            className="text-blue-500 hover:text-blue-700 p-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 w-8 p-0 text-blue-500 hover:text-blue-700"
                          onClick={() => setExpertiseOpen(!expertiseOpen)}
                        >
                          <ChevronsUpDown className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Dropdown suggestions */}
                      {expertiseOpen && filteredExpertiseOptions.length > 0 && (
                        <div
                          className="absolute z-50 w-full mt-1 bg-white border border-blue-200 rounded-md shadow-lg max-h-60 overflow-auto"
                          data-dropdown
                        >
                          {filteredExpertiseOptions.map((option, index) => (
                            <div
                              key={option.value}
                              className={cn(
                                "px-3 py-2 cursor-pointer text-sm flex items-center",
                                index === expertiseFocusedIndex ? "bg-blue-100 text-blue-900" : "hover:bg-blue-50",
                              )}
                              onClick={() => handleExpertiseSelect(option.value)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedExpertise.includes(option.label) ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Use arrow keys to navigate, Enter to select, or type custom expertise
                    </p>
                    {selectedExpertise.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedExpertise.map((expertise, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
                          >
                            {expertise}
                            <button
                              type="button"
                              onClick={() => removeExpertise(expertise)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="qualifications" className="text-sm text-blue-800">
                      Qualifications *
                    </Label>
                    <div className="relative" ref={qualificationsRef}>
                      <Input
                        id="qualifications"
                        name="qualifications"
                        value={qualificationsValue}
                        onChange={handleQualificationsInputChange}
                        onKeyDown={handleQualificationsKeyDown}
                        onClick={() => {
                          setQualificationsOpen(true)
                          setExpertiseOpen(false)
                          setExpertiseFocusedIndex(-1)
                        }}
                        onFocus={() => {
                          setQualificationsOpen(true)
                          setExpertiseOpen(false)
                          setExpertiseFocusedIndex(-1)
                        }}
                        placeholder="Type qualification and press Enter, or select from suggestions..."
                        required
                        className="h-9 text-sm border-blue-200 focus:border-blue-500 focus:ring-blue-500 pr-16"
                      />
                      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex gap-1">
                        {selectedQualifications.length > 0 && (
                          <button
                            type="button"
                            onClick={clearQualifications}
                            className="text-blue-500 hover:text-blue-700 p-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-7 w-8 p-0 text-blue-500 hover:text-blue-700"
                          onClick={() => setQualificationsOpen(!qualificationsOpen)}
                        >
                          <ChevronsUpDown className="h-3 w-3" />
                        </Button>
                      </div>

                      {/* Dropdown suggestions */}
                      {qualificationsOpen && filteredQualificationsOptions.length > 0 && (
                        <div
                          className="absolute z-50 w-full mt-1 bg-white border border-blue-200 rounded-md shadow-lg max-h-60 overflow-auto"
                          data-dropdown
                        >
                          {filteredQualificationsOptions.map((option, index) => (
                            <div
                              key={option.value}
                              className={cn(
                                "px-3 py-2 cursor-pointer text-sm flex items-center",
                                index === qualificationsFocusedIndex ? "bg-blue-100 text-blue-900" : "hover:bg-blue-50",
                              )}
                              onClick={() => handleQualificationsSelect(option.value)}
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  selectedQualifications.includes(option.label) ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {option.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-blue-600 mt-1">
                      Use arrow keys to navigate, Enter to select, or type custom qualification
                    </p>
                    {selectedQualifications.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {selectedQualifications.map((qualification, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-md"
                          >
                            {qualification}
                            <button
                              type="button"
                              onClick={() => removeQualification(qualification)}
                              className="text-green-600 hover:text-green-800"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
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

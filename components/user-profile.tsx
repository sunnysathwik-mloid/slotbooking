"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UserProfile() {
  const [username, setUsername] = useState("johndoe")
  const [timezone, setTimezone] = useState("UTC")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically update the user profile
    console.log("Profile updated:", { username, timezone })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <Label htmlFor="timezone">Timezone</Label>
        <Select value={timezone} onValueChange={setTimezone}>
          <SelectTrigger>
            <SelectValue placeholder="Select timezone" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="UTC">UTC</SelectItem>
            <SelectItem value="America/New_York">America/New_York</SelectItem>
            <SelectItem value="Europe/London">Europe/London</SelectItem>
            <SelectItem value="Asia/Tokyo">Asia/Tokyo</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Update Profile</Button>
    </form>
  )
}


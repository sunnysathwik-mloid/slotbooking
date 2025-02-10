"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Slot = {
  time: string
  available: boolean
}

type UserSlots = {
  [username: string]: Slot[]
}

export function SlotViewer() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [username, setUsername] = useState("")
  const [searchedUsername, setSearchedUsername] = useState("")

  // Simulated user data
  const dummyUserSlots: UserSlots = {
    johndoe: [
      { time: "9:00 AM - 10:00 AM", available: true },
      { time: "10:00 AM - 11:00 AM", available: false },
      { time: "11:00 AM - 12:00 PM", available: true },
      { time: "1:00 PM - 2:00 PM", available: true },
    ],
    janedoe: [
      { time: "10:00 AM - 11:00 AM", available: true },
      { time: "11:00 AM - 12:00 PM", available: false },
      { time: "2:00 PM - 3:00 PM", available: true },
      { time: "3:00 PM - 4:00 PM", available: true },
    ],
  }

  const handleSearch = () => {
    setSearchedUsername(username)
  }

  const slots = dummyUserSlots[searchedUsername] || []

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <div className="flex gap-2">
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          {searchedUsername
            ? `Available Slots for ${searchedUsername} on ${date?.toDateString()}`
            : "Enter a username to view available slots"}
        </h2>
        {searchedUsername && slots.length === 0 && <p>No slots found for this user.</p>}
        <ul className="space-y-2">
          {slots.map((slot, index) => (
            <li
              key={index}
              className={`p-2 rounded ${slot.available ? "bg-secondary" : "bg-muted text-muted-foreground"}`}
            >
              {slot.time}
              {slot.available && (
                <Button size="sm" className="ml-2">
                  Book
                </Button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


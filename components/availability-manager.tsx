"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Slot = {
  day: string
  startTime: string
  endTime: string
}

export function AvailabilityManager() {
  const [slots, setSlots] = useState<Slot[]>([])
  const [day, setDay] = useState("Monday")
  const [startTime, setStartTime] = useState("09:00")
  const [endTime, setEndTime] = useState("17:00")

  const addSlot = () => {
    setSlots([...slots, { day, startTime, endTime }])
  }

  const removeSlot = (index: number) => {
    setSlots(slots.filter((_, i) => i !== index))
  }

  const copyDayAvailability = (sourceDay: string) => {
    const daySlots = slots.filter((slot) => slot.day === sourceDay)
    const otherDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].filter(
      (d) => d !== sourceDay,
    )
    const newSlots = [...slots, ...otherDays.flatMap((d) => daySlots.map((slot) => ({ ...slot, day: d })))]
    setSlots(newSlots)
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="day">Day</Label>
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger>
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="startTime">Start Time</Label>
          <Input id="startTime" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div>
          <Label htmlFor="endTime">End Time</Label>
          <Input id="endTime" type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <div className="flex items-end">
          <Button onClick={addSlot}>Add Slot</Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Current Availability</h3>
        <ul className="space-y-2">
          {slots.map((slot, index) => (
            <li key={index} className="flex justify-between items-center bg-secondary p-2 rounded">
              <span>
                {slot.day}: {slot.startTime} - {slot.endTime}
              </span>
              <Button variant="destructive" size="sm" onClick={() => removeSlot(index)}>
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Copy Availability</h3>
        <div className="flex gap-2">
          <Select onValueChange={copyDayAvailability}>
            <SelectTrigger>
              <SelectValue placeholder="Select day to copy" />
            </SelectTrigger>
            <SelectContent>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => copyDayAvailability(day)}>Copy to All Days</Button>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function Dashboard() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Available Slots</h2>
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Slots for {date?.toDateString()}</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-secondary rounded">9:00 AM - 10:00 AM</li>
          <li className="p-2 bg-secondary rounded">11:00 AM - 12:00 PM</li>
          <li className="p-2 bg-secondary rounded">2:00 PM - 3:00 PM</li>
          <li className="p-2 bg-secondary rounded">4:00 PM - 5:00 PM</li>
        </ul>
      </div>
    </div>
  )
}


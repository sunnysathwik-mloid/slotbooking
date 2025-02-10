"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:underline">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/availability" className="hover:underline">
                Manage Availability
              </Link>
            </li>
            <li>
              <Link href="/view-slots" className="hover:underline">
                View Slots
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-primary text-primary-foreground"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}


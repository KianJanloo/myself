import { useEffect, useCallback, useState } from "react"
import { useTheme } from "@/context/ThemeContext"

const SECTIONS = ["summary", "experiences", "projects", "contact"] as const

export function useToast() {
  const [toast, setToast] = useState<string | null>(null)

  const showToast = useCallback((message: string) => {
    setToast(message)
    setTimeout(() => setToast(null), 2000)
  }, [])

  return { toast, showToast }
}

export default function useKeyboardShortcuts() {
  const { toggleTheme } = useTheme()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable

      // Ctrl+K / Cmd+K — command palette (handled by CommandPalette component)
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent("toggle-command-palette"))
        return
      }

      // Don't trigger shortcuts when typing in inputs
      if (isInput) return

      switch (e.key) {
        case "j": {
          e.preventDefault()
          const currentScroll = window.scrollY
          for (const id of SECTIONS) {
            const el = document.getElementById(id)
            if (el && el.offsetTop > currentScroll + 50) {
              el.scrollIntoView({ behavior: "smooth", block: "start" })
              break
            }
          }
          break
        }
        case "k": {
          e.preventDefault()
          const currentScroll = window.scrollY
          for (const id of [...SECTIONS].reverse()) {
            const el = document.getElementById(id)
            if (el && el.offsetTop < currentScroll - 50) {
              el.scrollIntoView({ behavior: "smooth", block: "start" })
              break
            }
          }
          break
        }
        case "t": {
          e.preventDefault()
          toggleTheme()
          break
        }
        case "d": {
          e.preventDefault()
          const link = document.createElement("a")
          link.href = "/Resume.pdf"
          link.download = "Kian_Janloo_Resume.pdf"
          link.click()
          break
        }
        case "/": {
          e.preventDefault()
          window.dispatchEvent(new CustomEvent("toggle-command-palette"))
          break
        }
        case "1":
        case "2":
        case "3":
        case "4": {
          e.preventDefault()
          const idx = parseInt(e.key) - 1
          if (SECTIONS[idx]) {
            const el = document.getElementById(SECTIONS[idx])
            el?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          break
        }
      }
    },
    [toggleTheme]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])
}

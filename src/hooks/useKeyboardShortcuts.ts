import { useEffect, useCallback } from "react"
import { useTheme } from "@/context/ThemeContext"
import { siteConfig } from "@/config/siteConfig"

const SECTIONS = siteConfig.navItems.map((item) => item.id)

export default function useKeyboardShortcuts() {
  const { toggleTheme } = useTheme()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable

      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        window.dispatchEvent(new CustomEvent("toggle-command-palette"))
        return
      }

      if (isInput) return

      switch (e.key) {
        case "?":
          e.preventDefault()
          window.dispatchEvent(new CustomEvent("toggle-keyboard-help"))
          break
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
        case "t":
          e.preventDefault()
          toggleTheme()
          break
        case "d":
          e.preventDefault()
          {
            const link = document.createElement("a")
            link.href = siteConfig.resumePath
            link.download = siteConfig.resumeFilename
            link.click()
          }
          break
        case "/":
          e.preventDefault()
          window.dispatchEvent(new CustomEvent("toggle-command-palette"))
          break
        case "1":
        case "2":
        case "3":
        case "4":
        case "5": {
          e.preventDefault()
          const idx = parseInt(e.key) - 1
          if (SECTIONS[idx]) {
            document.getElementById(SECTIONS[idx])?.scrollIntoView({ behavior: "smooth", block: "start" })
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

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"
import { FaSearch, FaArrowUp, FaFileDownload, FaPalette, FaUser, FaBriefcase, FaFolderOpen, FaEnvelope, FaCode } from "react-icons/fa"

interface CommandItem {
  id: string
  label: string
  icon: React.ReactNode
  category: string
  action: () => void
}

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const { toggleTheme, theme } = useTheme()

  const commands: CommandItem[] = useMemo(
    () => [
      // Sections
      { id: "about", label: "About", icon: <FaUser />, category: "Sections", action: () => document.getElementById("summary")?.scrollIntoView({ behavior: "smooth" }) },
      { id: "experience", label: "Experience", icon: <FaBriefcase />, category: "Sections", action: () => document.getElementById("experiences")?.scrollIntoView({ behavior: "smooth" }) },
      { id: "projects", label: "Projects", icon: <FaFolderOpen />, category: "Sections", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
      { id: "contact", label: "Contact", icon: <FaEnvelope />, category: "Sections", action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
      { id: "skills", label: "Skills", icon: <FaCode />, category: "Sections", action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }) },
      // Actions
      { id: "top", label: "Back to Top", icon: <FaArrowUp />, category: "Actions", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { id: "resume", label: "Download PDF", icon: <FaFileDownload />, category: "Actions", action: () => { const a = document.createElement("a"); a.href = "/Resume.pdf"; a.download = "Kian_Janloo_Resume.pdf"; a.click() } },
      { id: "theme", label: `Actions: ${theme === "dark" ? "Light" : "Dark"} Mode`, icon: <FaPalette />, category: "Actions", action: toggleTheme },
    ],
    [theme, toggleTheme]
  )

  const filtered = useMemo(() => {
    if (!query) return commands
    const q = query.toLowerCase()
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q)
    )
  }, [commands, query])

  const toggle = useCallback(() => setIsOpen((p) => !p), [])

  useEffect(() => {
    const handler = () => toggle()
    window.addEventListener("toggle-command-palette", handler)
    return () => window.removeEventListener("toggle-command-palette", handler)
  }, [toggle])

  useEffect(() => {
    if (isOpen) {
      setQuery("")
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (!listRef.current) return
    const item = listRef.current.children[selectedIndex] as HTMLElement
    item?.scrollIntoView({ block: "nearest" })
  }, [selectedIndex])

  const execute = useCallback(
    (cmd: CommandItem) => {
      cmd.action()
      setIsOpen(false)
    },
    []
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault()
          setSelectedIndex((i) => (i + 1) % filtered.length)
          break
        case "ArrowUp":
          e.preventDefault()
          setSelectedIndex((i) => (i - 1 + filtered.length) % filtered.length)
          break
        case "Enter":
          e.preventDefault()
          if (filtered[selectedIndex]) execute(filtered[selectedIndex])
          break
        case "Escape":
          e.preventDefault()
          setIsOpen(false)
          break
      }
    },
    [filtered, selectedIndex, execute]
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[10%] sm:top-[15%] left-1/2 -translate-x-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg"
          >
            <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
                <FaSearch className="w-4 h-4 text-text-muted" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search sections, projects, skills..."
                  className="flex-1 bg-transparent text-text-primary placeholder-text-muted/60 outline-none text-sm"
                />
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] text-text-muted bg-white/5 rounded border border-white/10">
                  ESC
                </kbd>
              </div>

              <div ref={listRef} className="max-h-64 overflow-y-auto py-2">
                {filtered.length === 0 ? (
                  <div className="px-4 py-8 text-center text-text-muted text-sm">
                    No results found
                  </div>
                ) : (
                  filtered.map((cmd, idx) => (
                    <button
                      key={cmd.id}
                      onClick={() => execute(cmd)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                        idx === selectedIndex
                          ? "bg-accent/10 text-accent"
                          : "text-text-primary hover:bg-white/5"
                      }`}
                    >
                      <span className="w-5 h-5 flex items-center justify-center text-xs opacity-70">
                        {cmd.icon}
                      </span>
                      <span className="flex-1">{cmd.label}</span>
                      <span className="text-[10px] text-text-muted uppercase tracking-wider">
                        {cmd.category}
                      </span>
                    </button>
                  ))
                )}
              </div>

              <div className="px-4 py-2 border-t border-white/10 flex items-center gap-4 text-[10px] text-text-muted">
                <span><kbd className="px-1 py-0.5 bg-white/5 rounded">↑↓</kbd> navigate</span>
                <span><kbd className="px-1 py-0.5 bg-white/5 rounded">↵</kbd> select</span>
                <span><kbd className="px-1 py-0.5 bg-white/5 rounded">esc</kbd> close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette

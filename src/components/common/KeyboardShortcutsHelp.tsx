import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaTimes, FaKeyboard } from "react-icons/fa"

const SHORTCUTS = [
  { keys: ["Ctrl", "K"], description: "Open command palette" },
  { keys: ["/"], description: "Open command palette" },
  { keys: ["j"], description: "Scroll to next section" },
  { keys: ["k"], description: "Scroll to previous section" },
  { keys: ["1", "–", "5"], description: "Jump to section (About → Contact)" },
  { keys: ["t"], description: "Toggle theme" },
  { keys: ["d"], description: "Download resume" },
  { keys: ["?"], description: "Show this help" },
]

const KeyboardShortcutsHelp = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = useCallback(() => setIsOpen((p) => !p), [])
  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const handler = () => toggle()
    window.addEventListener("toggle-keyboard-help", handler)
    return () => window.removeEventListener("toggle-keyboard-help", handler)
  }, [toggle])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, close])

  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-6 left-6 z-40 p-2.5 rounded-full glass border border-white/10 text-text-muted hover:text-accent transition-colors hidden sm:flex items-center gap-2 text-xs"
        aria-label="Keyboard shortcuts"
        title="Keyboard shortcuts (?)"
      >
        <FaKeyboard className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-[15%] left-1/2 -translate-x-1/2 z-[101] w-[calc(100%-2rem)] max-w-md"
            >
              <div className="glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <h2 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <FaKeyboard className="text-accent" />
                    Keyboard Shortcuts
                  </h2>
                  <button onClick={close} className="text-text-muted hover:text-accent p-1" aria-label="Close">
                    <FaTimes />
                  </button>
                </div>
                <ul className="py-2 max-h-80 overflow-y-auto">
                  {SHORTCUTS.map((item) => (
                    <li
                      key={item.description}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 px-5 py-3 text-sm"
                    >
                      <span className="text-text-muted">{item.description}</span>
                      <span className="flex flex-wrap items-center gap-1 sm:justify-end">
                        {item.keys.map((key) => (
                          <kbd
                            key={key}
                            className="px-2 py-0.5 text-[10px] text-text-primary bg-white/5 rounded border border-white/10 font-mono"
                          >
                            {key}
                          </kbd>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default KeyboardShortcutsHelp

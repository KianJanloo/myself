import { useEffect, useRef } from "react"

const ScrollProgress = () => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let rafId = 0

    const updateProgress = () => {
      rafId = 0
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      bar.style.width = `${progress}%`
    }

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-accent to-accent-secondary"
        style={{ width: "0%", willChange: "width" }}
      />
    </div>
  )
}

export default ScrollProgress

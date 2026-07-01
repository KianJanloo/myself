import { useEffect, useRef } from "react"

interface ParallaxLayerProps {
  depth?: number
  className?: string
  children?: React.ReactNode
}

const ParallaxLayer = ({ depth = 0.02, className = "", children }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const moveX = (e.clientX - centerX) * depth
      const moveY = (e.clientY - centerY) * depth
      el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [depth])

  return (
    <div
      ref={ref}
      className={`absolute inset-0 pointer-events-none transition-transform duration-100 ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  )
}

export default ParallaxLayer

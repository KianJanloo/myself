import { useMemo } from "react"
import Particles, { useParticlesProvider } from "@tsparticles/react"
import type { ISourceOptions } from "@tsparticles/engine"
import { useIsScrolling } from "@/hooks/useIsScrolling"

const OptimizedParticles = () => {
  const { loaded } = useParticlesProvider()
  const isScrolling = useIsScrolling(250)
  const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 18 : 32

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 30,
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      particles: {
        number: { value: particleCount },
        color: { value: ["#d4a853", "#c9944a", "#e8c56d"] },
        links: { enable: true, distance: 110, opacity: 0.12, width: 0.8 },
        move: { enable: true, speed: 0.35, direction: "none", outModes: { default: "out" } },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 0.8, max: 2.2 } },
      },
      interactivity: {
        detectsOn: "window",
        events: { onHover: { enable: true, mode: "grab" }, resize: { enable: true } },
        modes: { grab: { distance: 120, links: { opacity: 0.2 } } },
      },
    }),
    [particleCount]
  )

  if (!loaded) return null

  return (
    <Particles
      id="portfolio-particles"
      className="fixed inset-0 pointer-events-none -z-10"
      options={options}
      style={{ opacity: isScrolling ? 0.35 : 0.55, transition: "opacity 0.3s ease" }}
    />
  )
}

export default OptimizedParticles

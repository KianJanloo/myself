import { lazy, Suspense } from "react"
import { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import AuroraBackground from "./AuroraBackground"

const OptimizedParticles = lazy(() => import("./OptimizedParticles"))

const BackgroundEffects = () => (
  <ParticlesProvider init={async (engine) => loadSlim(engine)}>
    <AuroraBackground />
    <Suspense fallback={null}>
      <OptimizedParticles />
    </Suspense>
  </ParticlesProvider>
)

export default BackgroundEffects

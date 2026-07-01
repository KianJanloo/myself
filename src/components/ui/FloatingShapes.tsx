import { motion } from "framer-motion"

interface Shape {
  id: number
  clipPath: string
  size: number
  x: string
  y: string
  delay: number
  duration: number
  z: number
  opacity: number
}

const shapes: Shape[] = [
  { id: 1, clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)", size: 90, x: "8%", y: "18%", delay: 0, duration: 8, z: -40, opacity: 0.08 },
  { id: 2, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", size: 60, x: "88%", y: "12%", delay: 1, duration: 10, z: -20, opacity: 0.12 },
  { id: 3, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", size: 75, x: "78%", y: "65%", delay: 2, duration: 9, z: -30, opacity: 0.1 },
  { id: 4, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", size: 55, x: "3%", y: "70%", delay: 0.5, duration: 11, z: -10, opacity: 0.14 },
  { id: 5, clipPath: "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)", size: 50, x: "45%", y: "8%", delay: 1.5, duration: 12, z: -50, opacity: 0.06 },
  { id: 6, clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)", size: 40, x: "92%", y: "42%", delay: 3, duration: 7, z: -15, opacity: 0.15 },
  { id: 7, clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)", size: 35, x: "20%", y: "85%", delay: 2.5, duration: 9, z: -35, opacity: 0.07 },
  { id: 8, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)", size: 45, x: "60%", y: "80%", delay: 1.8, duration: 10, z: -25, opacity: 0.09 },
]

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="floating-shape"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            clipPath: shape.clipPath,
            background: `linear-gradient(135deg, var(--accent), var(--accent-secondary))`,
            transform: `translateZ(${shape.z}px)`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: shape.opacity, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: shape.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes

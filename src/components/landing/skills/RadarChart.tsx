import { useMemo } from "react"
import { motion } from "framer-motion"

interface RadarChartProps {
  categories: { name: string; value: number }[]
}

const RadarChart = ({ categories }: RadarChartProps) => {
  const size = 300
  const center = size / 2
  const maxRadius = 120
  const levels = 5
  const n = categories.length

  const points = useMemo(() => {
    return categories.map((cat, i) => {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2
      const r = (cat.value / 100) * maxRadius
      return {
        x: center + r * Math.cos(angle),
        y: center + r * Math.sin(angle),
        labelX: center + (maxRadius + 20) * Math.cos(angle),
        labelY: center + (maxRadius + 20) * Math.sin(angle),
        name: cat.name,
        value: cat.value,
      }
    })
  }, [categories, n])

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ")

  const gridLines = useMemo(() => {
    const lines = []
    for (let level = 1; level <= levels; level++) {
      const r = (maxRadius / levels) * level
      const pts = Array.from({ length: n }, (_, i) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2
        return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`
      }).join(" ")
      lines.push(pts)
    }
    return lines
  }, [n, center, levels])

  const axisLines = useMemo(() => {
    return Array.from({ length: n }, (_, i) => {
      const angle = (Math.PI * 2 * i) / n - Math.PI / 2
      return {
        x2: center + maxRadius * Math.cos(angle),
        y2: center + maxRadius * Math.sin(angle),
      }
    })
  }, [n, center, maxRadius])

  return (
    <div className="flex justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid */}
        {gridLines.map((pts, i) => (
          <polygon
            key={i}
            points={pts}
            fill="none"
            stroke="var(--accent)"
            strokeOpacity={0.1}
            strokeWidth={1}
          />
        ))}

        {/* Axes */}
        {axisLines.map((line, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--accent)"
            strokeOpacity={0.15}
            strokeWidth={1}
          />
        ))}

        {/* Data polygon */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          points={polygonPoints}
          fill="var(--accent)"
          fillOpacity={0.15}
          stroke="var(--accent)"
          strokeWidth={2}
          style={{ transformOrigin: `${center}px ${center}px` }}
        />

        {/* Data points */}
        {points.map((p, i) => (
          <motion.circle
            key={i}
            initial={{ r: 0 }}
            whileInView={{ r: 4 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            cx={p.x}
            cy={p.y}
            fill="var(--accent)"
            stroke="var(--background)"
            strokeWidth={2}
          />
        ))}

        {/* Labels */}
        {points.map((p, i) => (
          <text
            key={i}
            x={p.labelX}
            y={p.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-text-muted text-[10px] font-medium"
          >
            {p.name}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default RadarChart

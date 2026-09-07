import React from "react"

interface ContainerProps {
  children: React.ReactNode
  overflowVisible?: boolean
}

const Container = ({ children, overflowVisible = false }: ContainerProps) => {
  return (
    <div
      className={`min-h-screen bg-pattern relative ${
        overflowVisible ? "" : "overflow-x-clip"
      }`}
    >
      <div className="absolute inset-0 grid-pattern opacity-[0.12] pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto py-4 sm:py-8 relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Container

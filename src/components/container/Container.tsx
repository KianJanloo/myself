import React from 'react'
import ParallaxLayer from '../ui/ParallaxLayer'

interface ContainerProps {
  children: React.ReactNode
  overflowVisible?: boolean
}

const Container = ({ children, overflowVisible = false }: ContainerProps) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-secondary to-background bg-pattern relative ${overflowVisible ? '' : 'overflow-hidden'}`}>
      {/* Parallax depth layer 1 - slowest (background) */}
      <ParallaxLayer depth={0.005}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element w-40 h-40 top-10 left-5 opacity-5"></div>
          <div className="floating-element w-32 h-32 top-1/3 right-10 opacity-5"></div>
          <div className="floating-element w-24 h-24 bottom-20 left-1/3 opacity-5"></div>
        </div>
      </ParallaxLayer>

      {/* Parallax depth layer 2 - medium */}
      <ParallaxLayer depth={0.015}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element w-28 h-28 top-20 left-10"></div>
          <div className="floating-element w-20 h-20 top-40 right-20"></div>
          <div className="floating-element w-16 h-16 bottom-40 left-1/4"></div>
          <div className="floating-element w-24 h-24 bottom-20 right-1/3"></div>
        </div>
      </ParallaxLayer>

      {/* Parallax depth layer 3 - fastest (foreground) */}
      <ParallaxLayer depth={0.03}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-element w-12 h-12 top-1/2 left-1/2"></div>
          <div className="floating-element w-8 h-8 top-1/3 right-1/4"></div>
          <div className="floating-element w-10 h-10 bottom-1/3 left-1/5"></div>
        </div>
      </ParallaxLayer>

      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      <div className='max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 relative z-10'>
        {children}
      </div>
    </div>
  )
}

export default Container

import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 bg-pattern relative overflow-hidden'>
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element w-32 h-32 top-20 left-10"></div>
        <div className="floating-element w-24 h-24 top-40 right-20"></div>
        <div className="floating-element w-16 h-16 bottom-40 left-1/4"></div>
        <div className="floating-element w-20 h-20 bottom-20 right-1/3"></div>
        <div className="floating-element w-28 h-28 top-1/2 left-1/2"></div>
        <div className="floating-element w-12 h-12 top-1/3 right-1/4"></div>
      </div>
      
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10'>
        {children}
      </div>
    </div>
  )
}

export default Container

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '../context/ThemeContext'

import ErrorBoundary from '../components/common/ErrorBoundary'
import LoadingScreen from '../components/common/LoadingScreen'
import ScrollProgress from '../components/common/ScrollProgress'
import ParticleBackground from '../components/common/ParticleBackground'
import ResumeDownload from '../components/common/ResumeDownload'
import BackToTop from '../components/common/BackToTop'
import Footer from '../components/common/Footer'
import SEOHead from '../components/seo/SEOHead'
import CommandPalette from '../components/common/CommandPalette'
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts'
import { routes } from "@/lib/routes.tsx";

function AppContent() {
  useKeyboardShortcuts()

  const router = createBrowserRouter(routes)

  return (
    <>
      <SEOHead />
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <RouterProvider router={router} />
      <ResumeDownload />
      <BackToTop />
      <CommandPalette />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
            <HeroUIProvider>
              <AppContent />
            </HeroUIProvider>
          </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

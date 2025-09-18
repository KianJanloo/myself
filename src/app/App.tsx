import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import { LandingScreen } from '../screen'
import { HeroUIProvider } from "@heroui/react";
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from '../components/common/ErrorBoundary'
import LoadingScreen from '../components/common/LoadingScreen'
import ScrollProgress from '../components/common/ScrollProgress'
import ParticleBackground from '../components/common/ParticleBackground'
import ResumeDownload from '../components/common/ResumeDownload'
import BackToTop from '../components/common/BackToTop'
import Footer from '../components/common/Footer'
import SEOHead from '../components/seo/SEOHead'

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingScreen />,
    }
  ])

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <HeroUIProvider>
          <SEOHead />
          <LoadingScreen />
          <ScrollProgress />
          <ParticleBackground />
          <RouterProvider router={routes} />
          <ResumeDownload />
          <BackToTop />
          <Footer />
        </HeroUIProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App

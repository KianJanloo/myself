import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
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
import { routes } from "@/lib/routes.tsx";

function App() {
  const router = createBrowserRouter(routes)

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <HeroUIProvider>
          <SEOHead />
          <LoadingScreen />
          <ScrollProgress />
          <ParticleBackground />
          <RouterProvider router={router} />
          <ResumeDownload />
          <BackToTop />
          <Footer />
        </HeroUIProvider>
      </HelmetProvider>
    </ErrorBoundary>
  )
}

export default App

import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "../context/ThemeContext"

import ErrorBoundary from "../components/common/ErrorBoundary"
import LoadingScreen from "../components/common/LoadingScreen"
import ScrollProgress from "../components/common/ScrollProgress"
import BackgroundEffects from "../components/common/BackgroundEffects"
import ResumeDownload from "../components/common/ResumeDownload"
import BackToTop from "../components/common/BackToTop"
import Footer from "../components/common/Footer"
import SEOHead from "../components/seo/SEOHead"
import CommandPalette from "../components/common/CommandPalette"
import KeyboardShortcutsHelp from "../components/common/KeyboardShortcutsHelp"
import useKeyboardShortcuts from "../hooks/useKeyboardShortcuts"
import { routes } from "@/lib/routes.tsx"

function AppContent() {
  useKeyboardShortcuts()
  const router = createBrowserRouter(routes)

  return (
    <>
      <SEOHead />
      <BackgroundEffects />
      <LoadingScreen />
      <ScrollProgress />
      <RouterProvider router={router} />
      <ResumeDownload />
      <BackToTop />
      <CommandPalette />
      <KeyboardShortcutsHelp />
      <Footer />
    </>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
          <AppContent />
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

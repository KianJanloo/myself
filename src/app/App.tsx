import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import { LandingScreen } from '../screen'
import { HeroUIProvider } from "@heroui/react";

function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingScreen />,
    }
  ])

  return (
    <HeroUIProvider>
      <RouterProvider router={routes} />
    </HeroUIProvider>
  )
}

export default App

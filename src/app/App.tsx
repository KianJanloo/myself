import { RouterProvider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom";
import { LandingScreen } from '../screen'

function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LandingScreen />,
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App

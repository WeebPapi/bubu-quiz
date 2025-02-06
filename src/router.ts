import { createBrowserRouter } from "react-router-dom"
import StartPage from "./pages/StartPage"
import { createElement } from "react"
import FirstQ from "./pages/FirstQ"
import SecondQ from "./pages/SecondQ"
import ThirdQ from "./pages/ThirdQ"
import EndPage from "./pages/EndPage"

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(StartPage),
  },
  {
    path: "/1",
    element: createElement(FirstQ),
  },
  {
    path: "/2",
    element: createElement(SecondQ),
  },
  {
    path: "/3",
    element: createElement(ThirdQ),
  },
  {
    path: "/4",
    element: createElement(EndPage),
  },
])

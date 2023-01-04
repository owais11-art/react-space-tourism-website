import { Route, Routes } from "react-router-dom"
import Crew from "./pages/Crew"
import DefaultLayout from "./pages/DefaultLayout"
import Destination from "./pages/Destination"
import Home from "./pages/Home"
import Technology from "./pages/Technology"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<Home/>} />
          <Route path="destination" element={<Destination/>} />
          <Route path="crew" element={<Crew/>} />
          <Route path="technology" element={<Technology/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App

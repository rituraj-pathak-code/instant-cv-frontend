import "./index.css"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <div className="mx-32 min-h-[100vh]">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
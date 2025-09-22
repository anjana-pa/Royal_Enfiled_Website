// import { Navbar } from "./components/Navbar"
import  Hero from "./components/Hero"
import {Footer} from "./components/Footer"
import { Navbar } from "./components/Navbar"


function App() {
  return (
    <div className="max-w-[90%] bg-[#212121] m-auto pt-14">
      <div className="bg-black max-h-screen">
        <Navbar />
        <Hero />
        <Footer/>
      </div>
    </div>
  )
}

export default App

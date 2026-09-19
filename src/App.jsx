import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import About from "./components/About"
import Gallery from "./components/Gallery"
import RemoteServices from "./components/RemoteServices"

function App(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <RemoteServices/>
    <Gallery/>
    <About/>
    </>
  )
}

export default App

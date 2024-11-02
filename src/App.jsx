import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
function App() {

  return (
    <>
      <div className="bg-[#011627] w-full overflow-hidden h-screen">
        <Header/>
          <Routes>
            <Route path="/" element={ <Hero/>} />
            <Route path="/about" element={ <About/>} />
            <Route path="/project" element={ <Project/>} />
          </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
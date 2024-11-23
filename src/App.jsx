import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
const Hero = lazy(()=>import('./components/Hero'))
const Footer = lazy(()=>import('./components/Footer'))
const Header = lazy(()=>import('./components/Header'))
const About = lazy(()=>import('./components/About'))
const Project = lazy(()=>import('./components/Project'))
const Contact = lazy(()=>import('./components/Contact'))


function App() {
  return (
    <>
      <div className="bg-[#011627] w-full relative overflow-hidden h-screen md:h-screen">
        <Suspense><Header/></Suspense>
          <Routes> 
            <Route path="/" element={ <Suspense><Hero/></Suspense>}/>
            <Route path="/about" element={ <Suspense><About/></Suspense>} />
            <Route path="/project" element={ <Suspense><Project/></Suspense>} />
            <Route path="/contact" element={ <Suspense><Contact /></Suspense>} />
          </Routes>
        <Suspense><Footer/></Suspense>
      </div>
    </>
  )
}

export default App
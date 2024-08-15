import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { About } from "./components/About";
import  Technologies  from "./components/Technologies";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TermsAndConditions from "./components/Terms";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased 
    selection:bg-cyan-300 selection: text-cyan-900">
      <div className="flixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute top-0 z-[-2]  w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About/>
          <Technologies/>
          <Experiance />
          < Projects/>
          <Contact/>
          <TermsAndConditions />
          
          
        </div>
      </div>
    </div>

  )
}

export default App;
import { useState, useEffect } from 'react'

import './App.css'

import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/aboutme/About'
import Services from './components/services/Services'
import Resume from './components/resume/Resume'
import Faq from './components/Faq'
import Client from './components/client/Client'
import Contact from './components/contact/Contact'
import Footer from './components/foooter/Footer'
// import SimpleSlider from './components/client/SimpleSlider'

function App() {

  return (
    <>
   <section id='home ' className=' px-12  ' >
        
          <Navbar />
        
    </section>
     
    <section id='header'>
        
        <Header />
        
    </section>

    <section id='about' >
      
        <About />
        
    </section>
    <section id='services' >
        
        <Services />
        
    </section>
    <section id='resume' >
        
        <Resume />
        
    </section>
    <section id='faq' >
        
        <Faq />
        
    </section>
    <section id='client' >
        
        <Client />
        
    </section>
    <section id='contact' >
        
        <Contact />
        
    </section>
    <section  >
        
        <Footer />
        
    </section>
    
        
     
      
      
      
    </>
  )
}

export default App

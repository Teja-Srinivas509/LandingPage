import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Home from '../Components/Home/Home'
import Intro from '../Components/Intro/Intro'
import Services from '../Components/Services/Services'
import CallMe from '../Components/CallMe/CallMe'
import Projects from '../Components/Projects/Projects'
import About from '../Components/About/About'
import Footer from '../Components/Footer/Footer'

function LandingPage() {
  return (
    <div className='LandingPage'>
      <NavBar/>
      <div id='home'><Home/></div>
      <div id='intro'><Intro/></div>
      <div id='services'><Services/></div>
      <div id='call_me'><CallMe/></div>
      <div id='projects'><Projects/></div>
      <div id='about'><About/></div>
      <Footer/>  
    </div>
  )
}

export default LandingPage

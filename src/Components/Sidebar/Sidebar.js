import React, { useEffect } from 'react'
import '../Sidebar/Sidebar.css'
import logo from '../../assets/logo.svg'


function Sidebar() {
const closeSideBar=()=>{
    document.querySelector('.sidebar').style.display='none'

}
  return (
    <div className='Sidebar'>
      <nav className='sidebar'>
        <span onClick={closeSideBar}><i class="fa-solid fa-xmark"></i></span>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#call_me">Call Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

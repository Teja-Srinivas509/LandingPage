import React, { useEffect } from 'react'
import '../NavBar/NavBar.css'
import logo from '../../assets/logo.svg'
import Sidebar from '../Sidebar/Sidebar'

function NavBar() {  
  useEffect(()=>{
    const handleScroll = () => {
      const navbar = document.querySelector('.n');
      if (window.scrollY >40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  },[])
  const showSideBar=()=>{
    const sideBar = document.querySelector('.sidebar')
    sideBar.style.display = 'flex'
  }
  return (
    <div className='NavBar'>
      <Sidebar/>
      <nav className='n'>
        <img src={logo} className='logo'/>
        <ul>
            <li className='hideOnMobile'><a href="#home">Home</a></li>
            <li className='hideOnMobile'><a href="#intro">Intro</a></li>
            <li className='hideOnMobile'><a href="#services">Services</a></li>
            <li className='hideOnMobile'><a href="#call_me">Call Me</a></li>
            <li className='hideOnMobile'><a href="#projects">Projects</a></li>
            <li className='hideOnMobile'><a href="#about">About</a></li>
            <li className='hideOnMobile'><a href="#contact">Contact</a></li>
            <li className='hideOnMobile'><i class="fa-brands fa-github"></i></li><span>&nbsp;</span>
            <li className='hideOnMobile'><i class="fa-brands fa-linkedin-in"></i></li><span>&nbsp;</span>
            <li onClick={showSideBar} className='show'><i class="fa-solid fa-bars"></i></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar

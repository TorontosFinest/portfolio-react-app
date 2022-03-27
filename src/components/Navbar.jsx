import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import Logo from "../assets/logo.png"
const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
    
    <div>
        <img src={Logo} alt="logo" style={{width: '150px'}}/>
    </div>
    <div>
        <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>

    <ul className="hidden">
        <FaBars/>
    </ul>

     <ul className="hidden">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
   

    <div></div>
    
    </div>
  )
}

export default Navbar
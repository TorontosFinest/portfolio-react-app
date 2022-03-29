import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa"
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/logo.png"
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
    
    <div>
        <img src={Logo} alt="logo" style={{width: '150px'}}/>
    </div>
       <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    <ul onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars/> : <FaTimes />}
    </ul>

     <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
             <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
   

    <div className="hidden lg:flex fixed flex-col top-[35%] left-0" >
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-sm'>
            <a className='flex justify-between items-center w-full' href="https://www.linkedin.com/in/abdi-ali2022/" target="_blank">
                LinkedIn <FaLinkedin size={30} />
            </a>
        </li>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] mt-5 hover:ml-[-10px] duration-300 bg-slate-800 rounded-sm'>
            <a className='flex justify-between items-center w-full' href="https://github.com/TorontosFinest" target="_blank">
                GitHub <FaGithub size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] mt-5 hover:ml-[-10px] duration-300 bg-green-600 rounded-sm'>
            <a className='flex justify-between items-center w-full' href="mailto: abdialicanada20@gmail.com">
                Email<HiOutlineMail size={30} />
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-110px] mt-5 hover:ml-[-10px] duration-300 bg-gray-600 rounded-sm'>
            <a className='flex justify-between items-center w-full' href="https://resume.creddle.io/resume/1ogk2dupqat" target="_blank">
                Resume<BsFillPersonLinesFill size={30} />
            </a>
        </li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar
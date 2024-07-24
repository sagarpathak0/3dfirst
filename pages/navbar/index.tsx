import React, { useState } from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white fixed w-full mb-10 z-10 border-double border-b-8 border-black dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src="https://cdn.pixabay.com/photo/2023/10/15/11/38/street-8316703_1280.jpg" alt="logo" className='h-8'/>
                <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-mono'>Hello</span>
            </Link>
            <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
                <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center'><Link href='/getstarted'>Get started</Link></button>
                <button 
                  onClick={toggleDropdown} 
                  data-collapse-toggle="navbar-cta" 
                  type='button' 
                  className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' 
                  aria-controls='button' 
                  aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-5 h-5' aria-hidden="true" fill='none' viewBox='0 0 17 14'>
                        <path stroke='currentColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
                <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white'>
                    <li>
                        <Link href='/' className='block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 ' aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link href='/getstarted' className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700'>About</Link>
                    </li>
                    <li>
                        <Link href='/getstarted' className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700'>Services</Link>
                    </li>
                    <li>
                        <Link href='/getstarted' className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:text-blue-700'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
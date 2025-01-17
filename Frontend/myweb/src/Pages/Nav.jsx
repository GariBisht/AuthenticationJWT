import React from 'react'
import {Link} from 'react-router-dom';
function Nav() {
  return (
    
     <>
     
     <nav className="bg-cyan-400 fixed top-0 w-full z-10 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className=" text-lg font-bold">
        <img
            src="/img1.jpg" 
            alt="Logo"
            className="h-12 w-12"
          />
  
        </a>

        {/* Navigation Links */}
        <div className="space-x-4 hidden md:flex">
          <a  
            href="/"
            className="text-black hover:bg-white-500 px-3 py-2 rounded"
          >
            Home
          </a>
          <a
            href="/add"
            className="text-black hover:bg-white-500 px-3 py-2 rounded"
          >
            About
          </a>
         
          <a
            href="/new"
            className="text-black hover:bg-white-500 px-3 py-2 rounded"
          >
            Books
          </a>

          <a
            href="/login"
            className="text-black hover:bg-white-500 px-3 py-2 rounded"
          >
            Log In
          </a>
        </div>

      
      </div>
    </nav>
    </>
    
  )
}

export default Nav

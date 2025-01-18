import React from 'react'

const Footer = () => {
  return (
    <div className='bg-cyan-300 flex items-center justify-center'>
      <footer className="footer footer-center bg-primary text-primary-content p-10">
      <a href="/" className=" text-lg font-bold">
      <img className="mx-auto h-10 w-auto" src="/img1.jpg" alt="Your Company"/>
  
        </a> <span> 
    Copyright © {new Date().getFullYear()} - All right reserved
    </span>
    <nav>
    {/* <div className="grid grid-flow-col gap-0"> */}
      
   
     
    {/* </div> */}
  </nav>
</footer>

    </div>
  )
}

export default Footer

import { useState } from 'react'
import Nav from './Pages/Nav'
import { BrowserRouter  , Routes ,Route } from 'react-router-dom'
//import './App.css'

function App() {
 

  return (
    <>
      <Nav/>
      <div className='container mx-auto p-4 flex justify-between items-center'>
      <BrowserRouter>
      
      <Routes>
       <Route path = "/" element= {<h1>Available Books</h1>} />
       <Route path = "/add" element= {<h1>Most Popular Books</h1>} />
       <Route path = "/new" element= {<h1>New Books</h1>} />
      </Routes>
      </BrowserRouter>
       
      </div>
     
      <p className="bg-black-500 text-white mx-auto p-2 w-1/2 text-center px-3 py-2 rounded">
        here you can  Read books  
      </p>
    </>
  )
}

export default App

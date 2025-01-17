import { useState } from 'react'
import Nav from './Pages/Nav'
import LogIn from './Pages/LogIn'
import { BrowserRouter  , Routes ,Route } from 'react-router-dom'
//import './App.css'

function App() {
 

  return (
    <>
      <Nav/>
      {/* <div className='container mx-auto p-30 flex justify-between items-center'> */}
      <BrowserRouter>
      
      <Routes>
      <Route
          path="/"
          element={
            <div className="h-screen flex items-center justify-center">
              <h1 className="text-4xl font-bold">Available Books</h1>
            </div>
          }
        />
      
       <Route path = "/add" element= {  <div className="h-screen flex items-center justify-center">
        <h1>Most Popular Books</h1> </div> } />

       <Route path = "/new" element= {  <div className="h-screen flex items-center justify-center">
        <h1>New Books</h1> </div> }/>
       
       <Route path="/login" element={  <div className="h-screen flex items-center justify-center">
        <LogIn />  </div>} />
      </Routes>
      </BrowserRouter>
       
      {/* </div> */}
     
      <p className="bg-blue-500 text-white mx-auto p-2 w-1/2 text-center px-3 py-2 rounded">
        here you can  Read books  
      </p>
    </>
  )
}

export default App

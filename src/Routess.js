import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import IndivialMovie from './IndivialMovie.js';
const Routess = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route  path="/" element={<App/>}/>
          <Route  path=":id" element={<IndivialMovie/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Routess
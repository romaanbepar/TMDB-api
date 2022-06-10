import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import IndivialMovie from './IndivialMovie.js';
import Login from "./Login"
import Home from "./Home"
const Routess = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/app" element={<App/>}/>
          <Route  path=":id" element={<IndivialMovie/>}/>
          <Route exact path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Routess
import React,{useEffect} from 'react'
import Nav1 from './Nav1'
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
 const navigate=useNavigate()
//     useEffect(()=>{
//         const check=localStorage.getItem("users")
//         console.log(check)
//         if(check === null){
//           navigate('/login')
//         }
//      },[])


    useEffect(()=>{
      const token=localStorage.getItem("users")
      if(token===true){
        navigate("/")
        
      }
    })

  return (
    <> 
    <Nav1/>
    <section className='sec'></section>

    </>
  )
}

export default Home
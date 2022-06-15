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
    },[])

  return (
    <> 
    <Nav1/>
    <section className='sec'>
        <h1>Unlimited Movies, TV Shows and more.</h1>
        <h2>Watch wherever you want. Cancel whenever you want.</h2>
        <p>Ready to watch? Enter your email address to create or restart your membership.</p>
    </section>
    <section className='homesec2'>
        <div className='leftdiv'>
            <h2>Enjoy on your TV.</h2>
            <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
        </div>
        <div className='rightdiv'>
            <img className='imgright'  src=""/>
        </div>

    </section>

    </>
  )
}

export default Home
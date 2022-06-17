import React,{useEffect} from 'react'
import Nav1 from './Nav1'
import "./Home.css";
import { useNavigate } from "react-router-dom";
import bg from "./Asset/bg.png"
import mobile from "./Asset/mobile.png"
import device from "./Asset/device.png"
import kid from "./Asset/kid.png"
import Footer from './Footer';
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
            <h2>Have fun on your TV.</h2>
            <h3>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players as well as other devices.</h3>
        </div>
        <div className='rightdiv'>
            <img className='imgright'  src={bg} alt="bg"/>
        </div>

    </section>

    <section className='homesec3'>
    <div className='leftdiv'>
            <img className='imgright'  src={mobile} alt="bg"/>
    </div>
    <div className='rightdiv'>
            <h2>Download your shows for offline viewing.</h2>
            <h3>Save your favorites easily and always have something to watch.</h3>
        </div>
       

    </section>

    <section className='homesec4'>
        <div className='leftdiv'>
            <h2>Watch everywhere.</h2>
            <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
        </div>
        <div className='rightdiv'>
            <img className='imgright'  src={device} alt="bg"/>
        </div>

    </section>


    <section className='homesec5'>
    <div className='leftdiv'>
            <img className='imgright'  src={kid} alt="bg"/>
    </div>
    <div className='rightdiv'>
            <h2>Create a profile for kids.</h2>
            <h3>Let the kids go on an adventure with your favorite characters just for them - free with your membership.</h3>
        </div>
       

    </section>
    <Footer/>
    
    </>
  )
}

export default Home
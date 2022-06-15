import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import './Video.css'
import ReactPlayer from 'react-player';


const url ='https://api.themoviedb.org/3';

function Videos() {
    const[videos ,setVideos] = useState([]);
    const {id} = useParams()

    useEffect(()=>{
        async function fecthVideo(){
            const res= await axios.get(`${url}/movie/${id}/videos?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US`)
            setVideos(res.data.results.find(vid => vid.type ==="Trailer"))
            return res;
        }
        fecthVideo()
  },[])
  
  return (
      <>
      <div className='trailer-wrapper'> 
      <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videos.key}`}
      />
      </div>
    </>
  )
}

export default Videos
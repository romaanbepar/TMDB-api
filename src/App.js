import React, { useState, useEffect } from "react";
import "./App.css";
import MovieBox from "./MovieBox";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
// API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=b787641793c56c4a2435b97b586f64d3&query"

import BeatLoader from "react-spinners/BeatLoader";
import Nav1 from "./Nav1";
function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b787641793c56c4a2435b97b586f64d3";
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(false);
  const [mov, setPrices] = useState([]);

  const navigate=useNavigate();
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  
  useEffect(()=>{
     const check=localStorage.getItem("users")
        console.log(check)
        if(check === null){
          navigate('/login')
        }
     },[])

     
  
      // useEffect(() => {
      //     let mov = movies.map(p => p.vote_average.substring(3));
      //     setPrices(mov)
      // }, []);
  

      //working
      console.log(mov);
      const sortAscending = () => {
        const sortAscPrices = [...movies]
        // const sortAscPrices =
         movies.sort((a, b) => a.vote_average - b.vote_average) 
        console.log(sortAscPrices);   
        setPrices( sortAscPrices )
      }
      
      // const sortDescending = () => {
      //   const sortDescPrices = [...prices]
      //     const sortDescPrices =movies.sort((a, b) => b.vote_average - a.vote_average)
      //     setPrices( sortDescPrices )
      //     console.log(sortDescPrices);   
      // }

      // working
      const sortDescending = () => {
        const sortDescPrices = [...movies]
        movies.sort((a, b) => a.vote_average - b.vote_average).reverse()
        setPrices( sortDescPrices )
    }

    // const sortDescending = () => {
    //   const sortDescPrices = [...movies]
    //  movies.sort((a, b) => b.vote_average - a.vote_average)

    //   // movies.sort((a, b) => a - b).reverse()
    //   setPrices( sortDescPrices )
  // }

  return (
    <>{
      loading?      
      <div className='loader_wrapper'>     
       <BeatLoader color="#80FFD4" width="100px" height="100px"/>      
       </div>      
      :
    <>
     <Nav1 movies={movies} setmovies={setMovies} setPrices={setPrices} />
     {/* <Button onClick={sortAscending}>LowToHigh</Button>
          <Button onClick={sortDescending}>HighToLow</Button> */}
          
      <div>
      {movies.length > 0 ?(
          <div className="container ">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
         ): (
          <h1 className="sorry">sorry!!! no such movie</h1>
        )}
      </div>
      </>
}
    </>
  );
}

export default App;

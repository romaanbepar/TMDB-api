import React, { useState, useEffect } from "react";
import "./App.css";
import MovieBox from "./MovieBox";

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

  

  return (
    <>{
      loading?      
      <div className='loader_wrapper'>     
       <BeatLoader color="#80FFD4" width="100px" height="100px"/>      
       </div>      
      :
    <>
     <Nav1 movies={movies} setmovies={setMovies}/>
      <div>
        {movies.length > 0 ? (
          <div className="container ">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h1 className="sorry">sorry!!! no such movie</h1>
        )}
      </div>
      </>
}
    </>
  );
}

export default App;

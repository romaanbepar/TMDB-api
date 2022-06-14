import React from "react";
import "./indiviualmovie.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link,useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";
// const API_IMG = "https://image.tmdb.org/t/p/w500/";
const API_URL = "https://api.themoviedb.org/3";

const IndivialMovie = () => {
  const [movie, setMovie] = useState([]);
  const navigate=useNavigate()
  const { id } = useParams();

  useEffect(() => {
    async function getmovies() {
      const request = await axios.get(
        `${API_URL}/movie/${id}?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US`
      );
      console.log(
        `${API_URL}/movie/${id}?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US`
      );
      setMovie(request.data);

      return request;
    }
    getmovies();
  }, [id]);

  useEffect(()=>{
    const check=localStorage.getItem("users")
       console.log(check)
       if(check === null){
         navigate('/login')
       }
    },[])


  return (
    <>
      <div className="movie-details">
        <div
          className="movie-content"
          style={{
            backgroundSize: "cover",
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
            backgroundPosition: "Top center",
            objectFit: "contain",
          }}
        >
          <div className="movie-description">
            <h1 className="movie-title">{movie.original_title}</h1>

            <p className="movie-overview">{movie.overview}</p>

            <li>Popularity - {movie.popularity}</li>
            <li>Voting - {movie.vote_average}</li>
            <li>Release Date - {movie.release_date}</li>
            <li>Revenue - {movie.revenue}</li>
            <Link to={"/app"}>
            
              <Button variant="secondary " type="submit">
                Home
              </Button>
            </Link>
          </div>
          <div className="movie-poster">
            <h3 className="tagline">{movie.tagline}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="movie-image"
              alt={movie.name}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndivialMovie;

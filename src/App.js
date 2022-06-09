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
function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=b787641793c56c4a2435b97b586f64d3";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
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

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>{
      loading?      
      <div className='loader_wrapper'>     
       <BeatLoader color="#80FFD4" width="100px" height="100px"/>      
       </div>      
      :
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
      
          <Navbar.Brand href="/">MovieDb App</Navbar.Brand>
          <Link to={"/login"}>  <Button variant="secondary " type="submit">
                Login
              </Button></Link>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Movie Search"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              ></FormControl>
              <Button variant="secondary" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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

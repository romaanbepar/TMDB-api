import React,{useState,useEffect} from 'react'
import axios from "axios";
import netflix from "./Asset/netflix.png"

import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    
  } from "react-bootstrap";
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import Dropdown from 'react-bootstrap/Dropdown';



  import {Link,useNavigate} from "react-router-dom"
  const Nav1 = ({movies,setmovies,setPrices}) => {
    const [query, setQuery] = useState("");
    // const [movies, setMovies] = useState([]);
    // const [optionValue, setOptionValue] = useState("");
    // const [mov, setPrices] = useState([]);
    const popular="https://api.themoviedb.org/3/movie/popular?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US&page=1"
    const LATEST_API="https://api.themoviedb.org/3/movie/latest?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US"
const nowplaying="https://api.themoviedb.org/3/movie/now_playing?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US&page=1"
const upcoming="https://api.themoviedb.org/3/movie/upcoming?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US&page=1"
const toprated="https://api.themoviedb.org/3/movie/top_rated?api_key=b787641793c56c4a2435b97b586f64d3&language=en-US&page=1"
    const [login,setLogin]= useState(false)
 const navigate=useNavigate()
    useEffect(() => {
      const local =localStorage.getItem("users");
console.log(local)
     local?setLogin(true):setLogin(false)
    }, [])
    

    const searchMovie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
          const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setmovies(data.results);
        } catch (e) {
          console.log(e);
        }
      };
      console.log(movies);
    
     



      //logout function

      const logOut=()=>{
        localStorage.removeItem("users")
        setLogin(false)
        navigate("/")
      }


      //handling function
      const changeHandler=(e)=>{
        setQuery(e.target.value);
      }

    //   //sorting high and low function
      // console.log(mov);
      const sortAscending = () => {
      const sortAscPrices = [...movies]

        movies.sort((a, b) => a.vote_average - b.vote_average) 
        console.log(sortAscPrices);   
        setPrices( sortAscPrices )
      }


      const sortDescending = () => {
        const sortDescPrices = [...movies]
        movies.sort((a, b) => a.vote_average - b.vote_average).reverse()
        setPrices( sortDescPrices )
    }


//     // latest movies
const latest=async()=>{
  try{
      const result=await axios.get(LATEST_API)
      console.log(result.data);
      setmovies([result.data])
      console.log(movies);
  }catch(error){
      console.log(error);
  }
}


// now playing movies
 const NowPlaying=async()=>{
  try{
      const response=await axios.get(nowplaying)
      console.log(response.data.results);
      setmovies(response.data.results)
  }catch(error){
      console.log(error);
  }

}

// upcoming movies
const Upcoming=async()=>{
  try{
      const resp=await axios.get(upcoming)
      console.log(resp.data.results);
      setmovies(resp.data.results)
  }catch(error){
      console.log(error);
  }
}

// //top rated

const TopRated=async()=>{
  try{
      const resp=await axios.get(toprated)
      console.log(resp.data.results);
      setmovies(resp.data.results)
  }catch(error){
      console.log(error);
  }
}

//Popular movies
const Popular=async()=>{
  try{
      const resp=await axios.get(popular)
      console.log(resp.data.results);
      setmovies(resp.data.results)
  }catch(error){
      console.log(error);
  }
}
  return (
    <div>

        <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
      
          <Navbar.Brand href="/"><img src={netflix} alt="logo" className='logopic' style={{width:"70px"}}/></Navbar.Brand>
          
          {login ? (
      <>
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
          
   
          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav> 
            
            

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            


     <NavDropdown title="Categories" id="navbarScrollingDropdown">
        <Dropdown.Item onClick={NowPlaying}>Now Playing</Dropdown.Item>
        <Dropdown.Item onClick={TopRated}>Top rated</Dropdown.Item>
        <Dropdown.Item onClick={Popular}>Popular</Dropdown.Item>
        <Dropdown.Item onClick={Upcoming}>Upcoming</Dropdown.Item>     
        <Dropdown.Item onClick={latest}>Latest</Dropdown.Item>
            </NavDropdown> 
          <NavDropdown title="Ratings" id="navbarScrollingDropdown">
            <Dropdown.Item eventKey="1" onClick={sortAscending}>LowToHigh</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={sortDescending}>HighToLow </Dropdown.Item>
            </NavDropdown>
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
          <Button onClick={logOut}>Logout</Button>
     </>) :(<>
    <Link to={"/login"}>  <Button variant="primary " type="submit">
                Login
              </Button></Link>
    </>)}
        </Container>
      </Navbar>

    </div>
  )
}

export default Nav1
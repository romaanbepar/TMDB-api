import React,{useState,useEffect} from 'react'
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
    Dropdown,
  } from "react-bootstrap";

  import {Link,useNavigate} from "react-router-dom"
  const Nav1 = ({movies,setmovies}) => {
    const [query, setQuery] = useState("");
    // const [movies1, setMovies] = useState([]);
    // const [optionValue, setOptionValue] = useState("");
    // const [mov, setPrices] = useState([]);



    const [login,setLogin]= useState(null)
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
          const res = await fetch(url);
          const data = await res.json();
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
    //   console.log(mov);
    //   const sortAscending = () => {
    //     const sortAscPrices = movies.sort((a, b) => a.vote_average - b.vote_average) 
    //     console.log(sortAscPrices);   
    //     setPrices( sortAscPrices )
    //   }


    //   const sortDescending = () => {
    //     const sortDescPrices = [...movies]
    //     movies.sort((a, b) => a.vote_average - b.vote_average).reverse()
    //     setPrices( sortDescPrices )
    // }
  return (
    <div>

        <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
      
          <Navbar.Brand href="/">MovieDb App</Navbar.Brand>
          {/* <Button onClick={sortAscending}>LowToHigh</Button>
          <Button onClick={sortDescending}>HighToLow</Button> */}
          
          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
    
   
          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav> 
            
            

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
            {login ? (
      <>
    
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
              <Button onClick={logOut}>Logout</Button>
      </>
    ):<>
    <Link to={"/login"}>  <Button variant="primary " type="submit">
                Login
              </Button></Link>
    </>}
             
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Nav1
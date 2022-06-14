
// import { Modal,show,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox = ({title,overview,poster_path,vote_average,release_date, id}) => {

  


//     const[show,setShow]=useState(false)
// const handleShow=()=>setShow(true)
// const handleClose=()=>setShow(false)
    
  return (
    <div className='card bg-white text-center mb-3'>
        <div className='card-body'>
            <img className='card-img-top' src={API_IMG+poster_path} alt="movieposter"/>
            
        </div>
        <div className='card-body'>
        <i class="fa-solid fa-star"></i>
          <h1> <i class="fa-duotone fa-star"></i>{vote_average}</h1>
        <Link to={`/${id}`}><button type="button" className='btn btn-warning btn-sm'>view More</button></Link>
            
        </div>
        
    </div>
  )
}

export default MovieBox
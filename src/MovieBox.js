import React, { useState } from 'react'
import { Modal,show,Button} from 'react-bootstrap';
const API_IMG="https://image.tmdb.org/t/p/w500/"

const MovieBox = ({title,overview,poster_path,vote_average,release_date}) => {

    const[show,setShow]=useState(false)
const handleShow=()=>setShow(true)
const handleClose=()=>setShow(false)
    
  return (
    <div className='card bg-white text-center mb-3'>
        <div className='card-body'>
            <img className='card-img-top' src={API_IMG+poster_path} alt="movieposter"/>
            
        </div>
        <div className='card-body'>
            <button type="button" className='btn btn-warning btn-sm' onClick={handleShow}>view More</button>
            <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} alt="movieposter"/>
                      <h3>{title}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="btn btn-warning btn-sm" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
        </div>
        
    </div>
  )
}

export default MovieBox
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import {  faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar style={{backgroundColor:'green'}}>
      <Container>
      <Link to={'/'} style={{textDecoderation:'none'}}> <Navbar.Brand href="#home" className='text-light fs-2'><FontAwesomeIcon icon={faStackOverflow} />{''}
        Project Pool
        </Navbar.Brand>
        </Link> 
      </Container>
    </Navbar>
  )
}

export default Header
import React from 'react'
import { Col,Row} from 'react-bootstrap'
import {  faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Image from '../assets/pic.png'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
function Home() {
  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:'green'}}>
        <div className='container-fluid rounded'>
            <Row className='align-items-center p-5 text-light'>
                <Col sm={12} md={6}><h1><FontAwesomeIcon icon={faStackOverflow}/>Project pool</h1>
                <Link to={'/dashboard'}><button className='btn btn-warning ms-3'>manage project</button></Link>
                <Link to={'/login'}><button className='btn btn-warning ms-3'>Start</button></Link>
                </Col>
                {/* <Col sm={12} md={6}>
                    <img src={Image} alt="image" className='w-75' />
                </Col> */}
            </Row>
        </div>
    </div>
    <div className='mt-5'>
        <h1 className='text-center'>Explore Your Project</h1>
       <marquee scrollAmount={10}> <div className='d-flex'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div></marquee>
        <div className='text-center mb-5'><Link to={'/project'}>See More</Link></div>
    </div>
    </>

  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'

function Project() {
    return (
        <>
            <Header />
            <h2 className='text-center'>All Project</h2>
            <div className='mt-5 d-flex justify-content-center align-items-center flex-column'>

                <input type="text" className='form-control w-25 mt-4 mb-5' placeholder='search by technologies' />
                <Row className='container-fluid'>
                    <Col sm={12} md={6} lg={4}>
                        <ProjectCard />
                    </Col>
                </Row>
            </div>
            <div className='mt-5 d-flex justify-content-center align-items-center flex-column mt-5'>
<h3 className='text-danger mt-5'>Please<span className='text-success'>Login</span>to See more Project</h3>
            </div >
        </>
    )
}

export default Project
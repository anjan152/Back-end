import React from 'react'
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 import { faSquareInstagram, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='row p-5' style={{ backgroundColor: 'green' }} >
            <div className='col-md-4'>
                <h3><FontAwesomeIcon icon={faStackOverflow} />PROJECT POOL</h3>
                <p className='mt-3'>A project is a set of tasks that must be completed within a defined timeline to accomplish a specific set of goals. These tasks are completed by a group of people known as the project team, which is led by a project manager, who oversees the planning, scheduling, tracking and successful completion of projects.</p>
            </div>
            <div className='col-md-2'>
                <h3>Links</h3>
                <Link to={'/'} style={{textDecoderation:'none'}}>
                <h6 className='mt-4'>Home</h6></Link>
                <h6>Login</h6>
                <h6>Register</h6>
            </div>
            <div className='col-md-2 ps-5'><h3>Guide</h3>
            <h6 className='mt-4'>React</h6>
            <h6>vue</h6></div>
            <div className='col-md-4'>
                <h3>Contact Us</h3>
                <div className='d-flex mt-4'>
                    <input type='text' className='form-control' placeholder='Enter email id'/>
                    <button className='btn btn-warning ms-3'>Subscribe</button>
                </div>
                <div className='d-flex mt-3 d-flex justify-content-between'>
                <FontAwesomeIcon icon={faSquareInstagram} size='2*1' />
                <FontAwesomeIcon icon={faLinkedin}  size='2*1'/>

                
                </div>
            </div>
        </div>
    )
}

export default Footer
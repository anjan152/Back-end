import React from 'react'
import Card from 'react-bootstrap/Card';
import  Image from '../assets/media.png';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Row,Col} from 'react-bootstrap';
import DatePicker from "react-datepicker";
function ProjectCard() {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 const Example = () => {}
 const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    <Card className='m-4 shadow p-3 w-100 ' onClick={handleShow}>
       <Card.Img variant='top' src={Image} /> 
      <Card.Body>
        <Card.Title className='text-center'>Media Player</Card.Title>
        </Card.Body>
    </Card>
    
    <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={12} md={6}>
                <img src={Image} alt="image" className='w-100' />
                </Col>
                <Col sm={12} md={6}>
                    <h3>Description</h3>
                    <p>A website created by using</p>
                    <h3> Created Date</h3>
                    <p> <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  
</p>
                </Col>

            </Row>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ProjectCard
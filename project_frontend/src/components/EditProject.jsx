import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'    
function EditProject() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <button  className='btn' onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} className='text-primary' /> 
            
        </button>
    </div>
    <Modal show={show} onHide={handleClose} size='lg' centered>
    <Modal.Header closeButton>
      <Modal.Title>Edit Project Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='mt-4 mb-3'>
            <input type="text" placeholder='Project title' className='form-control'/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='Language' className='form-control'/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='github link' className='form-control'/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='website link' className='form-control'/>
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Edit
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  )
}

export default EditProject
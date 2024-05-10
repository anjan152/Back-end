import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
function ToDo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <button className='btn' onClick={handleShow}><FontAwesomeIcon icon={faList} className='text-primary' />

        </button>
      </div>


      <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='mt-4 mb-3'> <InputGroup className="mb-" />
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </div>
          <div className='mt-3 mb-3'>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </div>
          <div className='mt-3 mb-3'>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </div>
          <div className='mt-3 mb-3'>
          <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Completed
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ToDo
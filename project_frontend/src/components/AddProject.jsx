import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AddProject() {
    const [show, setShow] = useState(false);
    const[projectDetails,setProjectDetails]=useState({
      ptojectTitle:"",
      language:"",
      github:"",
      website:""
    })
    const handleAdd = async(e)=>{
      e.preventDefault()
      if(!ptojectTitle || !language|| !github || !website){
        toast.info('fill the form completely')
      }else{
        const reqBody = new FormData()
        // to add data to the body-use append()-can add only one item at a time
        reqBody.append("title",ptojectTitle)
        reqBody.append("language",language)
        reqBody.append("github",github)
        reqBody.append("website",website)
      }
      // request header
      if(token){
      const reqHeader = {
        'Content-Type':'multipart/form-data',
        "Authorization":`Bearer ${token}`     }
      // call api
      const result = await addProjectApi(reqBody,reqHeader)
      console.log(result);
    }

    }
    const handleClose1 = ()=>{
      setProjectDetails({
        ptojectTitle:"",
        language:"",
        github:"",
        website:""
      })
    }
    console.log(projectDetails);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div>
        <button className='btn btn-success' onClick={handleShow}>
            Add project
        </button>
    </div>
    <Modal show={show} onHide={handleClose} size='lg' centered>
    <Modal.Header closeButton>
      <Modal.Title>Add Project Details</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div className='mt-4 mb-3'>
            <input type="text" placeholder='Project title'  value={projectDetails.title} className='form-control' onChange={(e)=>setProjectDetails({...projectDetails,ptojectTitle:e.target.value})}/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='Language'value={projectDetails.language}  className='form-control'onChange={(e)=>setProjectDetails({...projectDetails, language:e.target.value})}/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='github link' value={projectDetails.github} className='form-control'onChange={(e)=>setProjectDetails({...projectDetails, github:e.target.value})}/>
        </div>
        <div className='mt-3 mb-3'>
            <input type="text" placeholder='website link' value={projectDetails.website} className='form-control'onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose1}>
        Cancel
      </Button>
      <Button variant="primary" onClick={handleAdd}>
        Add
      </Button>
    </Modal.Footer>
  </Modal>
  <ToastContainer theme='colored' position='top-center' autoClose={2000} />
  </>
  )
}

export default AddProject
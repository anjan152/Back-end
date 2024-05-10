import React from 'react'
import AddProject from './AddProject'
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ToDo from './ToDo'

function MyProject() {
    return (
        <div className='border shadow p-4 rounded'>
            <div className='mt-4 d-flex'>
                <h3 className='text-success'>My Project</h3>
                <div className='ms-auto'>
                    <AddProject />
                </div>
            </div>
            <div className='mt-4'>
                <div className='border bg-light rounded p-3 d-flex'>
                    <h5>Media Player</h5>
                    <div className='d-flex ms-auto'>
                        <EditProject />
                        <ToDo />

                        <button className='btn'>   <FontAwesomeIcon icon={faTrash} className='text-danger ms-3' /> </button>
                    </div>
                </div>
                <div><h5 className='text-waning mt-5'>NO project added yet</h5></div>
            </div>
        </div>
    )
}

export default MyProject
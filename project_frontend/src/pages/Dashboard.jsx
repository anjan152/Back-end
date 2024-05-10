import React from 'react'
import Header from '../components/Header'
import MyProject from '../components/MyProject'

function Dashboard() {
  return (
    <>
    <Header/>
    <h2 className='m-4'> Welcome </h2>
    <div className='row my-5 p-5'>
      <div class name=" col-md-8">
     <MyProject/>
      </div>

    </div>
    </>
  )
}

export default Dashboard
// 1) import dotenv module
require('dotenv').config()
const express=require('express')
const cors = require('cors')
// create server
const router = require('./Routing/router')

const pserver=express()
pserver.use(cors())
pserver.use(express.json())
require('./DB/connection')

const PORT = 7000 || process.env
pserver.listen(PORT,()=>{
    console.log(`running sucessfully at port number ${PORT}`);
})

pserver.use(router)


// pserver.get('/',(req,res)=>{
//     res.send (`<h1> server running successfullly and ready to resolve get request</h1>`)
// })
//  pserver.post('/',(req,res)=>{
//    res.send (` post request`)
//  })
// pserver.put('/',(req,res)=>{
//     res.send (` put request`)
// })
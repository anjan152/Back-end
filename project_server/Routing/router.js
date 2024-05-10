// 1) import expess
const express = require('express')
// impot user controller
const userController = require('../Controllers/userController')
//import project controller
const projectControllers = require('../Controllers/projectControllers')
//routing is created with the help of routing class present in express module

//2) create an object for routing class
const router = new express.Router()

//3) set up path
//path for register request
router.post('/User/register',userController.register)
//path for login request
router.post('/User/login',userController.login)
// path for add project
router.post('/add-project',projectControllers.addProject)
// export router
module.exports = router
const express = require('express')
// create router for express
const router = new express.Router()

const userController = require ('../controller/userController')
// import multer upload config
const upload = require ('../multerConfig/storageConfig')
// define route for each http request
router.post('/employee/register',upload.single('user_profile') ,userController.register)

//  define routes for grt all users
router.get('/employee/get-all-employee-details',userController.getUsers)

// define route to view profile
router.get('/employee/viewProfile/:id',userController.viewProfile)

// define route to delete user
router.delete('/employee/deleteUser/:id',userController.deleteUser)

// define route to update user
router.put('/employee/update/:id' ,userController.editUser)

module.exports=router
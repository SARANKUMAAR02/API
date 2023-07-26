const express=require('express')
const  {createtask, getTask}  = require('../controller/taskcontroller')


const route=express.Router()




route.post('/',createtask)
route.get('/api',getTask)





module.exports=route
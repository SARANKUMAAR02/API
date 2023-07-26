const express=require('express')
const  {createtask, getTask, getFull}  = require('../controller/taskcontroller')


const route=express.Router()




route.post('/',createtask)
route.get('/api',getTask)
route.get('/',getFull)





module.exports=route
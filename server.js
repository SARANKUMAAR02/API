const express=require('express')
const app=express()
const mongoose=require('mongoose')
const router1=require('./router/route')
require('dotenv').config()
const cors=require('cors')


app.use(
    cors({
        origin:"*",
        methods:["GET"]
    })
)



app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{app.listen(process.env.PORT,()=>{
    console.log('DB connected listening port '+process.env.PORT)
})})
.catch((err)=>{
    console.log(err)
})



app.use('/work/thiru',router1)
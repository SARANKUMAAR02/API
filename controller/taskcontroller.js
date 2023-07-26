
const taskkk=require('../models/task')

const createtask=async (req,res)=>{

    const {line1,line2,chap_tam,id}=req.body

    try{
        const task=await  taskkk.create({line1,line2,chap_tam,id})
        res.status(200).json(task)
    }
    catch(err){

        res.status(400).json({error:err.message})
    }

}


const getTask=async (req,res)=>{
    const fetchid=req.query.id
    

    try{
        const task=await taskkk.find({id:fetchid})
        res.status(200).json(task)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}




module.exports={createtask,getTask}
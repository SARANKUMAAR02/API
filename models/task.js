const mongoose=require('mongoose')
const schema=mongoose.Schema


const taskm=new schema({
    line1:{
        type:String,
        require:true
    },
    line2:{
        type:String
    },
    chap_tam:{
        type:String
    },
    id:{
        type:Number
    }
},{timestamps:true

})




module.exports=mongoose.model('task',taskm)
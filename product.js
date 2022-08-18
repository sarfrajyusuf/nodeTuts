const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:Number
});

//connect model
module.exports=mongoose.model('products',productSchema)
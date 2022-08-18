const express=require('express');
const mongodb=require('mongodb')
const dbConnect=require('./config');
const app=express();

app.use(express.json());

app.delete('/:id',async(req,res)=>{
    const data=await dbConnect();
    //delete on the basis of name
    // const result=await data.deleteOne({name:req.params.name}); 
    
    //delte data on the basis of id
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});  
    res.send({result:'deleted'})
})
app.listen(5000)
const express = require('express');
const dbConnect=require('./config');
const app=express();

app.get('/',async (req,res)=>{
    let data= await dbConnect();
    data=await data.find().toArray();
    res.send(data)
})
app.listen(2000,()=>{
    console.log("server is running")
})

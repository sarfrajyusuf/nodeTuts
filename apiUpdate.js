const express =require('express');
const dbConnect=require('./config');
const app=express();

app.use(express.json())

app.put('/',async (req,res)=>{
    const data=await dbConnect();
    const result=await data.updateOne(
        {name:'sonia'},
        {$set:{email:"s@gmail.com"}});
    res.send({result:'update'})

}) 
app.listen(5000,()=>{
    console.log('server is running on 5000')
})
   



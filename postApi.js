const express =require('express');
const dbConnect=require('./config');
const app=express();

app.use(express.json())

app.post('/',async (req,res)=>{
    const data=await dbConnect();
    const result=await data.insert(req.body);
    res.send(result)

}) 
app.listen(5000,()=>{
    console.log('server is running on 5000')
})
   



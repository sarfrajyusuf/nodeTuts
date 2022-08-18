const express=require('express');
require('./mongooseConfig');
const product=require('./product');
const app=express();

//middleware parse jin json format
app.use(express.json())

app.get('/list',async(req,res)=>{
    let data=await product.find();
    res.send(data);
})

//send data in db
app.post('/create',async(req,res)=>{
    let data= new product(req.body);
    let result=await data.save();
 res.send(result)
})

app.put('/update/:_id',async (req,res)=>{
let data=await product.updateOne(
    req.params,
    {$set:req.body}
    )
    res.send(data)
})


//Delete data from api 
app.delete('/delete/:_id',async (req,res)=>{
    let data=await product.deleteOne(req.params);
    res.send(data)
})
app.listen(4040,()=>{
    console.log('server is running on 4040')
})
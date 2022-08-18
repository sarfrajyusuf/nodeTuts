const express= require('express');
require('./mongooseConfig');
const product=require('./product');
const app=express();


app.use(express.json());

app.get('/search/:key',async(req,res)=>{
    let data= await product.find({
        
        "$or":[
            {"name":{$regex:req.params.key}}
        ]
        
    })
    res.send(data)
})
app.listen(2020,()=>{
    console.log('server is running on 2020')
})
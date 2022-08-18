const express=require('express');
const { sendfile } = require('express/lib/response');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'public');
app.set('view engine','ejs');

app.get('/profile',(req,res)=>{
   const user={
      name:"sarfraj",
      email:"s@gmail.com"
   }
   res.render('view engine',{user})
})

app.get('',(req,res)=>{
   res.sendFile(`${publicPath}/index.html`)

})
app.get('*',(req,res)=>{
   res.sendFile(`${publicPath}/PageNotFound.html`)

})


app.listen(2000,()=>{
   console.log('server is running')
})
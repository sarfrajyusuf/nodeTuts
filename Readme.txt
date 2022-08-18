Express Js
Express js is the framework of nodejs.
	npm install express
make routes and run data
const express=require('express');
const res = require('express/lib/response');

const app=express();

app.get('/',(req,res)=>{
 res.send('hello siddhu');
});

app.get('/about',(req,res)=>{
    res.send('about page');
   });

   app.listen(2000);

	lets take a look (response and request) ….
   
Response when you want to throw the data on browser
And request, when you want some data from client.

	Render HTML and JSON
	const express=require('express');
	const res = require('express/lib/response');
	
	const app=express();
	
	app.get('/',(req,res)=>{
	 res.send(`
	 <div class='text-center'>
	 <input type="text" placeholder="enterName">
	 </div>`);
	});
	   app.listen(2000);

_______________________  MiddleWare  __________________________

MiddleWare is a function with the help of it we can modify response and request.
(when we can use it) :- wen can use it when we want to check the authentication.

const express = require('express');
const app=express();

const LearnMiddleware=((req,res,next)=>{
    next();
    })
    app.use(LearnMiddleware);

app.get('/',(req,res)=>{
    res.send('Welcome to middleware');
})

app.get('/user',(req,res)=>{
    res.send('welcome to user page');
})
app.listen(5000);

  _________________________ Types of Middlewalre ______________
      
      1. Application Level middleware
      2. Routes Level middleware
      3. Error-handling Middlewalre
      4. Built in Middlewalre
      5. Third Party Middlewalre


_________________________ Application Middlewalre conditional Routes______________
    >  if User age is less than 18 then call then print the message 'You are not allowed',
    and if it is greater than 18 then call the routes


const LearnMiddleware=((req,res,next)=>{
    if(!req.query.age){
     res.send('Please provide age')
    }
    else if(req.query.age<18){
        res.send('You can not allowed')
       }
    else{
        next();
    }
    })
    app.use(LearnMiddleware);

  _________________________ Rotes-Level Middlewalre ______________

  In the previous middleware, we we already see the application middleware where middleware check the authentication in all routes. In which we can put the middleware some specific pages.


  const express require('express');
  const app=express();

const reqFilter=((req,res,next)=>{
    if(!req.query.age){
        res.send('Please Enter age First')
    }
    else if(req.query.age<=18){
        res.send('You are not allowed for this page');
    }
    else{
        next();
    }
})
  app.get('/',(req,res)=>{
      res.send('Welcome to learn middleware');
  })

  app.get('/user',reqFilter,(req,res)=>{
      res.send('welcome to user page ');
  })

  app.listen(6000);
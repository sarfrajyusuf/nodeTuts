//Application Level Middleware

const express = require("express");
const app = express();

const LearnMiddleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can not allowed");
  } else {
    next();
  }
};
app.use(LearnMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to middleware");
});

app.get("/user", (req, res) => {
  res.send("welcome to user page");
});
app.listen(5000);

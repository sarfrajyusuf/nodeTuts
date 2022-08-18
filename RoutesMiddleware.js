// const express = require("express");
// const LearnMiddleware = require('./middleware/middleware')
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to middleware");
// });

// app.get("/user",LearnMiddleware, (req, res) => {
//   res.send("welcome to user page");
// });
// app.listen(5000);

// We can also do the same things like this Good coding practices
const express = require("express");
const LearnMiddleware = require("./middleware/middleware");
const app = express();
const route = express.Router();

route.use(LearnMiddleware);
app.get("/", (req, res) => {
  res.send("Welcome to middleware");
});

app.get("/user", (req, res) => {
  res.send("welcome to user page");
});
route.get("/contact", (req, res) => {
  res.send(" contact page");
});
route.get("/admin", (req, res) => {
  res.send(" Admin page");
});

app.use('/',route);
app.listen(5000);

const express = require("express");
const app = express();
module.export = app;

// BODY PARSER
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// EXPRESS SESSION
const session = require("express-session");
const sessionsObj = {
  secret: "bin organizer",
  resave: "false",
  saveUninitialized: "false",
  cookie: {}
};
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
app.use(session(sessionsObj));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("App listening on port " + port);
});



app.get('/express_backend', (req,res)=>{
  res.send({express: 'Hi This is now working!'})
})
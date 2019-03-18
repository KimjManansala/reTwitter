const express = require("express");
const session = require("express-session");
const compress = require("compression");
const path = require("path");
const bodyParser = require("body-parser");



// Note: if you host using heroku, you might find this useful
// const sslRedirect = require('heroku-ssl-redirect');

const app = express();

// Again, for if you use Heroku: enable ssl redirect
// app.use(sslRedirect());



const buildPath = path.join(__dirname, "..", "build");

app.use(express.static(buildPath));
app.use(compress());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




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










// app.use('/db', db);

app.use(require('./routes/createUser'))
app.use(require('./routes/tweet'))
app.use(require('./routes/userData'))
app.use(require('./routes/login'))

// frontend entry
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build/index.html"));
});



// Handles unknown routes
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  console.log(err);
  res.send("404: Page Not Found");
  next(err);
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});

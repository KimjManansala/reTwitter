const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
const db = require("../../models");
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/db/create/user", (req, res) => {
  let user = req.body.user;
  if (validator.validate(user.email)) {
    bcrypt
      .hash(user.password, saltRounds)
      .then(password => {
        createUser(user.username, password, user.fName, user.lName, user.email)
          .then(data => {
            if (data.created) {
              req.session.user = data.member.dataValues

              res.send({ success: true, user: data.member.dataValues });
            } else {
              res.send({ error: { username: "Username is taken" } });
            }
          })

          .catch(er => {
            console.log(er);
            res.send({ error: { register: "Error in registering" } });
          });
      })

      .catch(er => {
        console.log(er);
        res.send({ error: { register: "Error in registering" } });
      });
  } else {
    res.send({ error: { email: "Invalid Email" } });
  }
});

function createUser(userName, hash, firstName, lastName, email) {
  return new Promise((resolve, reject) => {
    db.User.findOrCreate({
      where: { username: userName },
      defaults: {
        username: userName,
        password: hash,
        firstName: firstName,
        lastname: lastName,
        email: email,
        followers: 0,
        following: 0
      }
    })
      .spread((user, created) => {
        console.log(created);
        let data = { member: user, created: created };
        resolve(data);
      })
      .catch(er => {
        console.log(
          "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
        );
        reject(er);
      });
  });
}

module.exports = router;

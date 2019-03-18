const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const bcrypt = require("bcrypt");
const db = require('../../models')


module.exports = router;



router.get('/twitter/login/', (req,res)=>{
  console.log(req.query)
  let username =  req.query.username 
  let password = req.query.password
  console.log(username, password, "Is being passed into")

    db.User
    .findOne({
      username: username
    })
    .then(user=>{
      if(user){
        bcrypt.compare(password, user.dataValues.password, (err, correct)=>{
          if(correct){
            req.session.user = user.dataValues
            res.send({user: user.dataValues})
          }else{
            res.send({error: true})
          }
        })
      }
    })


})
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
  let username =  req.body.username 
  let password = req.body.password
  if(checkInput){
    db.user
    .findOne({
      username: username
    })
    .then(user=>{
      if(user){
        bcrypt.compare(password, user.dataValues.password, (err, check) => {
          if(check){
            req.session.user = user.dataValues
            res.send({user:user.dataValues})

          }else{
            console.log('failed')
          }

      })






    

    .catch(er=>{
      console.log('There was an error')
    })

  }else{
    res.json({error: 'Cannot have missing credentials'})
  }


})



function checkInput(username, password) {
  if (username) {
    // Do nothing
  } else {
    return false
      
  }
  if (password) {
    //  DO NOTHING
  } else {
    return false
  }
  return true;
}
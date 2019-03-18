const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);


let userData = require('../database/userInfor')
module.exports = router;



router.get('/api/user', (req,res)=>{
    let userId = req.query.id
    userData.getUserData(userId)
    .then(data=>{
        res.send(data)
    })
    .catch(er=>{
        res.send({error: er})
    })


})
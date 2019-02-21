const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(
  bodyParser.urlencoded({
    extended: false
  })
);
module.exports = router;



router.post('/db/create/user', (req,res)=>{
    console.log('Hi')
    console.log(req.body)
    res.send(req.body)


})
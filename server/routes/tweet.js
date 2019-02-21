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




router.get('/api/tweets', (req,res) =>{ 
    console.log('User has called /tweets')
})



router.get('/api/tweets/')
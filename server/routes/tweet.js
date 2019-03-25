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
const tweet = require("../database/dbtweet");

router.get("/api/tweets", (req, res) => {

  let tweetsArray = [];
  // This should send the user the most recent tweets
  tweet
    .getAllTweet()
    .then(data => {

      data.forEach(tweet => {
        tweetsArray.push(tweet.dataValues);
      });
      res.send(tweetsArray);
    })
    .catch(er => {
      console.log(er)
      res.send({ error: true });
    });
});



router.post("/api/tweet", (req,res)=>{
  console.log(req.body)
  tweet.postTweet(req.body.tweet, req.body.user.user.id)
  .then(results=>{
    console.log('This is results.dataValues', results.dataValues)
    res.send({tweet: results.dataValues})
  })
  .catch(er=>{
    res.send({error: er})
  })


})
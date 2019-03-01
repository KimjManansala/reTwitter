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
      res.send({ error: true });
    });
});

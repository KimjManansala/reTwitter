const db = require("../../models");

const Sequelize = require("sequelize");

const Op = Sequelize.Op;

const tweetDb = {
  getAllTweet: getTweets
};

module.exports = tweetDb;

function getTweets() {
  return new Promise((resolve, reject) => {
    db.Tweet.findAll({
      limit: 20,
      order: [["createdAt", "DESC"]]
    })
    .then(res=>{
      resolve(res)
    })
    .catch(er=>{
      reject(er)
    })
  });
}

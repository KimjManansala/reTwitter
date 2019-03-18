const db = require("../../models");

const Sequelize = require("sequelize");

const Op = Sequelize.Op;

const tweetDb = {
  getAllTweet: getTweets,
  postTweet: postTweet
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


function postTweet(text , userID){
  return new Promise((resolve, reject) =>{
    db.Tweet
    .build(
      {
        text: text,
        like: 0,
        retweet: 0,
        long: null,
        lat: null,
        user_id: userID,
        createdAt: null,
        updatedAt: null
      }
    )
    .save()
    .then(results=>{
      console.log('This is results', results)
      resolve(results)
    })
    .catch(er=>{
      reject(er)
    })
  })
}

// text: DataTypes.STRING,
    // like: DataTypes.INTEGER,
    // retweet: DataTypes.INTEGER,
    // long: DataTypes.DOUBLE,
    // lat: DataTypes.DOUBLE
    // USERID
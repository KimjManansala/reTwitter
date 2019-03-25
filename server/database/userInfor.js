const db = require("../../models");

const Sequelize = require("sequelize");

const Op = Sequelize.Op;




const userDb = {
    getUserData: getUserData
  };
  
  module.exports = userDb;


  function getUserData(id){
      return new Promise((resolve, reject)=>{
          db.User.findOne({
              where: {
                  id: id
              }
          })
          .then(user=>{
              resolve(user)
          })
          .catch(er=>{
              reject(er)
          })
      })
  }
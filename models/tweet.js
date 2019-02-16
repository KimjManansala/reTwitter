'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    text: DataTypes.STRING,
    like: DataTypes.INTEGER,
    retweet: DataTypes.INTEGER,
    long: DataTypes.DOUBLE,
    lat: DataTypes.DOUBLE
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(Tweet, {foreignKey: 'user_id', sourceKey: 'id'})
    Tweet.belongsTo(models.User, {foreignKey: 'user_id', sourceKey: 'id'})
  };
  return Tweet;
};
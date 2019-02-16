'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.Tweet.hasMany(User, {foreignKey: 'user_id', sourceKey: 'id'})
    User.belongsTo(models.Tweet, {foreignKey: 'user_id', sourceKey: 'id'})
  };
  return User;
};
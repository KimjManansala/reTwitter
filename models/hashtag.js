'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define('Hashtag', {
    tag: DataTypes.STRING
  }, {});
  Hashtag.associate = function(models) {
    // associations can be defined here
  };
  return Hashtag;
};
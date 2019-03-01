"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tweets",
      [
        {
          text: "This will be the fith Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the Sith Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the seventh Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the I don't know Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tweets", null, {});
  }
};

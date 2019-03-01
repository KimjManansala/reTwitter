"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tweets",
      [
        {
          text: "This will be the first Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the Second Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the Third Tweet",
          like: 0,
          retweet: 0,
          long: -95.6830698,
          lat: 29.883503299999994,
          user_id: 3,
          createdAt: "NOW()",
          updatedAt: "NOW()"
        },
        {
          text: "This will be the Fourth Tweet",
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

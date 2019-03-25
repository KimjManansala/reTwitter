import React from "react";

const Tweet = ({ user, body }) => {
  console.log(user);
  return (
    <div className="columns">
      <div className="column is-three-fifths is-offset-two-fifthsr">
        <div className="tweet-user"> {user}</div>

        <div className="tweet-body">{body.text}</div>
      </div>
    </div>
  );
};

export default Tweet;

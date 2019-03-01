import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";

import User from "./User";
import TweetBody from "./TweetBody";

class TweetContainer extends Component {
  componentDidMount() {
    axios.get("/api/tweets").then(tweets => {
      this.props.getNewTweet(tweets.data);
    });
    axios.get(`/api/user/`, { params: { id: 3 } }).then(res => {
      console.log("hi this will the the results from /api/user", res);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.tweets.map((tweet, index) => (
            <React.Fragment>
              <User />
              <TweetBody />
            </React.Fragment>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userLogin.user,
  tweets: state.tweets
  // count: state.countReducer.count
});

// Allows actions to be called from the container through props
const mapDispatchToProps = dispatch => ({
  getAllTweets: tweets => dispatch({ type: " GET_TWEET", value: tweets })
  // increment: () => dispatch({type: 'INCREMENT'})
  // saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetContainer);

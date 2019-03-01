import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./Tabs.js/Tabs";
import axios from "axios";


// THIS COMONENT WILL HAVE THE LEFT SIDE HOLE USER PROFULE
// THE MIDDDLE WILL HOLD TWEETS WITH TABS AND A SECTION FOR TWEETS
// RIGHT SHOULD BE ADVERTISEMENTS

class MainFeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
    this.manageTab = this.manageTab.bind(this);
  }
  manageTab(newTab) {
    this.setState({ activeTab: newTab });
  }
  componentDidMount() {
    axios.get("/api/tweets").then(tweets => {
      this.props.getNewTweet(tweets.data)
    });
    axios.get(`/api/user/`, {params:{id: 3}}).then(res=>{
      console.log('hi this will the the results from /api/user', res)
    })
  }
  componentDidUpdate(){
    console.log('This should be props', this.props)
  }
  render() {
    return (
      <div className="main-feed-tabs">
        <section>
          <h1>Hello!</h1>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userLogin.user,
  tweets: state.tweet
  // count: state.countReducer.count
});

// Allows actions to be called from the container through props
const mapDispatchToProps = dispatch => ({
  getNewTweet : (tweet) => dispatch({type: 'UPDATE_NEW_TWEET', value: tweet})
  // increment: () => dispatch({type: 'INCREMENT'})
  // saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFeedContainer);

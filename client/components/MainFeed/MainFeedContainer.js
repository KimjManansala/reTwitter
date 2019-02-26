import React, { Component } from "react";
import { connect } from "react-redux";
import Tabs from "./Tabs.js/Tabs";

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
  render() {
    return (
      <div className='main-feed-tabs'>
        <Tabs className='tabs' method={this.manageTab} activeTab={this.state.activeTab} />
        <section>
          <h1>Hello!</h1>
        </section>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userLogin.user
  // count: state.countReducer.count
});

// Allows actions to be called from the container through props
const mapDispatchToProps = dispatch => ({
  // increment: () => dispatch({type: 'INCREMENT'})
  // saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainFeedContainer);

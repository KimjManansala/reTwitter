import React, { Component } from "react";
import { connect } from "react-redux";

class TweetContainer extends Component {
  render() {
      const {} = this.props
    return(
        <React.Fragment>




        </React.Fragment>
    )
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
)(TweetContainer);

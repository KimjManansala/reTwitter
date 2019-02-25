import React from "react";
// import { createStore } from "redux";
import { connect } from "react-redux";
// import '../../styles/Homepage.css'

import { Link } from "react-router-dom";
// For links



class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: false, user: props.user };
  }

  openLogin(evt) {
    evt.preventDefault();

    this.state.login
      ? this.setState({ login: false })
      : this.setState({ login: true });
  }
  componentDidMount(item){
    console.log(this.props.user)
  }

  render() {
    return (
      <div className="homepage-body">
        <div className="welcome-messsage">
          <h1>Welcome to my ReTwitter</h1>
          <p>
            This place is open source and a way for me to practice using
            React-Redux. If you want to know more Visit me at{" "}
            <a href="Kimjmanansala.com">my website</a> or find this repository
            on <a href="/github.com/KimjManansala/reTwitter">github </a>
          </p>
        </div>

        <button onClick={e => {
                            this.openLogin(e);
                        }}>
          Login
        </button>
        

        <h2>Not signed up? Register here</h2>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    );
  }
}

// Converts desired redux state fields to props for this container
const mapStateToProps = state => ({
  user: state.userLogin.user
  // count: state.countReducer.count
});

// Allows actions to be called from the container through props
const mapDispatchToProps = dispatch => ({
  // increment: () => dispatch({type: 'INCREMENT'})
  ceUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);

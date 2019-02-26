import React, { Component } from "react";
import Username from "./Username";
import { connect } from "react-redux";
import Password from "./Password";
import Fname from "./Fname";
import Lname from "./Lname";
import Email from "./Email";

import axios from "axios";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userErr: { show: false, message: "Invalid Username" },
      pass: "",
      passErr: { show: false, message: "Invalid Password" },
      fName: "",
      fNameErr: { show: false, message: "Invalid First Name" },
      lName: "",
      lNameErr: { show: false, message: "Invalid Last Name" },
      email: "",
      emailErr: { show: false, message: "Invalid Email" }
    };

    this.handleUserChange = this.handleUserChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleFname = this.handleFname.bind(this);
    this.handleLname = this.handleLname.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleUserChange(evt) {
    this.setState({ username: evt.target.value });
    this.setState({ userErr: { show: false } });
  }
  handlePassChange(evt) {
    this.setState({ pass: evt.target.value });
    if (evt.target.value.length < 8) {
      this.setState({ passErr: { show: true, message: "Password to short" } });
    } else {
      this.setState({ passErr: { show: false } });
    }
  }
  handleFname(evt) {
    this.setState({ fName: evt.target.value });
    this.setState({ fNameErr: { show: false } });
  }
  handleLname(evt) {
    this.setState({ lName: evt.target.value });
    this.setState({ lNameErr: { show: false } });
  }
  handleEmail(evt) {
    this.setState({ email: evt.target.value });
    this.setState({ emailErr: { show: false } });
  }
  submitCheck() {
    if (!this.state.username)
      this.setState({ userErr: { show: true, message: "Invalid Username" } });
    else this.setState({ userErr: { show: false } });
    if (!this.state.pass)
      this.setState({ passErr: { show: true, message: "Invalid Password" } });
    else this.setState({ passErr: { show: false } });
    if (this.state.pass < 8)
      this.setState({ passErr: { show: true, message: "Invalid Password" } });
    else this.setState({ passErr: { show: false } });
    if (!this.state.fName)
      this.setState({
        fNameErr: { show: true, message: "Invalid First Name" }
      });
    else this.setState({ fNameErr: { show: false } });

    if (!this.state.lName)
      this.setState({ lNameErr: { show: true, message: "Invalid Last Name" } });
    else this.setState({ lNameErr: { show: false } });
    if (!this.state.email)
      this.setState({ emailErr: { show: true, message: "Invalid Password" } });
    else this.setState({ emailErr: { show: false } });
    if (
      this.state.username &&
      this.state.pass &&
      this.state.fName &&
      this.state.lName &&
      this.state.email
    ) {
      return true;
    } else {
      return false;
    }
  }

  checkResults(message) {
    if (message.data.error) {
      if (message.data.error.username)
        this.setState({
         userErr: { show: true, message: message.data.error.username }
        });
      if (message.data.error.register)
        this.setState({
         userErr: { show: true, message: message.data.error.register }
        });
      if (message.data.error.email)
        this.setState({
          emailErr: { show: true, message: message.data.error.email }
        });
      return false;
    } else {
      return message;
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.submitCheck()) {
      let user = {
        username: this.state.username,
        password: this.state.pass,
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email
      };
      console.log("This is the user", user);
      axios
        .post("/db/create/user", { user: user })
        .then(this.checkResults)
        .then(res => {
          if (res) {
            console.log(res.data.user)
            this.props.saveUser(res.data.user);
            console.log(this.props.user);
            this.props.history.push("/mainFeed");
          } else {
            // Do nothing
          }
        })
        .catch(er => {
          console.error(er);
        });
    } else {
      // Do Nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("this is the prev state:", prevState);
    // console.log("this is the current state:", this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className="register-body">
          <form
            onSubmit={e => {
              this.handleSubmit(e);
            }}
          >
            <Username
              method={this.handleUserChange}
              username={this.state.username}
              error={this.state.userErr}
            />
            <Password
              method={this.handlePassChange}
              password={this.state.pass}
              error={this.state.passErr}
            />
            <Email
              method={this.handleEmail}
              email={this.state.email}
              error={this.state.emailErr}
            />
            <Fname
              method={this.handleFname}
              fName={this.state.fName}
              error={this.state.fNameErr}
            />
            <Lname
              method={this.handleLname}
              lName={this.state.lName}
              error={this.state.lNameErr}
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </React.Fragment>
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
  saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);

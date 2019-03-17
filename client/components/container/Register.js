import React, { Component } from "react";
import Input from "../Input";
import { connect } from "react-redux";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userErr: false,
      pass: "",
      passErr: false,
      fName: "",
      fNameErr: false,
      lName: "",
      lNameErr: false,
      email: "",
      emailErr: false
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleFName = this.handleFName.bind(this);
    this.handleLName = this.handleLName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }
  handleUserName(evt) {
    this.setState({ username: evt.target.value });
    this.setState({ userErr: false });
  }

  handlePass(evt) {
    this.setState({ pass: evt.target.value });
    this.setState({ passErr: false });
  }
  handleFName(evt) {
    this.setState({ fName: evt.target.value });
    this.setState({ fNameErr: false });
  }
  handleLName(evt) {
    this.setState({ lName: evt.target.value });
    this.setState({ lNameErr: false });
  }
  handleEmail(evt) {
    this.setState({ email: evt.target.value });
    this.setState({ emailErr: false });
  }

  submitCheck() {
    if (!this.state.username) this.setState({ userErr: true });
    else this.setState({ userErr: false });
    if (!this.state.pass) this.setState({ passErr: true });
    else this.setState({ userErr: false });
    if (this.state.pass < 8) this.setState({ passErr: true });
    else this.setState({ passErr: false });
    if(!this.state.fName) this.setState({fNameErr: true})
    else this.setState({fNameErr: false})
    if(!this.state.lName) this.setState({lNameErr: true})
    else this.setState({lNameErr: false})
    if(!this.state.email) this.setState({emailErr: true})
    else this.setState({emailErr: false})

    if(this.state.username && this.state.pass && this.state.fName && this.state.lName && this.state.email)
    return true
    else return false
  }

  checkResult(message){
    console.log(message)
    if(message.data.error){
      let error = message.data.error
      if(error.username) this.setState({userErr: true})
      if(error.register) this.setState({userErr: true})
      if(error.email) this.setState({emailErr: true})
      return false
    }else{
      return message
    }
  }


  handleSubmit(evt) {
    evt.preventDefault();
    if(this.submitCheck()){
      let user = {
        username: this.state.username,
        password: this.state.pass,
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email
      };

      axios
        .post("/db/create/user", { user: user })
        .then(this.checkResult)
        .then(res=>{
          if (res) {
            console.log(res.data.user)
            this.props.saveUser(res.data.user);
            console.log(this.props.user);
            // this.props.history.push("/mainFeed");
          }
        })
    console.log(this.state)
    }else{

    }
  }

  render() {
    return (
      <div className="register-body">
        <form
          onSubmit={e => {
            this.handleSubmit(e);
          }}
        >
          <Input
            name={"Username"}
            method={this.handleUserName}
            value={this.state.username}
            error={this.state.userErr}
            type={"text"}
          />
          <Input
            name={"Passwrd"}
            method={this.handlePass}
            value={this.state.pass}
            error={this.state.passErr}
            type={"password"}
          />
          <Input
            name={"First Name"}
            method={this.handleFName}
            value={this.state.fName}
            error={this.state.fNameErr}
            type={"text"}
          />
          <Input
            name={"Last Name"}
            method={this.handleLName}
            value={this.state.LName}
            error={this.state.LNameErr}
            type={"text"}
          />
          <Input
            name={"Email"}
            method={this.handleEmail}
            value={this.state.email}
            error={this.state.emailErr}
            type={"email"}
          />
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userLogin.user,
  tweets: state.tweet
});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

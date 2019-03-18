import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import axios from "axios";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userErr: false,
      pass: "",
      passErr: false
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleUserName(evt) {
    this.setState({ username: evt.target.value });
    this.setState({ userErr: false });
  }

  handlePass(evt) {
    this.setState({ pass: evt.target.value });
    this.setState({ passErr: false });
  }

  checkSumit() {
    if (!this.state.username) this.setState({ userErr: true });
    else this.setState({ userErr: false });
    if (!this.state.pass) this.setState({ passErr: true });
    else this.setState({ userErr: false });

    if (this.state.username && this.state.pass) return true;
    else return false;
  }

  handleSubmit(evt) {
    console.log('Hi')
    evt.preventDefault();
    if(this.checkSumit()){
      axios.get('/twitter/login/', {params:{username: this.state.username, password: this.state.pass}})
      .then(res=>{
        this.props.saveUser(res.data.user);
      })

    }else{

    }
  }

  render() {
    return (
      <div className="login-container">
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
  user: state.userLogin.user
});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch({ type: "CHANGE_USER", user: user })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

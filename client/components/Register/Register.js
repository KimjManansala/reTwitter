import React from "react";
import { connect } from "react-redux";
// import {Router, Redirect} from 'react-router'
import { Link } from "react-router-dom";



import axios from 'axios'


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      pass: "",
      fName: "",
      lName: "",
      email: "",
      isSubmit: false,
      register: false,
      usernameEr : 'This username is invalid'
    };
  }

  handleUserChange(evt){
    this.setState({ username: evt.target.value });
  }
  handlePassChange(evt){
    this.setState({ pass: evt.target.value });
  }
  handleFirstChange(evt){
    this.setState({ fName: evt.target.value });
  }
  handleLastChange(evt){
    this.setState({ lName: evt.target.value });
  }
  handleEmailChange(evt){
    this.setState({ email: evt.target.value });
  }

  checkSubmit(evt) {
    evt.preventDefault();
    this.setState({ isSubmit: true });

    // CALL TO DATABASE
    if(this.state.username && this.state.pass && this.state.fName && this.state.lName && this.state.email) {
      let user = {username: this.state.username, password: this.state.pass, fName: this.state.fName, lName: this.state.lName, email: this.state.email}

    axios.post('/db/create/user', {user: user})
      .then(res=>{
        // this.setState({isSubmit: false})
        if(res.data.error){
          if(res.data.error.email) this.setState({email: ''})
          if(res.data.error.register) this.setState({username: ''})
          if(res.data.error.username) {
            this.setState({usernameEr : res.data.error.username})
            this.setState({username: ''})
          }
          this.props.saveUser(res.user)
        }
      })
      .catch(er=>{
        console.error(er)
      })
    }else{
      console.log('false')
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('this is old state', prevState)
    // console.log("This is the new state", this.state);
    console.log(this.state.isSubmit)
  }

  render() {
    return (
      <React.Fragment>
        {this.state.register ? <Link to='/' replace/>:

        <div className="register-body">
          <form
            onSubmit={e => {
              this.checkSubmit(e);
            }}
          >

         
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                {!this.state.isSubmit ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={this.state.user}
                    onChange={e => {
                      this.handleUserChange(e);
                    }}
                  />
                ) : this.state.username ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="Username"
                    value={this.state.user}
                    onChange={e => {
                      this.handleUserChange(e);
                    }}
                  />
                ) : (
                  <React.Fragment>
                    <input
                      className="input is-danger"
                      type="text"
                      placeholder="Username"
                      value={this.state.user}
                      onChange={e => {
                        this.handleUserChange(e);
                      }}
                    />
                    <p className="help is-danger">{this.state.usernameEr}</p>
                  </React.Fragment>
                )}
              </div>
            </div>


            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                {!this.state.isSubmit ? (
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={this.state.pass}
                    onChange={e => {
                      this.handlePassChange(e);
                    }}
                  />
                ) : this.state.pass ? (
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    value={this.state.pass}
                    onChange={e => {
                      this.handlePassChange(e);
                    }}
                  />
                ) : (
                  <React.Fragment>
                    <input
                      className="input is-danger"
                      type="password"
                      placeholder="Password"
                      value={this.state.pass}
                      onChange={e => {
                        this.handlePassChange(e);
                      }}
                    />
                    <p className="help is-danger">This password is invalid</p>
                  </React.Fragment>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                {!this.state.isSubmit ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={this.state.fName}
                    onChange={e => {
                      this.handleFirstChange(e);
                    }}
                  />
                ) : this.state.fName ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={this.state.fName}
                    onChange={e => {
                      this.handleFirstChange(e);
                    }}
                  />
                ) : (
                  <React.Fragment>
                    <input
                      className="input is-danger"
                      type="text"
                      placeholder="First Name"
                      value={this.state.fName}
                      onChange={e => {
                        this.handleFirstChange(e);
                      }}
                    />
                    <p className="help is-danger">This First Name is invalid</p>
                  </React.Fragment>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                {!this.state.isSubmit ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lName}
                    onChange={e => {
                      this.handleLastChange(e);
                    }}
                  />
                ) : this.state.lName ? (
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lName}
                    onChange={e => {
                      this.handleLastChange(e);
                    }}
                  />
                ) : (
                  <React.Fragment>
                    <input
                      className="input is-danger"
                      type="text"
                      placeholder="Last Name"
                      value={this.state.lName}
                      onChange={e => {
                        this.handleLastChange(e);
                      }}
                    />
                    <p className="help is-danger">This Last Name invalid</p>
                  </React.Fragment>
                )}
              </div>
            </div>

            {!this.state.isSubmit ? (
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input "
                    type="email"
                    placeholder="Email input"
                    value={this.state.email}
                    onChange={e => {
                      this.handleEmailChange(e);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="icon is-small is-right">
                  </span>
                </div>
              </div>
            ) : this.state.email ? (
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input "
                    type="email"
                    placeholder="Email input"
                    value={this.state.email}
                    onChange={e => {
                      this.handleEmailChange(e);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="icon is-small is-right">
                  </span>
                </div>
              </div>
            ) : (
              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input
                    className="input is-danger"
                    type="email"
                    placeholder="Email input"
                    value={this.state.email}
                    onChange={e => {
                      this.handleEmailChange(e);
                    }}
                  />

                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle" />
                  </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
              </div>
            )}

            <input type="submit" value="Submit" />
          </form>
        </div>
        }
      </React.Fragment>
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
  saveUser: (user) => dispatch({ type: "CHANGE_USER", user: user })
});

// Must connect the container to the redux store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);


import Register from "./Register";

import React, { Component } from 'react'

class Homepage extends Component {
  constructor(props){
    super(props)
    this.state ={
      register: false,
      signIn: false
    }

  }

  componentDidUpdate(){
    console.log(this.state)
  }

  handleRegister(){
  let show = this.state.register? false: true
    this.setState({register: show})
    this.setState({signIn: false})
}
  hanldeSignin(){
    let show = this.state.signIn? false: true
    this.setState({signIn: show})
  this.setState({register: false})

  }

  render() {
    
    return (
      <div className="homepage-body">
      <h1>Welcome to Retwitter</h1>
      <p>Here we will have a simple twitter account</p>
      

      <a className="button is-primary"
        onClick={()=>{this.handleRegister()}}
      >Register</a>
      <div className='register'>
        {this.state.register? <Register/>: null}
      </div>
    </div>
    )
  }
}

export default Homepage
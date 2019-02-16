import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createStore } from "redux";
import { connect } from "react-redux";
import ShowComponent from "../ShowComponent";


class App extends Component {

  constructor(props) {
    super(props)

    // props.count
    // props.increment()

    this.state = {
      data: null,
      count: props.count
    };

  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;

  };

  shouldComponentUpdate(nextProps, nextState) {
    // if you return true, the component refreshes
    // if you return false, nothing happens
  }
  


  render() {

    // console.log(this.props.count)

    // this.props.increment()


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.countReducer.count
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({type: 'INCREMENT'})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

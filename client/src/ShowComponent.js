import React, { Component } from "react";
import { connect } from "react-redux";

class ShowComponent extends Component {
  componentDidMount() {
    for (let i = 0; i < 10; i++) {
      this.props.dispatch({
        type: "INCREMENT"
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(ShowComponent);

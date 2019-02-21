import React from "react";
import { connect } from "react-redux";
import Navbar from './'


class Twitter extends React.Component {
  
  
  

  render() {
    return 
    <React.Fragment>
      <Navbar/>
    <Tweet/>
    <div>{this.props.tweets}
      </div>    
    
    </React.Fragment>
  }
}

// shouldComponentUpdate(nextProps, nextState) {
//   // if you return true, the component refreshes
//   // if you return false, nothing happens
// }


const mapStateToProps = state => ({
  // count: state.countReducer.count
  // return{

  // }

});

const mapDispatchToProps = dispatch => ({
  // increment: () => dispatch({type: 'INCREMENT'})
  // return{

  // }
});

export default connect(mapStateToProps,mapDispatchToProps)(Twitter);

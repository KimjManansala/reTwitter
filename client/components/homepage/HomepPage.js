import React from "react";
// import { createStore } from "redux";
import { connect } from "react-redux";
// import '../../styles/Homepage.css'


class Homepage extends React.Component{


    render(){
        return(
            <React.Fragment>
                <div className='homepage-body'>





                </div>


            </React.Fragment>


        )
    }
}




// Converts desired redux state fields to props for this container
const mapStateToProps = state => ({
    // count: state.countReducer.count
  });
  

  // Allows actions to be called from the container through props
  const mapDispatchToProps = dispatch => ({
    // increment: () => dispatch({type: 'INCREMENT'})
  });
  

  // Must connect the container to the redux store
  export default connect(mapStateToProps,mapDispatchToProps)(Homepage);
  
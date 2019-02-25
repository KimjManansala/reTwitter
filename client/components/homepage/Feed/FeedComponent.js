import React from 'react'



class FeedComponent extends React.Component{





    render(){
        return(
            <React.Fragment>


                
            </React.Fragment>
        )
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
  )(FeedComponent);
  
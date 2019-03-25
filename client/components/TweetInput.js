import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";


class TweetInput extends Component {
    constructor(props){
        super(props)
        this.state={
            postText :'',
            numChar: 0
        }
    }

handleSubmit(evt){
    evt.preventDefault();

    axios.post('/api/tweet', {user: this.props.user, tweet: this.state.postText})
    .then(res=>{
        console.log('This should be the result from axios post', res)
    let newTweet = [{user: this.props.user, body: res.data}]
    console.log('this is newTweet', newTweet)
    return newTweet

    })
    .then(tweet=>{
        this.props.addTweet(tweet)
    })

}

handleTextChange(evt){

    if(evt.target.value.length <= 150){
    this.setState({postText: evt.target.value});
    this.setState({numChar: evt.target.value.length})
    }
}



  render() {

    let {method} = this.props


    return (
      <div className="columns">
        <div className="column is-three-fifths is-offset-two-fifthsr">
          <form onSubmit={(evt)=>{this.handleSubmit(evt)}}>
            <div className="field">
              <label className="label">Tweet <a onClick={()=>{method()}}className="delete is-small"></a>
              </label>
              <div className="control">
                <textarea 
                className="textarea" 
                placeholder="Whats on your mind?"
                value={this.state.postText}
                onChange={(evt)=>{this.handleTextChange(evt)}}
                 />
              </div>
            </div>
            <label className="label">  <h6 
            style={this.state.numChar === 150? {color:'red'}: null}
            >
                {this.state.numChar}/150 </h6> <button className="button is-link">Post!</button></label>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    user: state.userLogin


});

const mapDispatchToProps = dispatch => ({
    addTweet : (tweet) =>{ dispatch({type: 'ADD_NEW_TWEET', value: tweet})}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetInput);

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Tweet from "../Tweet";
import TweetInput from "../TweetInput";


class MainPage extends Component {

  constructor(props){
    super(props)
    this.state={
      showInput: null,
      showTweet: false
    }

    this.closeInput = this.closeInput.bind(this)
  }

  closeInput(evt){

    this.setState({showInput: false})
  }

  inputButton(){
    let show = this.state.showInput? false: true;

    this.setState({showInput: show})
  }




  

  componentDidMount(){
    this.setState({showTweet: false})
    console.log(this.props.tweet)
    axios.get('/api/tweets')
    .then(wholeTweet=>{
      console.log('this is what is being passed into ipdatetWEET', wholeTweet.data, typeof wholeTweet)
      this.props.updateTweet(wholeTweet.data)
      this.setState({showTweet: true})
    })


  }
  componentDidUpdate(){
  }


  render() {
    console.log('hi', this.props.tweet)
    return (
      <div className='main-page'>
        
      {this.state.showInput? null: <button 
      onClick={() => {
            this.inputButton();
          }}
      className="button is-link">Create a Post!</button>}

    {this.state.showInput? <TweetInput method={this.closeInput}/>: null}
          {this.state.showTweet? this.props.tweet.map((tweetInfo, index)=>{
            return <Tweet key={index} user={tweetInfo.User.username} body={tweetInfo}/>
          }): null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tweet: state.tweet
});

const mapDispatchToProps = dispatch => ({
  updateTweet: (tweets) => dispatch({type: 'GET_FIRST_TWEET' , value: tweets})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);

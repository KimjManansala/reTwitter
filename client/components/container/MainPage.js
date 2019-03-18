import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Tweet from "../Tweet";
import TweetInput from "../TweetInput";


class MainPage extends Component {

  constructor(props){
    super(props)
    this.state={
      showInput: null
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

  componentDidUpdate(){

  }


  findTweetUser(tweet){
    let tweets= []
    tweet.data.forEach(tweetData=>{
      axios.get('/api/user/', {params:{id: tweetData.user_id}})
      .then(data=>{
        tweets.push({user: data.data, body: tweetData})
      })
      .catch(er=>{console.error('THIS IS ERROR', er)})
    })
    return tweets
  }

  componentDidMount(){
    axios.get('/api/tweets')
    .then(this.findTweetUser)
    .then(wholeTweet=>{
      this.props.updateTweet(wholeTweet)
    })
  }



  render() {

    return (
      <div className='main-page'>
        
      {this.state.showInput? null: <button 
      onClick={() => {
            this.inputButton();
          }}
      className="button is-link">Create a Post!</button>}

    {this.state.showInput? <TweetInput method={this.closeInput}/>: null}



        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
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

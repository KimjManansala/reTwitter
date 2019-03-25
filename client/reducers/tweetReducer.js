


function deepCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }


let test = [{user: null}, {body: null}]






const tweetReducer = ( state = [],action) => {

    let newState = deepCopy(state)

    switch(action.type){

        case 'GET_FIRST_TWEET':
            
            return action.value.concat(state.slice())
        //return addTweet(newState, action.value)


        case 'ADD_NEW_TWEET':
            return newState

        default:
            return state
    }




}

export default tweetReducer
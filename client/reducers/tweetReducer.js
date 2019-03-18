


function deepCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
const tweetReducer = ( state = [],action) => {

    let newState = deepCopy(state)

    switch(action.type){

        case 'GET_FIRST_TWEET':

        newState = action.value
        return newState

        default:
        return state
    }




}

export default tweetReducer
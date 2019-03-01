



const tweetReducer = ( state = [],action) => {

    switch(action.type){

        case 'UPDATE_NEW_TWEET':
        let newState = [...state]
        return action.value.concat(newState)
        break;

        default:
        return state
    }




}

export default tweetReducer
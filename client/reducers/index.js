import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import sampleReducer from './sampleReducer';
import userLogin from './userloginReducer'
import tweet from './tweetReducer'

const rootReducer = combineReducers({
	userLogin : userLogin,
	tweet : tweet
	// add all your reducers here 
});

export default rootReducer;
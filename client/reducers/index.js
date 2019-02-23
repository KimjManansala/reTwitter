import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import sampleReducer from './sampleReducer';
import userLogin from './userloginReducer'

const rootReducer = combineReducers({
	userLogin : userLogin
	// add all your reducers here 
});

export default rootReducer;
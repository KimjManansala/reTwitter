import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
	sampleReducer: sampleReducer 
	// add all your reducers here 
});

export default rootReducer;
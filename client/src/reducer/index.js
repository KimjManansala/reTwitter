import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// Reducers
import countReducer from './countReducer'

const rootReducer = combineReducers({
    countReducer: countReducer
});
// fdsjlfkjsdkfsldkjklfsdf test
export default rootReducer;
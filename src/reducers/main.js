import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

const rootReducer = combineReducers({ currentVideo, videoList });

// rootReducer is suppose to "return" the value that comes from combineReducer
// which will take the state and action and pass it between all the 
// reducers

// const rootReducer = () => combineReducers({ currentVideo, videoList });
// need to invoke this one in order to get what we need

export default rootReducer;

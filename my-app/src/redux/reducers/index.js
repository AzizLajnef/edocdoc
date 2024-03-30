import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';
// Import other reducers here if you have any

const rootReducer = combineReducers({
  doctor: doctorReducer,
});

export default rootReducer;

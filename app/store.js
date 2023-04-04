import { combineReducers } from 'redux';
import counterReducer from './Counter/reducer/reducers';

const rootReducer = combineReducers({
  count: counterReducer
});

export default rootReducer;

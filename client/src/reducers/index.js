import { combineReducers } from 'redux';
import common from './commonReducer';
import main from './mainReducer';
import init from './initializationReducer';

export default combineReducers({
  common,
  main,
  init,
});

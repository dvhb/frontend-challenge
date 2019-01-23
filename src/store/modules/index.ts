import { combineReducers } from 'redux';
import { intlReducer } from './intl';

const rootReducer = combineReducers({
  intlReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import itemsByCtg from './itemsByCategory';
import itemsByKeywords from './itemsByKeywords';

const reducers = combineReducers({
    itemsByCtg,
    itemsByKeywords
  });
  
  export default reducers;
  
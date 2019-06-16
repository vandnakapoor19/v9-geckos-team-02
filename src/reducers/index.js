import { combineReducers } from 'redux';
import itemsByCtg from './itemsByCategory';
import itemsByKeywords from './itemsByKeywords';
import page from './page';

const reducers = combineReducers({
    itemsByCtg,
    itemsByKeywords,
    page
  });
  
  export default reducers;
  
import { combineReducers } from 'redux';
import items from './items';
// import itemsByKeywords from './itemsByKeywords';
// import page from './page';

const reducers = combineReducers({
    items,
    // itemsByKeywords,
    // page
  });
  
  export default reducers;
  
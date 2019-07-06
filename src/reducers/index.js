import { combineReducers } from 'redux';
import items from './items';
import cart from './cart';
import checkout from './checkout';

const reducers = combineReducers({
  items,
  cart,
  checkout
});

export default reducers;

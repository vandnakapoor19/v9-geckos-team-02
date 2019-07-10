import React from 'react';
import CurrentCartContainer from '../../components/containers/CurrentCartContainer';

import CartFlow from '../../components/containers/cartFlow';
import CurrentOrderSummary from '../../components/containers/CurrentOrderSummary';


const Cart = () => (
  <div className="container">

    <div className="container m-5">
      <CartFlow />
      <br />
    </div>

    <div className="row">
      <br />

      <div className="col-md-8 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
        <CurrentCartContainer />
      </div>

      <div className='col-md-4 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6'>
       <CurrentOrderSummary /> 
        </div>



    </div>
  </div>
);

export default Cart;
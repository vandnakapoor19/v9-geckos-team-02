import React from 'react';
import CheckoutFlow from '../../components/containers/checkoutFlow';
import CurrentOrderSummary from '../../components/containers/CurrentOrderSummary';
import CheckoutForm from '../../components/containers/checkout/form';

const Checkout = () => (
  <div className="container">

    <div className="container m-5">
      <CheckoutFlow />
      <br />
    </div>

    <div className="row justify-content-between">
      <br />
      <div className="col-md-7 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
        <CheckoutForm />
      </div>

      <div className='col-md-4 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6'>
        <div className="panel-body"><CurrentOrderSummary /></div>
      </div>

    </div>

  </div>
);

export default Checkout;
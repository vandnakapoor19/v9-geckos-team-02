import React, {Component} from 'react';
import AddressForm from '../../UI/checkout/address';
import CreditCartForm from '../../UI/checkout/creditCart';

class CheckoutForm extends Component {

    render () {
        return (
            <div className='mb-5'>
                <AddressForm />
                <CreditCartForm />
            </div>
        )
    }
}

export default CheckoutForm;
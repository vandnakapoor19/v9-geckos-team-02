import React, { Component } from 'react';
import AddressForm from '../../UI/checkout/address';
import CreditCartForm from '../../UI/checkout/creditCart';
import Button from '../../UI/button';

import FormValidator from './formValidator';

import { checkout } from '../../../actions/checkout';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class CheckoutForm extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: 'first_name',
        method: 'isEmpty',
        validWhen: false,
        msg: 'First name is required.'
      },
      {
        field: 'last_name',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Last name is required.'
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Please provide a phone number.'
      },
      {
        field: 'phone',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        msg: 'That is not a valid phone number.'
      },
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Email is required.'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        msg: 'That is not a valid email.'
      },
      {
        field: 'address',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Address is required.'
      },
      {
        field: 'city',
        method: 'isEmpty',
        validWhen: false,
        msg: 'City is required.'
      },
      {
        field: 'state',
        method: 'isEmpty',
        validWhen: false,
        msg: 'State is required.'
      },
      {
        field: 'zip',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Zip code is required.'
      },
      {
        field: 'zip',
        method: 'isNumeric',
        validWhen: true,
        msg: 'That is not a valid Zip code.'
      },
      {
        field: 'name_on_card',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Name is required.'
      },
      {
        field: 'card_number',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Card Number is required.'
      },
      {
        field: 'card_number',
        method: 'isNumeric',
        validWhen: true,
        msg: 'That is not a valid Card Number.'
      },
      {
        field: 'card_CVV',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Card CVV is required.'
      },
      {
        field: 'card_CVV',
        method: 'isNumeric',
        validWhen: true,
        msg: 'That is not a valid Card CVV.'
      },
      {
        field: 'exp_month',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Expiration Month is required.'
      },
      {
        field: 'exp_year',
        method: 'isEmpty',
        validWhen: false,
        msg: 'Expiration Year is required.'
      },
      {
        field: 'exp_year',
        method: 'matches',
        args: [/^(?:20(?:19|[2-9][0-9]))$/],
        validWhen: true,
        msg: 'That is not a valid Expiration Year.'
      }
    ]);

    this.state = {
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      name_on_card: '',
      card_number: '',
      card_CVV: '',
      card_type: 'Visa',
      exp_month: '',
      exp_year: '',
      validation: this.validator.valid(),
      button_name: "Place Order"
    }

    this.submitted = false;
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFormSumbit = e => {
    e.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({ validation });
    this.submitted = true;
    const { first_name, last_name, phone, email, address, city, state, zip, name_on_card, card_number, card_type, card_CVV, exp_month, exp_year } = this.state;
    const checkoutData = { first_name, last_name, phone, email, address, city, state, zip, name_on_card, card_number, card_type, card_CVV, exp_month, exp_year };
    if (validation.isValid) {
      this.props.dispatch(checkout(checkoutData));
      this.props.history.push({
        pathname: "/confirmation"
      })
    }
  }

  render() {
    let validation = this.submitted ?
      this.validator.validate(this.state) :
      this.state.validation;
    return (
      <div className='mb-5'>
        <AddressForm
          inputChange={this.handleInputChange}
          validation={validation}
        />
        <CreditCartForm
          inputChange={this.handleInputChange}
          validation={validation}
        />
        <br />
        <Button click={this.handleFormSumbit} name={this.state.button_name} />
      </div>
    )
  }
}

export default withRouter(connect()(CheckoutForm));
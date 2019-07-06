import React from 'react';

const CreditCartForm = ({ inputChange }) => (
    <div className='panel panel-info'>
        <div className='panel-heading'><span><i className="fas fa-lock mx-2"></i></span>Secure Payment</div>

        <div className='panel-body my-3'>

            <div className="form-group is-invalid">
                <label for="name-oncard">Name on card</label>
                <input type="text" className="form-control" name='name_on_card' onChange={inputChange} />
            </div>

            <div className="form-group">
                <label for="card-number">Card Number</label>
                <input type="number" className="form-control" name='card_number' onChange={inputChange} />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="card-type">Card Type</label>
                    <select className="form-control" name='card_type' onChange={inputChange}>
                        <option selected>Visa</option>
                        <option>Visa</option>
                        <option>MasterCard</option>
                        <option>American Express</option>
                        <option>Discover</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                    <label>Card CVV</label>
                    <input type="number" className="form-control" name='card_CVV' onChange={inputChange} />
                </div>
            </div>

            <div className="form-group ">
                <div>
                    <strong>Expiration Date</strong>
                </div>
                <div className="form-row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <select class="form-control" name='exp_month' onChange={inputChange}>
                            <option value="">Month</option>
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <input type="number" className="form-control" placeholder="Year" name='exp_year' onChange={inputChange} />
                    </div>
                </div>
            </div>

        </div>
    </div>
)

export default CreditCartForm;
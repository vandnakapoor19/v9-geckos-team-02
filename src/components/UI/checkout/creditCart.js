import React from 'react';

const CreditCartForm = () => (
    <div className='panel panel-info'>
        <div className='panel-heading'><span><i className="fas fa-lock mx-2"></i></span>Secure Payment</div>

        <div className='panel-body my-3'>

        <div className="form-group">
                <label for="name-oncard">Name on card</label>
                <input type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label for="card-number">Card Number</label>
                <input type="number" className="form-control" />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="card-type">Card Type</label>
                    <select className="form-control">
                        <option selected>Visa</option>
                        <option>Visa</option>
                        <option>MasterCard</option>
                        <option>American Express</option>
                        <option>Discover</option>
                    </select>
                </div>

                <div className="form-group col-md-6">
                    <label>Card CVV</label>
                    <input type="number" className="form-control" />
                </div>
            </div>
 
                <div className="form-group ">
                    <div>
                        <strong>Expiration Date</strong>
                    </div>
                    <div className="form-row">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <select class="form-control" name="">
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

                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <input type="number" className="form-control" placeholder="Year" />
                    </div>
                </div>
            </div>
       
        </div>
    </div>
)

export default CreditCartForm;
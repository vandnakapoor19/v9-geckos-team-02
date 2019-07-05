import React from 'react';
import './checkout.css'

const AddressForm = () => (
    <div className='panel panel-info'>
        <div className='panel-heading'><span><i class="fas fa-map-marker-alt mx-2"></i></span>Shipping Address</div>

        <div className='panel-body my-3'>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                </div>

                <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Phone Number</label>
                    <input type="number" className="form-control" />
                </div>

                <div className="form-group col-md-6">
                    <label>Email Address</label>
                    <input type="email" className="form-control" />
                </div>
            </div>

            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" />
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>Alabama - AL</option>
                        <option>Arkansas - AR</option>
                        <option>California - CA</option>
                        <option>Colorado - CO</option>
                        <option>Delaware - DE</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>

        </div>
    </div>
)

export default AddressForm;
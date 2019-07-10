import React from 'react';
import './checkout.css'

const AddressForm = ({ inputChange, validation }) => (
    <div className='panel panel-info'>
        <div className='panel-heading'><span><i class="fas fa-map-marker-alt mx-2"></i></span>Shipping Address</div>

        <div className='panel-body my-3'>

            <div className="form-row">
                <div 
                    className='form-group col-md-6'
                >
                    <label>First Name</label>
                    <input type="text" 
                        className={`form-control ${validation.first_name.isInvalid&&'is-invalid'}`} 
                        name='first_name' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.first_name.msg}</span>
                </div>

                <div className='form-group col-md-6'>
                    <label>Last Name</label>
                    <input type="text" 
                        className={`form-control ${validation.last_name.isInvalid&&'is-invalid'}`} 
                        name='last_name' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.last_name.msg}</span>
                </div>
            </div>

            <div className="form-row">
                <div className='form-group col-md-6'>
                    <label>Phone Number</label>
                    <input type="number" 
                        className={`form-control ${validation.phone.isInvalid&&'is-invalid'}`} 
                        name='phone' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.phone.msg}</span>
                </div>

                <div className='form-group col-md-6'>
                    <label>Email Address</label>
                    <input type="email" 
                        className={`form-control ${validation.email.isInvalid&&'is-invalid'}`} 
                        name='email' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.email.msg}</span>
                </div>
            </div>

            <div className='form-group'>
                <label for="inputAddress">Address</label>
                <input type="text" 
                    className={`form-control ${validation.address.isInvalid&&'is-invalid'}`} 
                    name='address' 
                    onChange={inputChange} 
                />
                <span className="invalid-feedback">{validation.address.msg}</span>
            </div>

            <div className="form-row">
                <div className='form-group col-md-6'>
                    <label for="inputCity">City</label>
                    <input type="text" 
                        className={`form-control ${validation.city.isInvalid&&'is-invalid'}`} 
                        name='city' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.city.msg}</span>
                </div>
                <div className='form-group col-md-4'>
                    <label for="inputState">State</label>
                    <select id="inputState" 
                        className={`form-control ${validation.state.isInvalid&&'is-invalid'}`} 
                        name='state' 
                        onChange={inputChange}
                    >
                        <option selected>Choose...</option>
                        <option>Alabama - AL</option>
                        <option>Arkansas - AR</option>
                        <option>California - CA</option>
                        <option>Colorado - CO</option>
                        <option>Delaware - DE</option>
                    </select>
                </div>
                <div className={`form-group col-md-2`}>
                    <label for="inputZip">Zip</label>
                    <input type="text" 
                        className={`form-control ${validation.zip.isInvalid&&'is-invalid'}`}
                        name='zip' 
                        onChange={inputChange} 
                    />
                    <span className="invalid-feedback">{validation.zip.msg}</span>
                </div>
            </div>

        </div>
    </div>
)

export default AddressForm;
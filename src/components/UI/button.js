import React from 'react';

const Button = ({submit}) => (
    <button 
        className="btn btn-checkout my-5"
        onClick={submit}
    >Place Order</button>
)

export default Button;

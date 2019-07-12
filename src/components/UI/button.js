import React from 'react';

const Button = ({ click, name }) => (
    <button
        className="btn btn-checkout my-5"
        onClick={click}
    >{name}</button>
)

export default Button;

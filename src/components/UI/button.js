import React from 'react';

const Button = ({ click, name }) => (
    <div className="mb-4">
    <button
        className="btn my-5 px-5"
        onClick={click}
    >{name}</button>
    </div>
)

export default Button;

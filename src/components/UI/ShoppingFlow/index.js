import React from 'react';
import "./flow.css";

const Flow = ({isCartActive,isCOActive,isTYActive}) => (
    <div className="row">
        <div className="col-xs-12 col-sm-4">
            <div className={`step ${isCartActive}`}>
                Cart
                <div className="hidden-xs caret right"></div>
            </div>
        </div>

        <div className="col-xs-12 col-sm-4">
            <div className={`step ${isCOActive}`}>
                Checkout
                <div className="hidden-xs caret right"></div>
            </div>
        </div>

        <div className="col-xs-12 col-sm-4">
            <div className={`step ${isTYActive}`}>
                Thank You
            </div>
        </div>
    </div>
)

export default Flow;
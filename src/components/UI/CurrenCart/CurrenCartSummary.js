import React from 'react';
import "./currentCart.css";

const cartSummary = ({ items }) => (  
    <div className="panel panel-default">
    <div className="panel-body">
            <div className="card-body">
            <div>
                <hr />
                <div className="row row justify-content-between">
                <div className="col-xs-3 col-md-3 my-1">
                    Quality
                </div>
                {items.reduce((acc, cur) => acc + cur.quality, 0)}
               </div>
            </div>
            <div>
                <hr />
                <div className="row row justify-content-between">
                    <div className="col-xs-3 col-md-3 my-1">
                        Total
                    </div>
                    {items.reduce((acc, cur) => (acc + (cur.quality*cur.price)), 0)}
                </div>
            </div>
                <hr />
            <button className="btn-checkout">Checkout</button>
            </div>
        </div>
 
   </div>
)

export default cartSummary;
import React from 'react';
import moment from 'moment';

const Confirmation = ({shippingInfo}) => (
    <div className="panel panel-default">
        <div>
            <h4>Confirmation</h4>
            <p>Order Date: {moment(new Date()).format("MMM Do YY")}</p>
            <p>Order Number: {Math.floor(Math.random()*10000000)}</p>
            <br />
        </div>

        <div>
            <h4>Ship To</h4>
            <p>{`${shippingInfo.first_name} ${shippingInfo.last_name}`}</p>
            <p>{shippingInfo.address}</p>
            <p>{shippingInfo.city+','+shippingInfo.state+' '+shippingInfo.zip}</p>
            <p>{shippingInfo.email}</p>
            <br />
            <p><strong>Shipping Method: </strong>UPS Ground Shipping</p>
        </div>
    </div>
)

export default Confirmation;
import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';


const Confirmation = ({ shippingInfo }) => (
    <div className="panel panel-default">
        <div>
            <div className="font-weight-bold">Thank you for your order.</div>
            <div>If you have any questions about your order, please <NavLink to="/contact"><u>Contact us</u></NavLink>.</div>
            <br />
            <h4>Confirmation</h4>
            <div>Order Date: {moment(new Date()).format("MMM Do YY")}</div>
            <div>Order Number: {Math.floor(Math.random() * 10000000)}</div>
            <br />
        </div>

        <div>
            <h4>Ship To</h4>
            <div>{`${shippingInfo.first_name} ${shippingInfo.last_name}`}</div>
            <div>{shippingInfo.address}</div>
            <div>{shippingInfo.city + ',' + shippingInfo.state + ' ' + shippingInfo.zip}</div>
            <div>{shippingInfo.email}</div>
            <br />
            <div><strong>Shipping Method: </strong>UPS Ground Shipping</div>
            <br />
        </div>
    </div>
)

export default Confirmation;
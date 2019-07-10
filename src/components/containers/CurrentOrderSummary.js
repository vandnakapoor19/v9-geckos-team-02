import React from 'react'
import CurrenCartSummary from '../UI/OrderSummery';

import {connect} from 'react-redux';

const currentOrderSummary = props => (
    
    <div className="panel panel-default">
        <div className="panel-heading text-center">
        <h4>Order Summary</h4>
        </div>
        <div className="panel-body">
            <CurrenCartSummary items={props.items}/>
        </div>
    </div>
)
//this.props.dispatch();
const mapStateToProp=state=>{
    return {
        items: state.cart
    }
}

export default connect(mapStateToProp)(currentOrderSummary);
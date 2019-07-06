import React from 'react'
import CurrenCartSummary from '../UI/CurrenCart/CurrenCartSummary';

import {connect} from 'react-redux';

const currentOrderSummary = props => (
    
    <div>
        <CurrenCartSummary items={props.items}/>
    </div>
)
//this.props.dispatch();
const mapStateToProp=state=>{
    return {
        items: state.cart
    }
}

export default connect(mapStateToProp)(currentOrderSummary);
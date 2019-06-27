import React from 'react';
import CurrentCart from '../UI/CurrenCart';

import {connect} from 'react-redux';

const CurrentCartContainer = props => (
    <div>
        <CurrentCart items={props.items}/>
    </div>
)

const mapStateToProps = state => {
    return {
        items: state.cart
    }
}
export default connect(mapStateToProps)(CurrentCartContainer);
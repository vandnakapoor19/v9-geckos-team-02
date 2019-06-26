import React from 'react';
import { connect } from 'react-redux';
import Header from '../UI/Header';

const HeaderContainer = props => (
    < Header total={props.cartTotal} />
)

const mapStateToProps = state => {
    return {
        cartTotal: state.cart.reduce((acc, cur) => acc + cur.quality, 0)
    }
}

export default connect(mapStateToProps)(HeaderContainer)
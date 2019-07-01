import React, { Component } from 'react';
import Flow from '../UI/ShoppingFlow';

class CartFlow extends Component {
    state = {
        isCartActive: 'active',
        isCOActive: false,
        isTYActive: false
    }

    render() {
        const { isCartActive, isCOActive, isTYActive } = this.state;
        return (
            <Flow
                isCartActive={isCartActive}
                isCOActive={isCOActive}
                isTYActive={isTYActive}
            />
        )
    }
}

export default CartFlow;
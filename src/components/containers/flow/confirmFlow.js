import React, { Component } from 'react';
import Flow from '../../UI/ShoppingFlow';

class CheckoutFlow extends Component {
    state = {
        isCartActive: 'active',
        isCOActive: 'active',
        isTYActive: 'active'
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

export default CheckoutFlow;
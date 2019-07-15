import React, { Component } from 'react';
import Flow from '../../UI/ShoppingFlow';

class ConfirmFlow extends Component {
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

export default ConfirmFlow;
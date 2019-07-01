import React, { Component } from 'react';
import ModalCart from '../UI/modalCart';
import { withRouter } from 'react-router-dom';

class AddSuccessToCart extends Component {

    viewCart = async () => {
        await this.props.toggleModal();
        this.props.history.push('/cart')

    }
    render() {
        const { details, quality, showModal, toggleModal } = this.props;
        return (
            < ModalCart
                details={details}
                quality={quality}
                showModal={showModal}
                toggleModal={toggleModal}
                viewCart={this.viewCart}
            />
        )
    }
}

export default withRouter(AddSuccessToCart);
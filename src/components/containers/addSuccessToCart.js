import React, { Component } from 'react';
import ModalCart from '../UI/modalCart';
import { withRouter } from 'react-router-dom';

class AddSuccessToCart extends Component {

    viewCart = async () => {
        await this.props.toggleModal();
        console.log(this.props.showModal)
        this.props.history.push('/cart')

    }
    render() {
        // console.log(this.props.showModal)
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
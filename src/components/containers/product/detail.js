import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/addToCart';
import AddSuccessToCart from '../addSuccessToCart';

import "./detail.css";

class ProductDetail extends Component {
    state = {
        quality: 1,
        showModal: false
    }

    increaseQuality = () => {
        const { quality } = this.state;
        this.setState({
            quality: quality + 1
        })
    }

    decreaseQuality = () => {
        const { quality } = this.state;
        this.setState({
            quality: quality === 1 ? 1 : quality - 1
        })
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    addItemtoCart = quality => {
        const info = {
            id: this.props.details.itemId,
            img: this.props.details.galleryURL,
            title: this.props.details.title,
            price: this.props.details.sellingStatus[0].currentPrice[0].__value__
        }
        this.props.dispatch(addToCart(info, quality));
        this.toggleModal();
    }

    render() {
        const { quality, showModal } = this.state;
        const { title, condition, sellingStatus } = this.props.details;
        return (
            this.props.details &&
            <div className="details">

                <h3 className="product-title text-left">{title}</h3>

                <div class="rating">
                    <div className="stars">
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                    </div>
                    <span class="review-no">41 reviews</span>
                </div>

                {condition && <p className="detail">Condition: <strong>{condition[0].conditionDisplayName}</strong></p>}

                <h5 class="price">Price: <span>USD ${sellingStatus[0].currentPrice[0].__value__}</span></h5>

                <div className="section">
                    <h6 className="title-attr"><small>Quality</small></h6>

                    <div>
                        <button
                            className="btn-minus"
                            onClick={this.increaseQuality}
                        >+</button>
                        <input value={quality} />
                        <button
                            className="btn-plus"
                            onClick={this.decreaseQuality}
                        >-</button>
                    </div>
                </div>
                <br />
                <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#modalCart"
                    onClick={() => this.addItemtoCart(quality)}
                >Add to Cart</button>
                <AddSuccessToCart
                    details={this.props.details}
                    quality={quality}
                    showModal={showModal}
                    toggleModal={this.toggleModal}
                />



                <div className="section" >
                    <div className="row">
                        <div className="col-sm-6">
                            <p>Shipping: <strong>Free</strong> Standard Shipping</p>
                        </div>
                        <div className="col-sm-5">
                            <p>Returns: 30 day returns.</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }


}

const mapStateToProps = state => {
    return {
        details: state.items.itemDetail[0]
    }
}

export default connect(mapStateToProps)(ProductDetail)
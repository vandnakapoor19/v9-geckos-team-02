import React from 'react';
// import detail from '../containers/product/detail';

const ModalCart = ({ details, quality, showModal, toggleModal, viewCart }) => (
    <div
        className="modal fade"
        id="modalCart"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalCart"
        aria-hidden="true"
        data-dismiss="modal"
        style={{ display: showModal ? "block" : "none" }}
    >
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title" id="ModalLabel">
                        ADDED TO CART
                    </h4>
                    <button
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => toggleModal()}
                    >
                        <span aria-hidden="true">x</span>
                    </button>
                </div>

                <div className="modal-body">
                    <div className="row row justify-content-between">
                        <div className="col-xs-3 col-md-3 my-1">
                            <img className="img-responsive imgSize" src={details.galleryURL} alt={details.title} />
                        </div>
                        <div className="col-xs-7 col-md-7 my-1">
                            <h5 className="product-name">{details.title}</h5>
                            <div>
                                <h6><strong>USD {details.sellingStatus[0].currentPrice[0].__value__}</strong></h6>
                                <h6>x {quality}</h6>
                            </div>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={viewCart}
                        >View Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ModalCart;
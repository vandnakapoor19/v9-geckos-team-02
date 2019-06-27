import React from 'react';
import "./currentCart.css";

const CurrentCart = ({ items }) => (
    <div className="panel panel-default">
        <div className="panel-heading text-center">
            <h4>Current Cart</h4>
        </div>
        <div className="panel-body">
            <div className="card-body">
                {items.map((item) =>
                    <div>
                        <hr />
                        <div className="row row justify-content-between">

                            <div className="col-xs-3 col-md-3 my-1">
                                <img className="img-responsive imgSize" src={item.img} alt={item.id} />
                            </div>

                            <div className="col-xs-7 col-md-7 my-1">
                                <h5 className="product-name">{item.title}</h5>
                                <h6><strong>USD {item.price}</strong></h6>
                                <button>-</button><span> {item.quality} </span><button>+</button>
                            </div>

                            <div className="col-xs-1 col-md-1 my-1">
                                <div><i className="fa fa-trash" aria-hidden="true" /></div>
                            </div>
                        </div>
                    </div>
                )}
                <hr />
            </div>
        </div>
    </div>
)

export default CurrentCart;
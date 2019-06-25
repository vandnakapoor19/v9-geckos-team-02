import React from 'react';
import { connect } from 'react-redux';

import "./detail.css";

const ProductDetail = props => {
    console.log(props)
    return (
        props.details &&
        <div className="details">

            <h3 className="product-title text-left">{props.details.title}</h3>

            <div class="rating">
                <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <span class="review-no">41 reviews</span>
            </div>
           
                {props.details.condition && <p className="detail">Condition: <strong>{props.details.condition[0].conditionDisplayName}</strong></p>}

                <h5 class="price">Price: <span>USD ${props.details.sellingStatus[0].currentPrice[0].__value__}</span></h5>
         
            {/* <dl class="param param-inline">
                <dt>Quantity: </dt>
                <dd>
                    <select className="form-control form-control-sm" >
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                        <option> 4 </option>
                        <option> 5 </option>
                    </select>
                </dd>
            </dl> */}
             
                <h6 className="title-attr"><small>Quality</small></h6>
                {/* <div className="quality">
                <span>Quality: </span> */}
                <div>
                    <button className="btn-minus">+</button>
                    <input value="1" />
                    <button className="btn-plus">-</button>
                </div>

            <div className="col-sm-6" >
                <button className="btn btn-success">Add to Cart</button>
            </div>  
          

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

const mapStateToProps = state => {
    console.log(state.items.itemDetail && state.items.itemDetail[0].title)
    return {
        details: state.items.itemDetail[0]
    }
}

export default connect(mapStateToProps)(ProductDetail)
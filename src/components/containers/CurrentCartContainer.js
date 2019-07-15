import React, {Component} from 'react';
import CurrentCart from '../UI/CurrenCart';
import Button from '../UI/button';

import {connect} from 'react-redux';
import * as actions from '../../actions/addToCart';

import { withRouter } from "react-router-dom";

class CurrentCartContainer extends Component{
    state = {
        button_name: 'Place Order'
    }

    addClick = id => {
        this.props.dispatch(actions.addQuality(id))
    }

    reduceClick = id => {
        this.props.dispatch(actions.reduceQuality(id))
    }

    deleteClick = id => {
        this.props.dispatch(actions.deleteItem(id))
    }

    buttonClick = () => {
        this.props.history.push({
            pathname: "/checkout"
        })
    }

    render (){
        return (
            <div>
            <CurrentCart 
                items={this.props.items}
                addClick={this.addClick}
                reduceClick={this.reduceClick}
                deleteClick={this.deleteClick}
            />
            <Button 
                name={this.state.button_name}
                click={this.buttonClick}
                />
        </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        items: state.cart
    }
}
export default withRouter(connect(mapStateToProps)(CurrentCartContainer));
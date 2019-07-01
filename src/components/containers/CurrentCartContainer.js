import React, {Component} from 'react';
import CurrentCart from '../UI/CurrenCart';

import {connect} from 'react-redux';
import * as actions from '../../actions/addToCart'

class CurrentCartContainer extends Component{

    addClick = id => {
        this.props.dispatch(actions.addQuality(id))
    }

    reduceClick = id => {
        this.props.dispatch(actions.reduceQuality(id))
    }

    deleteClick = id => {
        this.props.dispatch(actions.deleteItem(id))
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
        </div>
        )
    }  
}

const mapStateToProps = state => {
    return {
        items: state.cart
    }
}
export default connect(mapStateToProps)(CurrentCartContainer);
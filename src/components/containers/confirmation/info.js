import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from '../../UI/button';
import Confirmation from '../../UI/confirmation';

import { withRouter } from 'react-router-dom';

class ConfirmInfo extends Component {
    state = {
        button_name: 'Continue Shopping'
    }

    clickToHomepage = () => {
        //can I use redirect to here?
        this.props.history.push({
            pathname: "/"
        })
    }

    render () {
        return (
            <div>   
                <Confirmation 
                    shippingInfo={this.props.shippingInfo}
                />
                <Button 
                    name={this.state.button_name}
                    click={this.clickToHomepage}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        shippingInfo: state.checkout
    }
}

export default withRouter(connect(mapStateToProps)(ConfirmInfo));
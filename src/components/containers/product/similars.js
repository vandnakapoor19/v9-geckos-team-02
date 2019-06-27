import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItem } from '../../../actions/getItem';

import List from '../../UI/shopping-list';

import { withRouter } from 'react-router-dom';

class Similars extends Component {

    helper = (arr, id) => {
        let res = [];
        arr.forEach((pdt, index) => {
            if (pdt.itemId[0] === id[0]) {
                if (index > 19) {
                    res = arr.slice(index - 4, index);
                } else {
                    res = arr.slice(index + 1, index + 5);
                }
            }
        })
        return res;
    }

    itemClick = (id) => {
        this.props.dispatch(getItem(id));
        this.props.history.push({
            pathname: `/product/${id}`
        });
    }

    render() {
        const { items, itemId } = this.props;
        return (
            <div>
                <List
                    pageTitle="You may also like:"
                    resultItems={this.helper(items, itemId)}
                    click={this.itemClick}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items.data,
        itemId: state.items.itemDetail[0].itemId
    }
}

export default withRouter(connect(mapStateToProps)(Similars));
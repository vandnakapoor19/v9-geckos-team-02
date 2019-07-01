import React,{Component} from 'react';
import List from '../UI/shopping-list';
import Spinner from '../UI/spinner';

import {getItem} from '../../actions/getItem';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

class SearchResult extends Component  {

    itemClick = (id, title) => {
        this.props.dispatch(getItem(id));
        this.props.history.push({
            pathname: `/product/${id}`
        });
    }

    render () {  
        const {isFetching,resultItems} = this.props;
            if (isFetching) {
                return <Spinner />
            } else return (
                <List
                    resultItems={resultItems}
                    pageTitle="Search Result"
                    click={this.itemClick}
                />
            )
    }
};

const mapStateToProps = state => {
    // console.log(state.items.itemDetail)
    return {
        resultItems: state.items.data,
        isFetching: state.items.searchByCtgIsFetching
    }
}
export default withRouter(connect(mapStateToProps)(SearchResult));
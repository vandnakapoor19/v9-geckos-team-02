import React from 'react';
import List from '../UI/shopping-list';
import Spinner from '../UI/spinner';

import { connect } from 'react-redux';

const ItemsByCategory = props => {
    if (props.isFetching) {
        return <Spinner />
    } else return (
        <div className="row">

            <div className="container text-center my-4">
                <h1>Shop by Category</h1>
            </div>
            {
                props.itemsByCtg.map((item, index) => (
                    <List
                        key={index}
                        src={item.galleryURL}
                        name={item.title}
                        id={item.itemId}
                    />
                ))
            }
        </div >
    )
};

const mapStateToProps = state => {
    // console.log(state.itemsByCtg)
    return {
        itemsByCtg: state.items.data,
        isFetching: state.items.searchByCtgIsFetching
    }
}
export default connect(mapStateToProps)(ItemsByCategory);
import React from 'react';
import List from '../UI/shopping-list';

import { connect } from 'react-redux';

const ItemsByCategory = props => (
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
);

const mapStateToProps = state => {
    // console.log(state.itemsByCtg)
    return {
        itemsByCtg: state.itemsByCtg.data,
    }
}
export default connect(mapStateToProps)(ItemsByCategory);
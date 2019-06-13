import React, { Component } from 'react';
// import '../UI/Header/header.css';

import { searchByKeywords } from '../../actions/searchByKeywords';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
    state = {
        input: ''
    }

    inputChange = e => {
        let value = e.target.value.replace(/\s+/g, '%20');
        this.setState({
            input: value
        })
    }

    searchItemsSubmit = keywords => {
        this.props.dispatch(searchByKeywords(keywords));
        this.props.history.push({
            pathname: keywords
        });
        this.setState({
            input: ''
        })
    }

    render() {
        const { input } = this.state;
        return (
            <form
                className="form-inline my-2 my-lg-0 mi-auto header-style"
                onSubmit={e => {
                    e.preventDefault();
                    this.searchItemsSubmit(input)
                }}
            >
                <input
                    className="form-control"
                    type="search"
                    placeholder="search"
                    onChange={this.inputChange}
                />
                <button className=" btn mx-4"><i class="fas fa-search"></i></button>
            </form>
        )
    }
}

export default withRouter(connect()(SearchForm));
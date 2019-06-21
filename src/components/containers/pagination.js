import React, { Component } from 'react';
import Pagebar from '../UI/pagebar';

import { connect } from 'react-redux';
import * as actions from '../../actions/changePage';

import { withRouter } from 'react-router-dom';

class Pagination extends Component {
    state = {
        curPage: 1,
        pages: [1, 2, 3, 4, 5]
    }
    getPath = () => {
        let curPath = this.props.location.pathname;
        return curPath.slice(0, -1) + this.state.curPage;
    }

    componentDidUpdate(prevProps, prevState) {
        // use it to solve url async problem
        // getPath must run after setState
        if (prevState.curPage !== this.state.curPage) {
            this.props.history.push({
                pathname: this.getPath()
            })
        }
    }


    toPrevPage = (url, page) => {
        const { pages } = this.state;
        if (page === 1) return;
        if (page % 5 === 1) {
            this.setState({
                pages: pages.map(p => p - 5)
            })
        }
        this.setState({
            curPage: page - 1
        })
        this.props.dispatch(actions.prevPage(url, page))
    }

    toPage = (url, page) => {
        // console.log('page:', page)
        // console.log('url', url)
        this.setState({
            curPage: page
        })
        this.props.dispatch(actions.toPage(url, page))

    }

    toNextPage = (url, page) => {
        const { pages } = this.state;
        if (page % 5 === 0) {
            this.setState({
                pages: pages.map(p => p + 5)
            })
        }
        this.setState({
            curPage: page + 1
        })
        this.props.dispatch(actions.nextPage(url, page));
    }



    render() {
        const { url } = this.props;
        const { curPage, pages } = this.state;
        // console.log('location:', this.getPath());
        // console.log('page:', curPage)
        return (
            <div>
                <Pagebar
                    curPage={curPage}
                    pages={pages}
                    toPrevPage={this.toPrevPage}
                    toNextPage={this.toNextPage}
                    toPage={this.toPage}
                    path={this.props.location.pathname.slice(0, -1)}
                    url={url}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        url: state.items.url
    }
}

export default withRouter(connect(mapStateToProps)(Pagination));
import React, {Component} from 'react';
import Pagebar from '../UI/pagebar';

import { connect } from 'react-redux';
import * as actions from '../../actions/changePage';

import { withRouter} from 'react-router-dom';

class Pagination extends Component {

    toPrevPage = (url, page) => {
        this.props.dispatch(actions.prevPage(url, page))
    }

    toPage = (url, page) => {
        this.props.dispatch(actions.toPage(url, page))
    }

    toNextPage= url => {
        this.props.dispatch(actions.nextPage(url))
    }

    render () {
        console.log('history:',this.props.location);
        const {curPage, url} = this.props;
        return (
            <div>
                <Pagebar 
                    curPage={curPage}
                    toPrevPage={this.toPrevPage}
                    toNextPage={this.toNextPage}
                    toPage={this.toPage}
                    path={this.props.location.pathname}
                    url={url}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        curPage: state.page.curPage,
        url: state.itemsByCtg ? state.itemsByCtg.url : state.itemsByKeywords.url
    }
}

export default withRouter(connect(mapStateToProps)(Pagination));
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'

const nextPageStart = () => {
    return {
        type: 'NEXT_PAGE_START'
    }
};

const nextPageSuccess = items => {
    return {
        type: 'NEXT_PAGE_SUCCESS',
        items
    }
};

const nextPageFail = err => {
    return {
        type: 'NEXT_PAGE_FAIL',
        err
    }
}

export const nextPage = url => {
    return (dispatch, getState) => {
        
        let page = getState().items.curPage + 1;
        console.log('get_url:', `${url}&paginationInput.pageNumber=${page}`)
        dispatch(nextPageStart());
        axios
            .get(`${url}&paginationInput.pageNumber=${page}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                console.log('res:',res.data.findItemsByCategoryResponse[0].searchResult[0])
                console.log('after next start')
                dispatch(nextPageSuccess(res.data.findItemsByCategoryResponse[0].searchResult[0].item))
            })
            .catch(err => dispatch(nextPageFail(err)))
    }
};

const prevPageStart = () => {
    return {
        type: 'PREV_PAGE_START'
    }
};

const prevPageSuccess = items => {
    return {
        type: 'PREV_PAGE_SUCCESS',
        items
    }
};

const prevPageFail = err => {
    return {
        type: 'PREV_PAGE_FAIL',
        err
    }
}

export const prevPage = (url, curPage) => {
    curPage = curPage > 1 ? curPage - 1 : curPage;
    return (dispatch, getState) => {
        dispatch(prevPageStart());
        console.log('after prev start')
        axios
            .get(`${url}&paginationInput.pageNumber=${curPage}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                dispatch(prevPageSuccess(res.data.findItemsByCategoryResponse[0].searchResult[0].item))
            })
            .catch(err => dispatch(prevPageFail(err)))
    }
};

const toPageStart = () => {
    return {
        type: 'To_PAGE_START'
    }
};

const toPageSuccess = items => {
    return {
        type: 'TO_PAGE_SUCCESS',
        items
    }
};

const toPageFail = err => {
    return {
        type: 'TO_PAGE_FAIL',
        err
    }
}

export const toPage = (url, curPage) => {
    return (dispatch, getState) => {
        dispatch(toPageStart());
        axios
            .get(`${url}&paginationInput.pageNumber=${curPage}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                dispatch(toPageSuccess(res.data.findItemsByCategoryResponse[0].searchResult[0].item))
            })
            .catch(err => dispatch(toPageFail(err)))
    }
};
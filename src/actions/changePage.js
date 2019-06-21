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

export const nextPage = (url, page) => {
    page += 1;
    return (dispatch, getState) => {
        // console.log('get_url:', `${url}&paginationInput.pageNumber=${page}`)
        dispatch(nextPageStart());
        axios
            .get(`${url}&paginationInput.pageNumber=${page}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                // console.log('res:', res.data.findItemsByKeywordsResponse)
                let data = res.data.findItemsByCategoryResponse ?
                    res.data.findItemsByCategoryResponse[0].searchResult[0].item :
                    res.data.findItemsByKeywordsResponse[0].searchResult[0].item;
                // console.log('res.data:', data);
                dispatch(nextPageSuccess(data))
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
        // console.log('prevpage:', curPage)
        axios
            .get(`${url}&paginationInput.pageNumber=${curPage}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                let data = res.data.findItemsByCategoryResponse ?
                    res.data.findItemsByCategoryResponse[0].searchResult[0].item :
                    res.data.findItemsByKeywordsResponse[0].searchResult[0].item
                dispatch(prevPageSuccess(data))
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
        // console.log('toPage_url:', `${url}&paginationInput.pageNumber=${curPage}`)
        axios
            .get(`${url}&paginationInput.pageNumber=${curPage}`,
                // { crossdomain: true }
                { adapter: jsonpAdapter }
            )
            .then(res => {
                let data = res.data.findItemsByCategoryResponse ?
                    res.data.findItemsByCategoryResponse[0].searchResult[0].item :
                    res.data.findItemsByKeywordsResponse[0].searchResult[0].item
                dispatch(toPageSuccess(data))
            })
            .catch(err => dispatch(toPageFail(err)))
    }
};
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'


const searchCtgStart = () => {
    return {
        type: 'SEARCH_CTG_START'
    }
};

const searchCtgSuccess = (items, url) => {
    return {
        type: 'SEARCH_CTG_SUCCESS',
        items,
        url
    }
};

const searchCtgFail = err => {
    return {
        type: 'SEARCH_CTG_FAIL',
        err
    }
}

export const searchByCtg = id => {
    let URL = `http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=YuShi-Ecommerc-PRD-52d9a4cd1-ab27ddce&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${id}&paginationInput.entriesPerPage=24`;
    return (dispatch, getState) => {
        dispatch(searchCtgStart());
        axios
            .get(URL,
            // { crossdomain: true }
            { adapter: jsonpAdapter }
            )
            .then(res => {
                dispatch(searchCtgSuccess(res.data.findItemsByCategoryResponse[0].searchResult[0].item, URL))
            })
            .catch(err => dispatch(searchCtgFail(err)))
    }
}

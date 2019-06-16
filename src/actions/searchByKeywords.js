import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'

const searchKwStart = () => {
    return {
        type: 'SEARCH_KW_START'
    }
};

const searchKwSuccess = (items, url) => {
    return {
        type: 'SEARCH_KW_SUCCESS',
        items,
        url
    }
};

const searchKwFail = err => {
    return {
        type: 'SEARCH_KW_FAIL',
        err
    }
}

export const searchByKeywords = keywords => {
    let URL = `http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=YuShi-Ecommerc-PRD-52d9a4cd1-ab27ddce&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${keywords}&paginationInput.entriesPerPage=24`;
    return (dispatch, getState) => {
        dispatch(searchKwStart());
        axios
            .get(URL,
                { adapter: jsonpAdapter }
            )
            .then(res => {
                dispatch(searchKwSuccess(res.data.findItemsByKeywordsResponse[0].searchResult[0].item, URL))
            })
            .catch(err => dispatch(searchKwFail(err)))
    }
}

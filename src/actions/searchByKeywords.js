import axios from 'axios';
import jsonpAdapter from 'axios-jsonp'

const searchKwStart = () => {
    return {
        type: 'SEARCH_KW_START'
    }
};

const searchKwSuccess = items => {
    return {
        type: 'SEARCH_KW_SUCCESS',
        items
    }
};

const searchKwFail = err => {
    return {
        type: 'SEARCH_KW_FAIL',
        err
    }
}

export const searchByKeywords = keywords => {
    console.log('kw in action,',keywords)
    return (dispatch, getState) => {
        dispatch(searchKwStart());
        axios
            .get(`http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=YuShi-Ecommerc-PRD-52d9a4cd1-ab27ddce&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=${keywords}&paginationInput.entriesPerPage=24`,
            { adapter: jsonpAdapter }
            )
            .then(res => {
                // console.log(res)
                dispatch(searchKwSuccess(res.data.findItemsByKeywordsResponse[0].searchResult[0].item))
            })
            .catch(err => dispatch(searchKwFail(err)))
    }
}

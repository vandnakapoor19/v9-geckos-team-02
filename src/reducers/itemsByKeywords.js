const initState = {
    searchByKeywordsIsFetching: false,
    data: [],
    url:'',
    err:''
}

const itemsByKeywords = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_KW_START':
            return {
                ...state,
                searchByCtgIsFetching: true,
            }
        case 'SEARCH_KW_SUCCESS':
            return {
                ...state,
                searchByCtgIsFetching: false,
                data: action.items,
                url: action.url,
                err: ''
            }
        case 'SEARCH_KW_FAIL':
            return {
                ...state,
                searchByCtgIsFetching: false,
                err: action.err
            }
        default:
            return state;
    }
}

export default itemsByKeywords;
const initState = {
    searchByCtgIsFetching: false,
    searchByKeywordsIsFetching: false,
    curPage: 1,
    nextPageIsFetching: false,
    prevPageIsFetching: false,
    toPageIsFetching: false,
    data: [],
    err: '',
    url: ''
}

const items = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_CTG_START':
            return {
                ...state,
                searchByCtgIsFetching: true,
                curPage: 1
            }
        case 'SEARCH_CTG_SUCCESS':
            return {
                ...state,
                searchByCtgIsFetching: false,
                data: action.items,
                url: action.url,
                curPage: 1,
                err: ''
            }
        case 'SEARCH_CTG_FAIL':
            return {
                ...state,
                searchByCtgIsFetching: false,
                curPage: 1,
                err: action.err
            }
        case 'SEARCH_KW_START':
            return {
                ...state,
                curPage: 1,
                searchByCtgIsFetching: true,
            }
        case 'SEARCH_KW_SUCCESS':
            return {
                ...state,
                curPage: 1,
                searchByCtgIsFetching: false,
                data: action.items,
                url: action.url,
                err: ''
            }
        case 'SEARCH_KW_FAIL':
            return {
                ...state,
                curPage: 1,
                searchByCtgIsFetching: false,
                err: action.err
            }
        case 'NEXT_PAGE_START':
            return {
                ...state,
                nextPageIsFetching: true,
                err: ''
            };
        case 'NEXT_PAGE_SUCCESS':
            return {
                ...state,
                curPage: state.curPage + 1,
                nextPageIsFetching: false,
                data: action.items,
                err: ''
            };
        case 'NEXT_PAGE_FAIL':
            return {
                ...state,
                nextPageIsFetching: false,
                err: action.err
            };
        case 'PREV_PAGE_START':
            return {
                ...state,
                prevPageIsFetching: true,
                err: ''
            };
        case 'PREV_PAGE_SUCCESS':
            return {
                ...state,
                curPage: state.curPage > 1 ? state.curPage - 1 : state.curPage,
                prevPageIsFetching: false,
                data: action.items,
                err: ''
            };
        case 'PREV_PAGE_FAIL':
            return {
                ...state,
                prevPageIsFetching: false,
                err: action.err
            };
        case 'TO_PAGE_START':
            return {
                ...state,
                toPageIsFetching: true,
                err: ''
            };
        case 'TO_PAGE_SUCCESS':
            return {
                ...state,
                toPageIsFetching: false,
                data: action.items,
                err: ''
            };
        case 'TO_PAGE_FAIL':
            return {
                ...state,
                toPageIsFetching: false,
                err: action.err
            };
        default:
            return state;
    }
}

export default items;
const initState = {
    searchByCtgIsFetching: false,
    searchByKeywordsIsFetching: false,
    nextPageIsFetching: false,
    prevPageIsFetching: false,
    toPageIsFetching: false,
    data: [],
    err: '',
    url: '',
    itemDetail: {}
}

const items = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_CTG_START':
            return {
                ...state,
                searchByCtgIsFetching: true,
                itemDetail: {}
            }
        case 'SEARCH_CTG_SUCCESS':
            return {
                ...state,
                searchByCtgIsFetching: false,
                data: action.items,
                url: action.url,
                err: ''
            }
        case 'SEARCH_CTG_FAIL':
            return {
                ...state,
                searchByCtgIsFetching: false,
                // curPage: 1,
                err: action.err
            }
        case 'SEARCH_KW_START':
            return {
                ...state,
                itemDetail: {},
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
        case 'NEXT_PAGE_START':
            return {
                ...state,
                nextPageIsFetching: true,
                itemDetail: {},
                err: ''
            };
        case 'NEXT_PAGE_SUCCESS':
            return {
                ...state,
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
                itemDetail: {},
                err: ''
            };
        case 'PREV_PAGE_SUCCESS':
            return {
                ...state,
                // curPage: state.curPage > 1 ? state.curPage - 1 : state.curPage,
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
                itemDetail: {},
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
            case 'GET_ITEM':
            return {
                ...state,
                itemDetail: state.data.filter(item => item.itemId === action.id)
            };
        default:
            return state;
    }
}

export default items;
const initState = {
    searchByCtgIsFetching: false,
    data: [],
    err:''
}

const itemsByCtg = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_CTG_START':
            return {
                ...state,
                searchByCtgIsFetching: true,
            }
        case 'SEARCH_CTG_SUCCESS':
            return {
                ...state,
                searchByCtgIsFetching: false,
                data: action.items,
                err: ''
            }
        case 'SEARCH_CTG_FAIL':
            return {
                ...state,
                searchByCtgIsFetching: false,
                err: action.err
            }
        default:
            return state;
    }
}

export default itemsByCtg;
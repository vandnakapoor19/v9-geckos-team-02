const initState = {
    curPage: 1,
    nextPageIsFetching: false,
    prevPageIsFetching: false,
    toPageIsFetching: false,
    err:''
}

const page = (state=initState, action) => {
    switch (action.type) {
        case 'NEXT_PAGE_START':
        return {
            ...state,
            nextPageIsFetching: true,
            err: ''
        };
        case 'NEXT_PAGE_SUCCESS':
        return {
            ...state,
            curPage: state.curPage+1,
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

export default page;
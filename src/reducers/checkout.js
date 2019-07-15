const checkout = (state={}, action) => {
    switch (action.type) {
        case 'CHECK_OUT':
            return action.data;
        default:
            return {};
    }
}

export default checkout;
const checkout = (state={}, action) => {
    switch (action.type) {
        case 'CHECK_OUT':
        console.log('data:',action.data)
            return action.data;
        default:
            return {};
    }
}

export default checkout;
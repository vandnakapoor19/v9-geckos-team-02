
const helper = (arr, obj) => {
    if (arr.filter(el => el.id === obj.id).length !== 0) {
        return arr.map(el =>
            (el.id === obj.id)
                ? { ...el, quality: el.quality + obj.quality }
                : el
        )
    } else {
        return [...arr, obj]
    }
}

const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...helper(state, action.data)]
        default:
            return state;
    }
}

export default cart;
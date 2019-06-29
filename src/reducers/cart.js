
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
            return [...helper(state, action.data)];
        case 'REDUCE_QUALITY':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item, 
                        quality: item.quality > 1 ? item.quality - 1 : item.quality
                    }
                } else return item;
            })
        case 'ADD_QUALITY':
            return state.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item, 
                        quality: item.quality + 1
                    }
                } else return item;
            })
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}

export default cart;
export const addToCart = (info, quality) => {
    return {
        type: 'ADD_TO_CART',
        data: {...info, quality}
    }
}

export const reduceQuality = id => {
    return {
        type: 'REDUCE_QUALITY',
        id
    }
}

export const addQuality = id => {
    return {
        type: 'ADD_QUALITY',
        id
    }
}

export const deleteItem = id => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART'
    }
}
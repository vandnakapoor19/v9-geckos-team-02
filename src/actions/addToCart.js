export const addToCart = (info, quality) => {
    return {
        type: 'ADD_TO_CART',
        data: {...info, quality}
        // data: {
        //     id: info.id,
        //     img: info.img,
        //     title: info.title,
        //     price: info.price,
        //     quality: quality
        // }
    }
}
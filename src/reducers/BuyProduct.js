const initialState = {
    list: [],
};

function BuyProduct(state = initialState, actions) {
    switch (actions.type) {
        case 'ADD_TO_BUY_CART':
            return { list: [...state.list, actions.payload] };
        case 'DELETE_TO_BUY_CART':
            return { list: [] };
        default:
            return state;
    }
}

export default BuyProduct;

const initialState = {
    list: [],
};

function AdNewCART(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_NEW_CART':
            const newState = [...state.list];
            return { list: [...newState, action.payload] };

        default:
            return state;
    }
}

export default AdNewCART;

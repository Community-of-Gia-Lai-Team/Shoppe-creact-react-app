const initialState = {
    list: ['Thấp đến cao', 'Cao đến thấp'],
    idActivePrice: null,
};

function ActivePrice(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRICE_BTN':
            const list = [...state.list];
            return { list, idActivePrice: action.payload };

        default:
            return state;
    }
}

export default ActivePrice;

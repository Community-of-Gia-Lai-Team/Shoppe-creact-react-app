const initialState = {
    list: [1, 2, 3, 4],
    idActive: 0,
};

function ActiveProductsPagesBtn(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ID_PRODUCTS_PAGE':
            const list = [...state.list];
            return { list, idActive: action.payload };

        default:
            return state;
    }
}

export default ActiveProductsPagesBtn;

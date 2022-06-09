const initialState = {
    list: ['Bán chạy', 'Phổ biến', 'Mới nhất'],
    idActiveBtn: 0,
};

function ActiveBTn(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ID_BTN':
            const list = [...state.list];
            return { list, idActiveBtn: action.payload };

        default:
            return state;
    }
}

export default ActiveBTn;

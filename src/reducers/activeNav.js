const initialState = {
    list: ['Bán chạy', 'Ưa thích', 'Sản phẩm của shop', 'Yêu thích bởi tôi'],
    idActive: 0,
};

function ActiveNav(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ID':
            const list = [...state.list];
            return { list, idActive: action.payload };

        default:
            return state;
    }
}

export default ActiveNav;

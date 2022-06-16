const initialState = {
    list: [
        {
            name: 'Hồ Sơ',
            to: 'profile',
        },
        {
            name: 'Ngân Hàng',
            to: 'bank',
        },
        {
            name: 'Địa Chỉ',
            to: 'address',
        },
    ],
    number: 0,
};

function ActiveNavProfile(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ACTIVE_NAV_PROFILE':
            return { ...state, number: action.payload };

        default:
            return state;
    }
}

export default ActiveNavProfile;

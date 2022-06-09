const initialState = {
    list: [],
};

function ActivePath(state = initialState, action) {
    switch (action.type) {
        case 'ADD_ID_PATH':
            const newState = [...state.list];
            return { newState, list: action.payload };

        default:
            return state;
    }
}

export default ActivePath;

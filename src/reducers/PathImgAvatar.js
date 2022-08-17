const initialState = {
    link: null,
    Id: null,
};

function PathImgAvatar(state = initialState, actions) {
    switch (actions.type) {
        case 'CREATE_LINK_IMG':
            return { link: actions.payload };
        case 'DD_ID_ACTIVE_PRO': {
            return { ...state, id: actions.payload };
        }
        default:
            return state;
    }
}

export default PathImgAvatar;

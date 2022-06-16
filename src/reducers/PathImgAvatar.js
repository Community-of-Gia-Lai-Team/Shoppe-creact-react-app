const initialState = {
    link: null,
};

function PathImgAvatar(state = initialState, actions) {
    switch (actions.type) {
        case 'CREATE_LINK_IMG':
            return { link: actions.payload };
        default:
            return state;
    }
}

export default PathImgAvatar;

import { combineReducers } from 'redux';

import userReducer from './user';
import ActiveNav from './activeNav';
import ActiveBTn from './activeBtn';
import ActivePrice from './selectPrice';
import ActiveProductsPagesBtn from './BtnActiveProductsPages';
import ActivePath from './ActiePath';
import AdNewCART from './AddNewcart';
import PathImgAvatar from './PathImgAvatar';
import ActiveNavProfile from './ActiveNavProfile';

const rootReducer = combineReducers({
    user: userReducer,
    ActiveNav: ActiveNav,
    ActiveBTn: ActiveBTn,
    ActivePrice: ActivePrice,
    ActiveProductsPagesBtn: ActiveProductsPagesBtn,
    ActivePath: ActivePath,
    AdNewCART: AdNewCART,
    PathImgAvatar: PathImgAvatar,
    ActiveNavProfile: ActiveNavProfile,
});

export default rootReducer;

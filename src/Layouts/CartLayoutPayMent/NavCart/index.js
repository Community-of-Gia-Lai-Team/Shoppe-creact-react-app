import classNames from 'classnames/bind';

import styles from './NavCart.modules.scss';
import RenderNav from '@/Layouts/DefaultLayout/Nav/RenderNav';
import { Logo } from '@/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavCart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('grid wide')}>
                    <RenderNav />
                </div>
            </div>
            <div className={cx('grid wide', 'parents')}>
                <div className={cx('content')}>
                    <div className={cx('header-logo-cart')}>
                        <Link to="/">
                            <Logo className={cx('logo-cart')} />
                        </Link>
                        <div>Giỏ hàng</div>
                    </div>
                    <div className={cx('header-search-cart')}>
                        <div className={cx('search-cart-children')}>
                            <form>
                                <input placeholder="GIẢM 50% SINH NHẬT SHOPEEPAY DAY" />
                                <button>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavCart;

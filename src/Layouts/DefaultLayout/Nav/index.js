import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Nav.module.scss';
import { Logo } from '@/components/icons';
import Search from '../components/search';

import Cart from '../components/Cart';
import RenderNav from './RenderNav';

const cx = classNames.bind(styles);

function Nav() {
    const ItemCartCount = useSelector((state) => state.AdNewCART.list);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide', 'parents')}>
                <RenderNav />
                <div className={cx('search-and-login')}>
                    <div className={cx('logo-Home')}>
                        <Link to="/">
                            <Logo className={cx('logo-home-s-v-g')} />
                        </Link>
                    </div>
                    <div className={cx('search-ad-product')}>
                        <div className={cx('search-input')}>
                            <input
                                className={cx('search-text')}
                                maxLength="128"
                                placeholder="GIÁ GIẢM THÀNH VIÊN -50%"
                            />
                            <div className={cx('search-list-container')} onMouseDown={(e) => e.preventDefault()}>
                                <Search />
                            </div>
                        </div>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <div className={cx('cart-home')}>
                        <div className={cx('search-cart-icon')}>
                            {ItemCartCount.length > 0 && (
                                <div className={cx('search-counters')}>{ItemCartCount.length}</div>
                            )}
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            <div className={cx('cart-list-container')}>
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;

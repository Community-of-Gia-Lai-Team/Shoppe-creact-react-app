import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    faBell,
    faCircleQuestion,
    faLanguage,
    faAngleDown,
    faMagnifyingGlass,
    faCartArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Nav.module.scss';
import QrImg from '@/assets/img/qrdownload.png';
import AppStoreImg from '@/assets/img/appstore.png';
import GoogleStoreImg from '@/assets/img/ggplay.png';
import AppGrenlyStoreImg from '@/assets/img/appgay.png';
import { Logo } from '@/components/icons';
import Search from '../components/search';

import NotifyCart from '@/Layouts/DefaultLayout/components/NotifyCart';
import Cart from '../components/Cart';

const cx = classNames.bind(styles);

function Nav() {
    const UserAccount = useSelector((state) => state.user);
    const ItemCartCount = useSelector((state) => state.AdNewCART.list);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide', 'parents')}>
                <div className={cx('nav-importants')}>
                    <div className={cx('left-nav')}>
                        <a
                            href="https://shopee.vn/search?keyword=shoppe"
                            className={cx('nav-btn-tab-one')}
                            type="_blank"
                        >
                            Kênh Người Bán
                        </a>
                        <a
                            href="https://shopee.vn/search?keyword=shoppe"
                            className={cx('nav-btn-tab-one')}
                            type="_blank"
                        >
                            <p className={cx('position-height')}></p>
                            Trở thành Người bán Shopee
                        </a>
                        <a
                            href="https://shopee.vn/search?keyword=shoppe"
                            className={cx('nav-btn-tab-one', 'hover-hiden-on-qr')}
                            type="_blank"
                        >
                            <p className={cx('position-height')}></p>
                            Tải ứng dụng
                            <div className={cx('qr-download')}>
                                <img alt="download" src={QrImg} />
                                <div className={cx('row customs-gutters', 'qr-link-dowload')}>
                                    <p className="m-6 l-6">
                                        <img src={AppStoreImg} alt="download" />
                                    </p>
                                    <p className="m-6 l-6">
                                        <img src={GoogleStoreImg} alt="download" />
                                    </p>
                                    <p className="m-6 l-6">
                                        <img src={AppGrenlyStoreImg} alt="download" />
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className={cx('nav-btn-tab-one', 'nav-btn-tab-one-icon')} type="_blank">
                            <p className={cx('position-height')}></p>
                            Kết nối
                        </div>
                        <div className={cx('icons-link-page-app')}>
                            <a href="https://" className={cx('icon-link-s-t-y')}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://" className={cx('icon-link-s-t-y')}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </div>
                    <div className={cx('right-nav')}>
                        <div className={cx('nav-btn-tab-one', 'nav-btn-tab-one-modifined')}>
                            <FontAwesomeIcon icon={faBell} className={cx('icon-s-d-e')} />
                            Thông báo
                            <div className={cx('notify-messeages-nav')}>
                                <NotifyCart />
                            </div>
                        </div>
                        <a href="https://" className={cx('nav-btn-tab-one')}>
                            <FontAwesomeIcon icon={faCircleQuestion} className={cx('icon-s-d-e')} />
                            Hỗ trợ
                        </a>
                        <div className={cx('nav-btn-tab-one', 'nav-btn-tab-one-ps')}>
                            <FontAwesomeIcon icon={faLanguage} className={cx('icon-s-d-e')} />
                            Tiếng Việt
                            <FontAwesomeIcon icon={faAngleDown} className={cx('icon-s-d-f')} />
                            <div className={cx('nav-btn-tab-two')}>
                                <ul>
                                    <li>Tiếng Việt</li>
                                    <li>English</li>
                                </ul>
                            </div>
                        </div>

                        {UserAccount.length > 0 ? (
                            <div className={cx('login-true')}>
                                <div className={cx('img-avatar')}>
                                    <img src="https://cf.shopee.vn/file/95be9e5f9b3d5d20afa8299b20b6c8f0" alt="" />
                                </div>
                                <div className={cx('text-name')}>{UserAccount[0].user.useraccount}</div>
                            </div>
                        ) : (
                            <>
                                <Link to="/login-register/register">
                                    <div className={cx('nav-btn-tab-one')}>Đăng ký</div>
                                </Link>
                                <Link to="/login-register/login">
                                    <div className={cx('nav-btn-tab-one')}>
                                        <p className={cx('position-height')}></p>
                                        Đăng nhập
                                    </div>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
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

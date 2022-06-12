import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './NotifyCart.module.scss';
import noNotifyLogin from '@/assets/img/no-notify.png';
const cx = classNames.bind(styles);

function NotifyCart() {
    const User = JSON.parse(localStorage.getItem('user')) || [];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('no-login')}>
                <div className={cx('img-no-logn')}>
                    <img src={noNotifyLogin} alt="Vui lòng đăng nhập để xem thông báo" />
                    {User.length > 0 ? <p>Bạn chưa có thông báo nào</p> : <p>Vui lòng đăng nhập để xem thông báo</p>}
                </div>
                <div className={cx('no-login-conect-login')}>
                    {User.length > 0 ? (
                        <></>
                    ) : (
                        <>
                            <Link to="/login-register/register">
                                <button className={cx('no-login-conect-login-btn')}>Đăng ký</button>
                            </Link>
                            <Link to="/login-register/login">
                                <button className={cx('no-login-conect-login-btn')}>Đăng nhập</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NotifyCart;

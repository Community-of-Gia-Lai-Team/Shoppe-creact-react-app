import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './form.module.scss';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = className.bind(styles);

function Register() {
    return (
        <div>
            <form className={cx('wrapper')}>
                <div className={cx('parents', 'register')}>
                    <div className={cx('heading', 'login-user')}>
                        <h3>Dăng ký tài khoản của bạn ❤️❤️</h3>
                    </div>
                    <div className={cx('parents-container')}>
                        <div className={cx('text-ch-s', 'text-tk')}>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Email/Số điện thoại/Tên đăng nhập"
                                autoComplete="on"
                                name="loginKey"
                                maxLength="128"
                            />
                        </div>

                        <div className={cx('sub-mit-btn')}>
                            <button className={cx('submit', 'login-btn')} disabled="">
                                Đăng ký
                            </button>
                        </div>

                        <div className={cx('login-add-app')}>
                            <button className={cx('app-btn-login')}>
                                <FontAwesomeIcon icon={faFacebook} />
                                Facebook
                            </button>
                            <button className={cx('app-btn-login')}>
                                <FontAwesomeIcon icon={faGoogle} />
                                Google
                            </button>
                            <button className={cx('app-btn-login')}>
                                <FontAwesomeIcon icon={faApple} />
                                Apple
                            </button>
                        </div>
                        <div className={cx('text-node-faqs')}>
                            Bạn mới biết đến shoppe?
                            <Link to="/login-register/login">Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;

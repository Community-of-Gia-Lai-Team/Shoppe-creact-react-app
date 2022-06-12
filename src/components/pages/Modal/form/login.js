import { useState } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';

import styles from './form.module.scss';
import { addNewUser } from '@/Actions/user';

const cx = className.bind(styles);

function Login({ user }) {
    const [ViewPass, setViewPass] = useState(false);
    const [Text, setText] = useState('');
    const [passWord, setPassWord] = useState('');

    const disPatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        async function postData(url = 'https://api-shope-done.herokuapp.com/users', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data),
            });
            return response.json();
        }

        postData('https://api-shope-done.herokuapp.com/users', {
            user: {
                useraccount: Text,
                password: passWord,
            },
        }).then((data) => {
            localStorage.setItem('user', JSON.stringify([data]));
            disPatch(addNewUser(data));
        });
    };

    return (
        <div>
            <form className={cx('wrapper')}>
                <div className={cx('parents', 'login')}>
                    <div className={cx('heading', 'login-user')}>
                        <h3>Dăng nhập tài khoản của bạn ❤️❤️</h3>
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
                                value={Text.trim() ? Text : ''}
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className={cx('text-ch-s', 'text-passWork')}>
                            <input
                                className={cx('input')}
                                type={ViewPass ? 'text' : 'password'}
                                placeholder="Mật khẩu"
                                autoComplete="current-password"
                                name="password"
                                maxLength="16"
                                value={passWord.trim() ? passWord : ''}
                                onChange={(e) => setPassWord(e.target.value)}
                            />
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setViewPass(!ViewPass);
                                }}
                            >
                                {ViewPass ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                            </button>
                        </div>
                        <div className={cx('sub-mit-btn')}>
                            <button
                                className={
                                    Text.length > 0 && passWord.length > 0
                                        ? cx('submit', 'login-btn')
                                        : cx('submit', 'login-btn', 'disabled')
                                }
                                onClick={(e) => handleSubmit(e)}
                            >
                                <Link to="/" className={cx('login-true')}>
                                    Đăng nhập
                                </Link>
                            </button>
                        </div>
                        <div className={cx('faqs-password')}>
                            <a href="https://shopee.vn/buyer/reset">Quên mật khẩu</a>
                            <a href="https://shopee.vn/buyer/reset">Đăng nhập với SMS</a>
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
                            <Link to="/login-register/register">Đăng ký</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;

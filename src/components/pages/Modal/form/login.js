import { useState } from 'react';
import { Link } from 'react-router-dom';
import className from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faApple, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './form.module.scss';
import { addNewUser } from '@/Actions/user';

const cx = className.bind(styles);

const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
};

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
                    <div className={cx('parents-container')}>
                        <h1>My App</h1>
                        <p>Please sign-in:</p>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;

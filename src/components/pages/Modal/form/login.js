import className from 'classnames/bind';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import styles from './form.module.scss';

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

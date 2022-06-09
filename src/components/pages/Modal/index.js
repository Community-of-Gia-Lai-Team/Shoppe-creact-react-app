import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Modal.module.scss';
import { Logo } from '@/components/icons';
import BackGroundLogin from '@/assets/img/backgroundlogin.png';
import Footer from '@/components/pages/Footer';

const cx = classNames.bind(styles);

function Modal({ Uselink, title, user }) {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className={cx('heading')}>
                    <div className={cx('left-heading')}>
                        <Link to="/">
                            <Logo className={cx('logoSVG')} />
                        </Link>
                        <h3>{title}</h3>
                    </div>
                    <div className={cx('right-heading')}>
                        <a href="/">Bạn cần trợ giúp?</a>
                    </div>
                </div>
                <div className={cx('container')}>
                    <div
                        className={cx('container-content')}
                        style={{
                            backgroundImage: `url(${BackGroundLogin})`,
                        }}
                    >
                        <div className={cx('form-login-registers')}>
                            <Uselink user={user} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Modal;

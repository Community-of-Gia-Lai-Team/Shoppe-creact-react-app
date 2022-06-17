import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './NotifyMes.module.scss';

const cx = classNames.bind(styles);

function NotifyMes() {
    const [state, setState] = useState(false);

    return (
        <div className={state ? cx('disabled') : cx('notify-message')}>
            <div className={cx('notify-message-content')}>
                <div className={cx('notify-icon')}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className={cx('notify-body')}>
                    <h3>Cảm Ơn Bạn Đã Mua Hàng Của Chúng Tôi</h3>
                    <p>Bạn đã hoàn tất các thủ tục mua hàng vui lòng chờ nhận hàng nhé ❤️❤️❤️</p>
                </div>
                <div className={cx('notify-close')} onClick={() => setState(!state)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                <div className={cx('notify-close-done')}></div>
            </div>
        </div>
    );
}

export default NotifyMes;

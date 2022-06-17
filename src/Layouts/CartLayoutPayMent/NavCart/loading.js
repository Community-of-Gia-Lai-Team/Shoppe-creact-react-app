import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import styles from '../CartLayoutPayMent.module.scss';

const cx = classNames.bind(styles);

function Loading({ message }) {
    return (
        <div className={cx('loading-bank')}>
            <div>
                <span>
                    <FontAwesomeIcon icon={faSpinner} />
                    <p>{message ? message : 'Hành Vi Đang Được Xử Lí'}</p>
                </span>
            </div>
        </div>
    );
}

export default Loading;

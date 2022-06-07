import className from 'classnames/bind';

import Nav from './Nav';
import styles from './DefaultLayout.module.scss';

const cx = className.bind(styles);

function DefaultLayoutAndPages() {
    return (
        <div className={cx('wrapper')}>
            <Nav />
        </div>
    );
}

export default DefaultLayoutAndPages;

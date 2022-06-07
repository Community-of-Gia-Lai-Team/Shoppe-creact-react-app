import classNames from 'classnames/bind';

import styles from './Seach.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <h3>Xin chao</h3>
        </div>
    );
}

export default Search;

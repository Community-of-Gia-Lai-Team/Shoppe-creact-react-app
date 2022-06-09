import classNames from 'classnames/bind';

import styles from './Seach.module.scss';
import TestImg from '@/assets/img/qrdownload.png';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <h3>Kết quả tìm kiếm</h3>
            <ul>
                <li>Shoppe Food</li>
                <li>Shop phụ kiện điện thoại</li>
                <li>shopback</li>
                <li>quần kaki dáng cao</li>
            </ul>
        </div>
    );
}

export default Search;

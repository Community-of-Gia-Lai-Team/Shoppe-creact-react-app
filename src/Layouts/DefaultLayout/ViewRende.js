import className from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Category from './components/Category';
import NavProducts from './components/NavProducts';
import Products from '@/components/pages/Products';

const cx = className.bind(styles);

function ViewRender() {
    const stateProducts = JSON.parse(localStorage.getItem('Products')) || [];

    document.title = 'shoppe giá tốt Tháng 6, 2022 | Mua ngay | Shopee Việt Nam';

    return (
        <div className={cx('row')}>
            <div className={cx('m-2')}>
                <NavProducts />
            </div>
            <div className={cx('m-10')}>
                <Category />
                <Products Res={stateProducts} />
            </div>
        </div>
    );
}

export default ViewRender;

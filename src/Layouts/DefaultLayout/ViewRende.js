import className from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './DefaultLayout.module.scss';
import Category from './components/Category';
import NavProducts from './components/NavProducts';
import Products from '@/components/pages/Products';

const cx = className.bind(styles);

function ViewRender() {
    const [stateProducts, setStateProducts] = useState([]);

    useEffect(() => {
        fetch('https://api-shope-done.herokuapp.com/products')
            .then((res) => res.json())
            .then((res) => {
                setStateProducts(res);
            });
    }, []);

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

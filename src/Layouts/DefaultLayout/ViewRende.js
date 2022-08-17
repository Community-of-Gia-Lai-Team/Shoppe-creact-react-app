import className from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Category from './components/Category';
import NavProducts from './components/NavProducts';
import Products from '@/components/pages/Products';
import { useEffect, useState } from 'react';
import { getAllProducts } from '@/services/Product';

const cx = className.bind(styles);

function ViewRender() {
    const [Products1, setProducts1] = useState([]);

    useEffect(() => {
        try {
            const fetCh = async () => {
                const data = await getAllProducts(10);

                if (data.errCode === 0) {
                    setProducts1(data.data);
                }
            };

            fetCh();
        } catch (error) {
            console.log(error);
        }

        // const ProductsAPI = process.env.REACT_APP_API_PRODUCTS;

        // fetch(ProductsAPI)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         setProducts(response);
        //     });
    }, []);

    // /JSON.parse(localStorage.getItem('Products')) ||
    const stateProducts = Products1;

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

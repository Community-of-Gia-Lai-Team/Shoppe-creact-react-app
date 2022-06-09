import className from 'classnames/bind';

import styles from './Cart.module.scss';

const cx = className.bind(styles);

function Cart({ resultCart }) {
    return (
        <div className={cx('wrapper')}>
            {resultCart.length > 0 ? (
                <div>
                    <h3>Sản phẩm mới thêm</h3>
                    <ul className={cx('list-cart')}>
                        {resultCart.map((res) => (
                            <li key={res.id}>
                                <div className={cx('img-cart')}>
                                    <img src={res.img} alt="" />
                                </div>
                                <div className={cx('title-cart')}>
                                    <h4>{res.name}</h4>
                                </div>
                                <div className={cx('price-cart')}>
                                    <p>Đ{res.price}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>
                    <h3>Bạn chưa có sản phẩm nào trong giỏ hàng</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;

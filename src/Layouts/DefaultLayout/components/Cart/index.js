import className from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';
import { ActivePathADD } from '@/Actions/ActivePathActions';

const cx = className.bind(styles);

function Cart({ res }) {
    const ItemCart = useSelector((state) => state.AdNewCART.list);
    const PathActive = useSelector((state) => state.ActivePath.list);

    const disPatch = useDispatch();

    const handleActivePath = (path) => {
        disPatch(ActivePathADD(path));
    };

    return (
        <div className={cx('wrapper')}>
            {ItemCart.length > 0 ? (
                <div>
                    <h3>Sản phẩm mới thêm</h3>
                    {ItemCart.map((item, index) => (
                        <Link
                            to={`/${PathActive}`}
                            className={cx('link-a-t-s')}
                            key={index}
                            onClick={() => handleActivePath(item.link)}
                            type="_blank"
                        >
                            <ul className={cx('list-cart')}>
                                <li key={item.id}>
                                    <div className={cx('img-cart')}>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className={cx('title-cart')}>
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className={cx('price-cart')}>
                                        <p>Đ{item.price}</p>
                                        <span>x1</span>
                                    </div>
                                </li>
                            </ul>
                        </Link>
                    ))}
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

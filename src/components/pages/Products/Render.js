import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Products.module.scss';
import Favirotes from '@/assets/img/yeuthich.png';
import { FreeShip, PricesReducerLeft, PricesReducerRight, StarIcon } from '@/components/icons';
import { ActivePathADD } from '@/Actions/ActivePathActions';

const cx = classNames.bind(styles);

function Render({ data }) {
    const disPathch = useDispatch();

    const handleClickPath = (data) => {
        disPathch(ActivePathADD(data));
    };

    return (
        <div className={cx('col m-2-4-12 l-2-4')}>
            <Link to={data.link} onClick={() => handleClickPath(data.link)}>
                <div className={cx('container')}>
                    {data.favirote && <span className={cx('favirote-banner')}>Yêu thích</span>}
                    {data.reducerprice.length > 0 && (
                        <div className={cx('banner-percent-reducer')}>
                            <span>{data.reducerprice}%</span>
                            <span>GIẢM</span>
                        </div>
                    )}
                    <div className={cx('img-and-favirote')}>
                        <img className={cx('img-favirote-default')} src={Favirotes} alt="" />
                        <img className={cx('img-products')} src={data.img} alt=""></img>
                    </div>
                    <div className={cx('introduce-product')}>
                        <div className={cx('name-title-product')}>{data.name}</div>
                        <div className={cx('price-reducer')}>
                            <div className={cx('price-percents')}>
                                <PricesReducerLeft />
                                <div>5% Giảm</div>
                                <PricesReducerRight />
                            </div>
                            <div className={cx('importants-shop')}>ShopDacBiet</div>
                        </div>
                        <div className={cx('price-product')}>
                            <div className={cx('price-product-i-o-p')}>₫{Number(data.price) + 58}.000</div>
                            <div className={cx('price-thu-te')}>
                                <span className={cx('v-n-d')}>₫</span>
                                <span>{data.price}</span>
                            </div>
                            <div className={cx('icon-car-free')}>
                                <FreeShip />
                            </div>
                        </div>
                        <div className={cx('star-and-da-o')}>
                            <div className={cx('star-icon')}>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                            </div>
                            <div className={cx('da-ban-count')}>Đã bán {data.sold}</div>
                        </div>
                        <div className={cx('addRess')}>{data.addRess}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Render;

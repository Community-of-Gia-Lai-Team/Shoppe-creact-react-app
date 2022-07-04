import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './CartLayoutPayMent.module.scss';
import NavCart from './NavCart';
import { ChatIcon, FreeShip } from '@/components/icons';
import { DoneBuyMentCart } from './../../Actions/DoneBuyMentCart';
import NotifyMes from '../DefaultLayout/components/NotifyMes';
import Loading from './NavCart/loading';

const cx = classNames.bind(styles);

function CartLayoutPayMent() {
    document.title = 'Giỏ Hàng';

    const dispatCh = useDispatch();

    const [check, setCheck] = useState(false);
    const [checkShop, setCheckShop] = useState(false);
    const [DoneBank, setDoneBank] = useState(false);
    const [DoneBuy, setDoneBuy] = useState(false);
    const [checkPro, setCheckPro] = useState(false);

    const Products = useSelector((state) => state.BuyProduct.list);

    const [price, setPrice] = useState({});

    const handleClickBuy = () => {
        setDoneBank(true);
        setCheckPro(false);
        setPrice({ price: 0 });

        setTimeout(() => {
            dispatCh(DoneBuyMentCart([]));
            setDoneBank(false);
            setDoneBuy(true);

            setTimeout(() => {
                setDoneBuy(false);
            }, 4800);
        }, 2000);
    };

    console.log(Products);

    return (
        <div className={cx('wrapper')}>
            <NavCart />
            <div className={cx('grid wide')}>
                <div className={cx('content')}>
                    <div className={cx('container-freeship')}>
                        <FreeShip />{' '}
                        <span>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</span>
                    </div>
                    <div className={cx('container-nav')}>
                        <div className={cx('container-nav-check')}>
                            <input
                                type="checkbox"
                                name="checkbox"
                                defaultValue={check}
                                onChange={(e) => setCheck(e.target.checked)}
                            />
                            <p>Sản Phẩm</p>
                        </div>
                        <div className={cx('container-nav-title')}>
                            <p>Đơn Giá</p>
                            <p>Số Lượng</p>
                            <p>Số Tiền</p>
                            <p>Thao Tác</p>
                        </div>
                    </div>
                    <div className={cx('container-buy')}>
                        {Products.length > 0 &&
                            // eslint-disable-next-line array-callback-return
                            Products.map((data, index) => {
                                if (data) {
                                    return (
                                        <div className={cx('container-buy-chuk')} key={index}>
                                            <div className={cx('container-buy-title')}>
                                                <input
                                                    type="checkbox"
                                                    name="buy"
                                                    defaultValue={false}
                                                    checked={check ? check : checkShop}
                                                    onChange={(e) => setCheckShop(e.target.checked)}
                                                />
                                                <div className={cx('container-buy-favirote')}>Yêu Thích</div>
                                                <div className={cx('container-buy-name-shop')}>
                                                    {data.nameShop}
                                                    <ChatIcon className={cx('container-buy-icon-chat-icon')} />
                                                </div>
                                            </div>
                                            <div className={cx('container-content')}>
                                                <div className={cx('container-content-dacbiet')}>
                                                    <span>Deal Sốc</span>
                                                    <p>Mua kèm deal độc quyền</p>
                                                    <a href="https://shopee.vn/addon-deal-cart-selection/8826415/5353064055/85252593/1625485961010758572">
                                                        Thêm
                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                    </a>
                                                </div>
                                                <div className={cx('container-content--parents')}>
                                                    <input
                                                        type="checkbox"
                                                        name="buy"
                                                        defaultValue={false}
                                                        onChange={(e) => {
                                                            if (e.target.checked) {
                                                                setCheckPro(!checkPro);
                                                                setPrice(data);
                                                            }
                                                        }}
                                                    />
                                                    <div
                                                        style={{
                                                            backgroundImage: `url(${data.img})`,
                                                            width: '80px',
                                                            height: '80px',
                                                            backgroundPosition: '50%',
                                                            backgroundSize: 'cover',
                                                            backgroundRepeat: 'no-repeat',
                                                        }}
                                                    ></div>
                                                    <div className={cx('container-content-title')}>
                                                        <Link to="/">{data.name}</Link>
                                                        <div
                                                            style={{
                                                                backgroundImage: `url('https://cf.shopee.vn/file/7cca304b3138710fba01f1cb7e038c66')`,
                                                                height: '18px',
                                                                backgroundSize: 'contain',
                                                                backgroundRepeat: 'no-repeat',
                                                                width: '200px',
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className={cx('price')}>
                                                        <span>₫{Number(data.price) + 58}.000</span>
                                                        <p>₫{data.price}</p>
                                                    </div>
                                                    <div className={cx('soluong')}>
                                                        <div>
                                                            <button>-</button>
                                                            <span>1</span>
                                                            <button>+</button>
                                                        </div>
                                                    </div>
                                                    <div className={cx('sum-price')}>
                                                        <span>₫{data.price}</span>
                                                    </div>
                                                    <div className={cx('delete-cart')}>
                                                        <button>Xóa</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                    </div>
                    <div className={cx('bank-buy-to-d')}>
                        <div className={cx('grid wide', 'd-t-y')}>
                            <div>
                                <h2>Cảm ơn bạn đã lựa chọn và tin tưởng tôi ❤️</h2>
                            </div>
                            <div className={cx('d-g-t-e-w')}>
                                <span>
                                    <span>Tổng Thanh Toán: </span>
                                    <div>₫{price > 0 ? price.price : 0}</div>
                                </span>
                                <button onClick={() => handleClickBuy()} className={!checkPro ? cx('disabled') : ''}>
                                    Mua Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {DoneBank && <Loading />}
            {DoneBuy && <NotifyMes />}
        </div>
    );
}

export default CartLayoutPayMent;

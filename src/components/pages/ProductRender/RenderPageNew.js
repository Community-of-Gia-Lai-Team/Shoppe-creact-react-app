import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Lightbox from 'react-image-lightbox';

import styles from './ProductRender.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCartArrowDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { QuestionsIcon, ReducerSales, ShoppeBrands, StarIcon, FreeShip, ShopIcon } from '@/components/icons';
import { AddProductNewCart } from './../../../Actions/AddProductNewCart';
import { AddProToCart } from './../../../Actions/AddProToCart';
import { useState } from 'react';
import 'react-image-lightbox/style.css';

const cx = classNames.bind(styles);

function RenderPageNew({ data }) {
    const disPatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpendShop, setIsOpendShop] = useState(false);

    const CountItemCart = useSelector((state) => state.AddCountCartProdu);

    const handleAddCart = (data) => {
        disPatch(AddProductNewCart(data));
    };

    const handleAddCartBuy = (data) => {
        disPatch(AddProToCart(data));
    };

    const handlePrevImage = () => {
        setIsOpen(!isOpen);
    };

    const handlePrevImageShop = () => {
        setIsOpendShop(!isOpendShop);
    };

    document.title = data.name;

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('options')}>
                    <Link to="/" className={cx('home-back')}>
                        Shoppe
                    </Link>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-d-r-t-e')} />
                    <span>Thời trang </span>
                    <FontAwesomeIcon icon={faAngleRight} className={cx('icon-d-r-t-e')} />
                    <p>{data.name}</p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('row', 'container-po')}>
                        <div className={cx('col m-4 l-4', 'img-parents')}>
                            <div
                                className={cx('view-img')}
                                style={{
                                    backgroundImage: `url(${data.image})`,
                                }}
                                onClick={() => {
                                    console.log('click me', isOpen);
                                    setIsOpen(true);
                                }}
                            ></div>
                            {isOpen && (
                                <Lightbox
                                    onClick={() => handlePrevImage()}
                                    mainSrc={data.image ? data.image : ''}
                                    onCloseRequest={() => setIsOpen(false)}
                                />
                            )}
                        </div>
                        <div className={cx('col m-8 l-8')}>
                            <div className={cx('parents-right')}>
                                <div className={cx('name')}>
                                    {data.favirote === 1 && <div className={cx('banner-favirote')}>Yêu Thích+</div>}
                                    <div className={cx('name-title')}>{data.name}</div>
                                </div>
                                <div className={cx('star-and-sold')}>
                                    <div className={cx('star')}>
                                        <span>{data.star}</span>
                                        <div>
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                            <StarIcon />
                                        </div>
                                    </div>
                                    <div className={cx('comments')}>
                                        <div className={cx('comments-1')}>{data.evaluatePeo}</div>
                                        <div className={cx('comments-2')}>Đánh Giá</div>
                                    </div>
                                    <div className={cx('sold')}>
                                        <div className={cx('sold-1')}>{data.sold}</div>
                                        <div className={cx('sold-2')}>Đã Bán</div>
                                        <div className={cx('sold-3')}>
                                            <QuestionsIcon className={cx('sold-4')} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('preventDefault-i-re-r')}>
                                    <div className={cx('price-reducer')}>
                                        <div className={cx('price-1')}>₫{Number(data.price) + 58}.000</div>
                                        <div className={cx('price-2')}>
                                            <div className={cx('price-reducer-1')}>
                                                ₫{Number(data.price) - 18}.000 - {data.price}
                                            </div>
                                            <div className={cx('price-reducer-2')}>{data.reducerprice}% giảm</div>
                                        </div>
                                    </div>
                                    <div className={cx('le-hoi')}>
                                        <ReducerSales className={cx('le-hoi-d-r')} />
                                        <div className={cx('start-sale')}>
                                            BẮT ĐẦU SAU 15 NGÀY
                                            <FontAwesomeIcon icon={faAngleRight} />
                                        </div>
                                    </div>
                                    <div className={cx('banner-brands')}>
                                        <ShoppeBrands className={cx('banner-svg-icon')} />
                                        <div className={cx('banner-parents-f-t-e')}>
                                            <div className={cx('banner-brands-1')}>
                                                <div className={cx('banner-brands-1-1')}>Gì Cũng Rẻ</div>
                                                <div className={cx('banner-brands-1-2')}>
                                                    <QuestionsIcon className={cx('sold-4')} />
                                                </div>
                                            </div>
                                            <div className={cx('banner-brands-2')}>
                                                Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('mini-voichers')}>
                                        <div className={cx('mini-vouchers__label')}>Mã giảm giá của Shop</div>
                                        <div className={cx('mini-vouchers__wrapper')}>
                                            <div>
                                                <span>{data.reducerprice}%</span>
                                                <span>Giảm</span>
                                            </div>
                                            <div>
                                                <span>Giảm ₫10k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('deal')}>
                                        <label>Deal Sốc</label>
                                        <div>Mua để nhận quà</div>
                                    </div>
                                    <div className={cx('transport')}>
                                        <div className={cx('title-transport')}>Vận Chuyển</div>
                                        <div className={cx('transport-wrapper')}>
                                            <div className={cx('free-transport')}>
                                                <FreeShip />
                                                <span className={cx('free-transport-span')}>Miễn phí vận chuyển</span>
                                            </div>
                                            <div className={cx('free-ship-min')}>
                                                Miễn phí vận chuyển cho đơn hàng trên ₫50.000
                                            </div>
                                            <div className={cx('free-ship-to')}>
                                                <div className={cx('ship-to-1')}>
                                                    <span>Vận chuyển tới</span>
                                                    <p>Phường Trương Định, Quận Hai Bà Trưng </p>
                                                </div>
                                                <div className={cx('ship-to-1-g-t')}>
                                                    <div className={cx('price-ship-to')}>Phí vận chuyển</div>
                                                    <span>₫0 </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('btn-handle')}>
                                        <div className={cx('btn-count')}>
                                            <span className={cx('count-sp')}>Số Lượng</span>
                                            <div className={cx('btn-count-1')}>
                                                <button
                                                    className={
                                                        CountItemCart >= 1
                                                            ? cx('btn-count-click')
                                                            : cx('btn-count-click', 'disable')
                                                    }
                                                >
                                                    -
                                                </button>
                                                <span>1</span>
                                                <button className={cx('btn-count-click')}>+</button>
                                            </div>
                                            <span className={cx('soluong')}>{data.counters} sản phẩm có sẵn</span>
                                        </div>
                                        <div className={cx('add_product-and-buy')}>
                                            <div className={cx('add_product-and-buy-1')}>
                                                <button onClick={() => handleAddCart(data)}>
                                                    <FontAwesomeIcon icon={faCartArrowDown} />
                                                    Thêm Vào Giỏ Hàng
                                                </button>
                                            </div>
                                            <div className={cx('add_product-and-buy-2')}>
                                                <Link to="/cart">
                                                    <button onClick={() => handleAddCartBuy(data)}>Mua Ngay</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('page-shop')}>
                    <div className={cx('left-page-shop')}>
                        <div className={cx('img-page-shop')}>
                            <img src={data.avatar} alt="" onClick={() => setIsOpendShop(true)} />
                            {isOpendShop && (
                                <Lightbox
                                    onClick={() => handlePrevImageShop()}
                                    mainSrc={data.avatar ? data.avatar : ''}
                                    onCloseRequest={() => setIsOpendShop(false)}
                                />
                            )}
                            {data.favirote && <div className={cx('banner-favirote-page-shop')}>Yêu Thích</div>}
                        </div>
                        <div className={cx('name-online')}>
                            <div className={cx('name-online-title')}>{data.nameShop}</div>
                            <div className={cx('name-online-online')}>Online 18 phút trước</div>
                            <div className={cx('name-online-view-shop')}>
                                <button>
                                    <FontAwesomeIcon icon={faComment} className={cx('name-online-d-t-r')} />
                                    Chat Ngay
                                </button>
                                <button>
                                    <ShopIcon />
                                    Xem Shop
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right-page-shop')}>
                        <div className={cx('row', 'no-gutters', 'content-f-r-t-e')}>
                            <div className={cx('m-3', 'l-3')}>
                                <div className={cx('flext')}>
                                    <p>Đánh Giá</p>
                                    <span>{data.evaluateShop}</span>
                                </div>
                                <div className={cx('flext')}>
                                    <p>Sản Phẩm</p>
                                    <span>{data.counters}</span>
                                </div>
                            </div>
                            <div className={cx('m-5', 'l-5')}>
                                <div className={cx('flext')}>
                                    <p>tỉ lệ phản hồi</p>
                                    <span>75%</span>
                                </div>
                                <div className={cx('flext')}>
                                    <p>thời gian phản hồi</p>
                                    <span>trong vài giờ</span>
                                </div>
                            </div>
                            <div className={cx('m-4', 'l-4')}>
                                <div className={cx('flext')}>
                                    <p>tham gia</p>
                                    <span>25 tháng trước</span>
                                </div>
                                <div className={cx('flext')}>
                                    <p>Người theo dõi</p>
                                    <span>43,6k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product-content-description')}>
                    <div className={cx('product-page-parents')}>
                        <div className={cx('product-title')}>CHI TIẾT SẢN PHẨM</div>
                        <div className={cx('product-content')}>
                            <div className={cx('chiks-eras')}>
                                <label className={cx('chksi-er')}>Danh Mục</label>
                                <div className={cx('product-fg-gf')}>
                                    <Link to="/">Shoppe</Link>
                                    <p>Thời trang</p>
                                </div>
                            </div>
                            <div className={cx('chiks-eras')}>
                                <label className={cx('chksi-er')}>Xuất xứ</label>
                                <div>Việt Nam</div>
                            </div>
                            <div className={cx('chiks-eras')}>
                                <label className={cx('chksi-er')}>Chất liệu</label>
                                <div>{data.matter}</div>
                            </div>
                            <div className={cx('chiks-eras')}>
                                <label className={cx('chksi-er')}>Kho hàng</label>
                                <div>{data.counters}</div>
                            </div>
                            <div className={cx('chiks-eras')}>
                                <label className={cx('chksi-er')}>Gửi từ</label>
                                <div>{data.addRess}</div>
                            </div>
                        </div>
                        <div className={cx('description-r-tr')}>
                            <div className={cx('product-title')}>Chi Tiết Sản Phẩm</div>
                            <div className={cx('description-p-tr')}>
                                <p dangerouslySetInnerHTML={{ __html: data.contentHTML }}></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/" className={cx('back-to-home')}>
                    Quay về trang chủ ?
                </Link>
            </div>
        </>
    );
}

export default RenderPageNew;

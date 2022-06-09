import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './ProductRender.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { QuestionsIcon, ReducerSales, ShoppeBrands, StarIcon, FreeShip } from '@/components/icons';

const cx = classNames.bind(styles);

function RenderPageNew({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('options')}>
                <Link to="/" className={cx('home-back')}>
                    Shoppe
                </Link>
                <FontAwesomeIcon icon={faAngleRight} />
                <span>Thời trang nữ</span>
                <p>Áo Thun Xanh Lá UNDER BROKEN Nam Nữ Ulzzang Unisex 1hitshop</p>
            </div>
            <div className={cx('content')}>
                <div className={cx('row', 'container-po')}>
                    <div className={cx('col m-4 l-4', 'img-parents')}>
                        <div
                            className={cx('view-img')}
                            style={{
                                backgroundImage: `url(${data.img})`,
                            }}
                        ></div>
                    </div>
                    <div className={cx('col m-8 l-8')}>
                        <div className={cx('parents-right')}>
                            <div className={cx('name')}>
                                {data.favirote && <div className={cx('banner-favirote')}>Yêu Thích+</div>}
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
                                    <div className={cx('comments-1')}>{data.sold}</div>
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
                                            <button className={cx('btn-count-click')}>+</button>
                                            <span>1</span>
                                            <button className={cx('btn-count-click')}>+</button>
                                        </div>
                                        <span className={cx('soluong')}>{data.counters} sản phẩm có sẵn</span>
                                    </div>
                                    <div className={cx('add_product-and-buy')}>
                                        <div className={cx('add_product-and-buy-1')}>
                                            <button>
                                                <FontAwesomeIcon icon={faCartArrowDown} />
                                                Thêm Vào Giỏ Hàng
                                            </button>
                                        </div>
                                        <div className={cx('add_product-and-buy-2')}>
                                            <button>Mua Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RenderPageNew;

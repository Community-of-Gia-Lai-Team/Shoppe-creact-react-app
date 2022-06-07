import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';
import ExpressImg from '@/assets/img/bankpaymun.png';
import AppgayImg from '@/assets/img/appgay.png';
import GoogleStoreImg from '@/assets/img/ggplay.png';
import AppStoreImg from '@/assets/img/appstore.png';
import ImgBackGround from '@/assets/img/bankpaymun.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide', 'container')}>
                <div className={cx('item-faqs', 'row no-gutters')}>
                    <div className={cx('item-g-t-r')}>
                        <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                        <ul className={cx('item-faqs-list')}>
                            <li className={cx('item-faqs-list-item')}>Trung Tâm Trợ Giúp</li>
                            <li className={cx('item-faqs-list-item')}>Shopee Blog</li>
                            <li className={cx('item-faqs-list-item')}>Shopee Mall</li>
                            <li className={cx('item-faqs-list-item')}>Hướng Dẫn Mua Hàng</li>
                            <li className={cx('item-faqs-list-item')}>Hướng Dẫn Bán Hàng</li>
                            <li className={cx('item-faqs-list-item')}>Thanh Toán</li>
                            <li className={cx('item-faqs-list-item')}>Shopee Xu</li>
                            <li className={cx('item-faqs-list-item')}>Vận Chuyển</li>
                            <li className={cx('item-faqs-list-item')}>Chăm Sóc Khách Hàng</li>
                        </ul>
                    </div>
                    <div className={cx('item-g-t-r')}>
                        <h4>VỀ SHOPEE</h4>
                        <ul className={cx('item-faqs-list')}>
                            <li className={cx('item-faqs-list-item')}>Giới Thiệu Về Shopee Việt Nam</li>
                            <li className={cx('item-faqs-list-item')}>Tuyển Dụngg</li>
                            <li className={cx('item-faqs-list-item')}>Điều Khoản Shopee</li>
                            <li className={cx('item-faqs-list-item')}>Chính Sách Bảo Mật</li>
                            <li className={cx('item-faqs-list-item')}>Chính Hãng</li>
                            <li className={cx('item-faqs-list-item')}>Kênh Người Bán</li>
                            <li className={cx('item-faqs-list-item')}>Flash Sales</li>
                            <li className={cx('item-faqs-list-item')}>Chương Trình Tiếp Thị Liên Kết Shopee</li>
                            <li className={cx('item-faqs-list-item')}>Liên Hệ Với Truyền Thông</li>
                        </ul>
                    </div>
                    <div className={cx('item-g-t-r')}>
                        <h4>THANH TOÁN</h4>
                        <ul className={cx('item-faqs-list', 'item-faqs-list-bank')}>
                            <li>
                                <div
                                    className={cx('visa-bank')}
                                    style={{
                                        backgroundImage: `url(${ExpressImg})`,
                                        width: '55px',
                                        height: '18px',
                                    }}
                                ></div>
                            </li>
                            <li>
                                <div
                                    className={cx('masster-bank')}
                                    style={{
                                        backgroundImage: `url(${ExpressImg})`,
                                        width: '55px',
                                        height: '29px',
                                    }}
                                ></div>
                            </li>
                            <li>
                                <div
                                    className={cx('JCB-bank')}
                                    style={{
                                        backgroundImage: `url(${ExpressImg})`,
                                        width: '55px',
                                        height: '23px',
                                    }}
                                ></div>
                            </li>
                            <li>
                                <div
                                    className={cx('amx-bank')}
                                    style={{
                                        backgroundImage: `url(${ExpressImg})`,
                                        width: '55px',
                                        height: '24px',
                                    }}
                                ></div>
                            </li>
                            <li>
                                <div
                                    className={cx('cod-bank')}
                                    style={{
                                        backgroundImage: `url(${ExpressImg})`,
                                        width: '55px',
                                        height: '29px',
                                    }}
                                ></div>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('item-g-t-r')}>
                        <h4>THEO DÕI CHÚNG TÔI TRÊN</h4>
                        <ul className={cx('item-faqs-list')}>
                            <li className={cx('item-faqs-list-item')}>
                                <FontAwesomeIcon icon={faFacebook} />
                                Facebook
                            </li>
                            <li className={cx('item-faqs-list-item')}>
                                <FontAwesomeIcon icon={faInstagram} />
                                Instagram
                            </li>
                            <li className={cx('item-faqs-list-item')}>
                                <FontAwesomeIcon icon={faLinkedin} />
                                Linkedin
                            </li>
                        </ul>
                    </div>
                    <div className={cx('item -g-t-r')}>
                        <h4>CHĂM SÓC KHÁCH HÀNG</h4>
                        <div className={cx('download')}>
                            <div className={cx('m-4')}>
                                <img src={AppStoreImg} alt="download" />
                            </div>
                            <div className={cx('m-4')}>
                                <img src={GoogleStoreImg} alt="download" />
                            </div>
                            <div className={cx('m-4')}>
                                <img src={AppgayImg} alt="download" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('directional')}>
                    <div className={cx('country')}>
                        <p>© 2022 Shopee. Tất cả các quyền được bảo lưu.</p>
                        <div>
                            <p>Quốc gia & Khu vực:</p>
                            <a href="https://shopee.sg/" className={cx('demo')}>
                                Singapore
                            </a>
                            <a href="https://shopee.sg/">InDonesia</a>
                            <a href="https://shopee.sg/">Thai Lan</a>
                            <a href="https://shopee.sg/">Đài loan</a>
                            <a href="https://shopee.sg/">Trung Quôc</a>
                            <a href="https://shopee.sg/">Blazzill</a>
                        </div>
                    </div>
                    <div className={cx('policy')}>
                        <a href="https://shopee.sg/">
                            CHÍNH SÁCH BẢO MẬT
                            <p></p>
                        </a>
                        <a href="https://shopee.sg/">
                            QUY CHẾ HOẠT ĐỘNG
                            <p></p>
                        </a>
                        <a href="https://shopee.sg/">
                            CHÍNH SÁCH VẬN CHUYỂN
                            <p></p>
                        </a>
                        <a href="https://shopee.sg/">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
                    </div>
                    <div className={cx('Commerce')}>
                        <div
                            className={cx('b-c-t')}
                            style={{
                                backgroundImage: `url(${ImgBackGround})`,
                            }}
                        ></div>
                        <div
                            className={cx('b-c-t')}
                            style={{
                                backgroundImage: `url(${ImgBackGround})`,
                            }}
                        ></div>
                    </div>
                    <div className={cx('introduce')}>
                        <p className={cx('company')}>Công ty TNHH Shopee</p>
                        <p>
                            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận
                            Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
                        </p>
                        <p>
                            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext
                            4678)
                        </p>
                        <p>
                            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
                        </p>
                        <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

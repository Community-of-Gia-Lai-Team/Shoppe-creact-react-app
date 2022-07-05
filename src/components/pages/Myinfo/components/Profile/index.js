import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const LinkAvatar = useSelector((state) => state.PathImgAvatar.link);
    const User = useSelector((state) => state.user);

    const user = JSON.parse(localStorage.getItem('userSave')) || User[0];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('profile-header')}>
                    <span>HỒ SƠ CỦA TÔI</span>
                    <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                </div>
                <div className={cx('profile-content')}>
                    <div className={cx('profile-chuk')}>
                        <label>Tên Đăng Nhập</label>
                        <div className={cx('profile-content-g-t-er')}>{user.email || 'bandadangnhap'}</div>
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Tên</label>
                        <div>
                            <input defaultValue={user.displayName || null} />
                        </div>
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Email</label>
                        <Link
                            to="email"
                            style={{
                                margin: 0,
                            }}
                        >
                            Thêm
                        </Link>
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Số Điện Thoại</label>
                        <p>*******813</p>
                        <Link to="phone">Thêm</Link>
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Tên Shop</label>
                        <div>
                            <input defaultValue="Trường Sơn 0911" />
                        </div>
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Giới Tính</label>
                        <input type="radio" name="check_Goi_tinh" />
                        Nam
                        <input type="radio" name="check_Goi_tinh" />
                        Nữ
                        <input type="radio" name="check_Goi_tinh" />
                        Khác
                    </div>
                    <div className={cx('profile-chuk')}>
                        <label>Ngày Sinh</label>
                        <select>
                            <option value="">09</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                        <select>
                            <option>11</option>
                        </select>
                        <select>
                            <option>2003</option>
                        </select>
                    </div>
                    <div className={cx('sub-mit-btn-profile')}>
                        <button>Lưu</button>
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('right-img')}>
                    <img src={user.photoURL || null} alt="" />
                </div>
                <div className={cx('right--modifine')}>
                    <input type="file" placeholder="none" name="file" />
                </div>

                <>
                    {LinkAvatar ? (
                        <a href="/" target="_blank" rel="noreferrer">
                            Link ảnh avatar demo: clickME
                        </a>
                    ) : (
                        <p>'Dụng lượng file tối đa 1 MB. Định dạng:.JPEG, .PNG'</p>
                    )}
                </>
            </div>
        </div>
    );
}

export default Profile;

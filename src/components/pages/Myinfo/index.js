/* eslint-disable jsx-a11y/iframe-has-title */
import { Link, Route, Routes } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Myinfo.module.scss';
import { PencilIcon } from '@/components/icons';
import UserProfileImg from '@/assets/img/userprofile.png';
import Profile from './components/Profile';
import { ActiveBtnNavProfile } from './../../../Actions/ActiveBtnNavProfile';

const cx = classNames.bind(styles);

function Myinfo() {
    const LinkAvatar = useSelector((state) => state.PathImgAvatar.link);
    const ListBtnNav = useSelector((state) => state.ActiveNavProfile.list);
    const IDActiveBtnNav = useSelector((state) => state.ActiveNavProfile.number);
    const user = useSelector((state) => state.user);

    const dispatCh = useDispatch();

    const handleClick = (index) => {
        dispatCh(ActiveBtnNavProfile(index));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-nav')}>
                <div className={cx('view-nav')}>
                    <div className={cx('img-d-r-t')}>
                        <img src={user[0]._delegate.photoURL} alt="" />
                    </div>
                    <div className={cx('img-avtar')}>
                        {/* <h3>{User.useraccount}</h3> */}
                        <PencilIcon className={cx('icon-pencil')} />
                        Sửa Hồ Sơ
                    </div>
                </div>
                <div className={cx('nav-content')}>
                    <div className={cx('tittle')}>
                        <img src={user[0]._delegate.photoURL} alt="" />
                        <p>Tài Khoản Của Tôi</p>
                    </div>
                    <>
                        {ListBtnNav.map((data, index) => (
                            <Link
                                key={index}
                                to={data.to}
                                className={IDActiveBtnNav === index ? cx('active') : ''}
                                onClick={() => handleClick(index)}
                            >
                                {data.name}
                            </Link>
                        ))}
                    </>
                </div>
            </div>
            <div className={cx('right-nav')}>
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route
                        path="video"
                        element={
                            <div className={cx('video')}>
                                <div className={cx('vide-d-r')}>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        autoPlay={true}
                                        src="https://www.youtube.com/embed/JwAI6zPdfq8?list=RDJwAI6zPdfq8"
                                        title="DẤU MƯA - SHIN NG - MỘT CẢM GIÁC QUÁ LẠ THƯỜNG - NHẠC REMIX HOT TREND TIKTOK 2022"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="bank"
                        element={
                            <div className={cx('bank')}>
                                <h2>Bạn chưa liên kết thẻ ngân hàng </h2>
                            </div>
                        }
                    />
                    <Route
                        path="profile/email"
                        element={
                            <div className={cx('bank')}>
                                <h2>Bạn chưa liên kết với email </h2>
                            </div>
                        }
                    />
                    <Route
                        path="profile/phone"
                        element={
                            <div className={cx('bank')}>
                                <h2>Bạn chưa liên kết với số điện thoại </h2>
                            </div>
                        }
                    />
                    <Route
                        path="address"
                        element={
                            <div className={cx('address')}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.524636027088!2d105.85043965245364!3d20.997400385556713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1655388021844!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        }
                    />
                </Routes>
            </div>
        </div>
    );
}

export default Myinfo;

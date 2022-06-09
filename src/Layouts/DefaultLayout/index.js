import className from 'classnames/bind';

import Nav from './Nav';
import styles from './DefaultLayout.module.scss';
import Footer from '@/components/pages/Footer';

const cx = className.bind(styles);

function DefaultLayoutAndPages({ Render, data = null, path = null }) {
    return (
        <div className={cx('wrapper')}>
            <Nav />
            <div className={cx('Content')}>
                <div className={cx('grid wide')}>
                    <Render data={data} path={path} />
                </div>
            </div>
            <div className={cx('m-border')}></div>
            <Footer />
        </div>
    );
}

export default DefaultLayoutAndPages;

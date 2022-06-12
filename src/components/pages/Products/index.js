import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Products.module.scss';
import { ActiveProductsPages } from '@/Actions/ActiveProductsPages';

import Render from './Render';

const cx = classNames.bind(styles);

Products.propTypes = {
    ListActivePages: propTypes.array,
    IdActiveProductsPages: propTypes.number,
    IDActiveProduct: propTypes.number,
};

Products.defaultProps = {
    ListActivePages: [],
    IdActiveProductsPages: null,
    IDActiveProduct: null,
};

function Products({ Res }) {
    const ListActivePages = useSelector((state) => state.ActiveProductsPagesBtn.list);
    const IdActiveProductsPages = useSelector((state) => state.ActiveProductsPagesBtn.idActive);

    const IDActiveProduct = useSelector((state) => state.ActiveNav.idActive);

    const disPatch = useDispatch();

    const handleClick = (index) => {
        disPatch(ActiveProductsPages(index));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                {Res.length > 0 &&
                    // eslint-disable-next-line array-callback-return
                    Res.map((data, index) => {
                        if (IDActiveProduct === 0) {
                            if (data) {
                                if (IdActiveProductsPages === 0) {
                                    if (index < 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                                if (IdActiveProductsPages === 1) {
                                    if (index > 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                            }
                        }
                        if (IDActiveProduct === 1) {
                            if (data.favirote && data.reducerprice.length > 0) {
                                if (IdActiveProductsPages === 0) {
                                    if (index < 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                                if (IdActiveProductsPages === 1) {
                                    if (index > 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                            }
                        }

                        if (IDActiveProduct === 2) {
                            if (data.favirote) {
                                if (IdActiveProductsPages === 0) {
                                    if (index < 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                                if (IdActiveProductsPages === 1) {
                                    if (index > 10) {
                                        return <Render data={data} key={data.id} />;
                                    }
                                }
                            }
                        }
                    })}
            </div>
            <div className={cx('next-page')}>
                <button>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                {ListActivePages.map((data, index) => (
                    <button
                        onClick={() => handleClick(index)}
                        key={index}
                        className={index === IdActiveProductsPages ? cx('active') : ''}
                    >
                        {data}
                    </button>
                ))}
                <button>...</button>
                <button>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
}

export default Products;

import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Category.module.scss';
import { addNewIDBtn } from './../../../../Actions/idActiveBtn';
import { addNewIDBtnPrice } from '@/Actions/idActivePrice';
import { ActiveProductsPages } from '@/Actions/ActiveProductsPages';

const cx = classNames.bind(styles);

Category.propTypes = {
    ListBtn: propTypes.array,
    listPrice: propTypes.array,
    ActiveBTn: propTypes.number,
    idActivePrice: propTypes.number,
    ActivePages: propTypes.number,
};

Category.defaultProps = {
    ListBtn: [],
    listPrice: [],
    ActiveBTn: null,
    idActivePrice: null,
    ActivePages: null,
};

function Category() {
    const ListBtn = useSelector((state) => state.ActiveBTn.list);
    const ActiveBTn = useSelector((state) => state.ActiveBTn.idActiveBtn);
    const listPrice = useSelector((state) => state.ActivePrice.list);
    const idActivePrice = useSelector((state) => state.ActivePrice.idActivePrice);
    const ActivePages = useSelector((state) => state.ActiveProductsPagesBtn.idActive);

    const disPatch = useDispatch();

    const handleClick = (index) => {
        disPatch(addNewIDBtn(index));
        disPatch(ActiveProductsPages(index));
    };

    const handleClickPrices = (index) => {
        disPatch(addNewIDBtnPrice(index));
    };

    const handleClickNextPages = (index) => {
        disPatch(ActiveProductsPages(index + 1));
    };

    const handleClickNextPagesDown = (index) => {
        disPatch(ActiveProductsPages(index - 1));
    };

    return (
        <div className={cx('category')}>
            <div className={cx('left-category')}>
                <h3>Xắp xếp theo</h3>
                {ListBtn.map((data, index) => (
                    <button
                        key={index}
                        className={index === ActiveBTn ? cx('btn-category', 'active') : cx('btn-category')}
                        onClick={() => handleClick(index)}
                    >
                        {data}
                    </button>
                ))}
                <div className={idActivePrice !== null ? cx('price-select', 'active-parents') : cx('price-select')}>
                    Giá <p>: {listPrice[idActivePrice]}</p>
                    <FontAwesomeIcon icon={faAngleDown} />
                    <ul>
                        {listPrice.map((data, index) => (
                            <li key={index} onClick={() => handleClickPrices(index)}>
                                Giá: {data}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={cx('next-category')}>
                <p>{ActivePages + 1}</p>/100
                <div>
                    <button
                        className={ActivePages < 1 ? cx('next-page', 'disabled') : cx('next-page')}
                        onClick={() => handleClickNextPagesDown(ActivePages)}
                    >
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    <button className={cx('next-page')} onClick={() => handleClickNextPages(ActivePages)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Category;

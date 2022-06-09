import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './NavProducts.module.scss';
import { addNewID } from '@/Actions/idActive';
import { ActiveProductsPages } from '@/Actions/ActiveProductsPages';

const cx = classNames.bind(styles);

NavProducts.propTypes = {
    DataEactiveList: propTypes.array,
    idActive: propTypes.number,
};

NavProducts.defaultProps = {
    DataEactiveList: [],
    idActive: null,
};

function NavProducts() {
    const DataEactiveList = useSelector((state) => state.ActiveNav.list);
    const idActive = useSelector((state) => state.ActiveNav.idActive);

    const disPatch = useDispatch();

    const handleActive = (index) => {
        const action = addNewID(index);

        disPatch(ActiveProductsPages(0));

        disPatch(action);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('heading')}>
                <FontAwesomeIcon icon={faBars} />
                <h3>Danh mục</h3>
            </div>
            <div className={cx('content')}>
                {DataEactiveList.map((data, index) => (
                    <div className={cx('item')} key={index}>
                        <button
                            onClick={() => {
                                handleActive(index);
                            }}
                            className={index === idActive ? cx('active') : ''}
                        >
                            {index === idActive ? <FontAwesomeIcon icon={faCaretRight} /> : ''}
                            {data}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavProducts;

import propTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@/components/pages/Modal';
import DefaultLayoutAndPages from '@/Layouts/DefaultLayout';
import { Login, Register } from '@/components/pages/Modal/form';
import ViewRender from './Layouts/DefaultLayout/ViewRende';
import ProductRender from './components/pages/ProductRender/index';
import Myinfo from './components/pages/Myinfo';
import CartLayoutPayMent from './Layouts/CartLayoutPayMent';
import QCIMG from '@/assets/img/quangcao.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

App.propTypes = {
    Products: propTypes.array,
};

App.defaultProps = {
    Products: [],
};

function App() {
    const PathActive = useSelector((state) => state.ActivePath.list);

    const User = JSON.parse(localStorage.getItem('user')) || [];

    const [Products, setProducts] = useState([]);

    localStorage.setItem('Products', JSON.stringify(Products));

    const PatActiveDone = JSON.parse(localStorage.getItem('PathActive')) || PathActive;
    const ProductsLocal = JSON.parse(localStorage.getItem('Products')) || [];

    useEffect(() => {
        fetch('https://api-shope-done.herokuapp.com/products')
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
            });
    }, []);

    const root = document.querySelector('#root');

    root.onclick = (e) => {
        if (e.target.closest('.span-qc')) {
            const QC = e.target.closest('.quang-cao');

            QC.style.display = 'none';
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayoutAndPages Render={ViewRender} />} />
                <Route path="/cart/*" element={<CartLayoutPayMent />} />
                <Route
                    path={`/${PatActiveDone.length > 0 ? PatActiveDone : ''}`}
                    element={
                        User.length > 0 ? (
                            <DefaultLayoutAndPages Render={ProductRender} path={PatActiveDone} data={ProductsLocal} />
                        ) : (
                            <Modal Uselink={Login} title="Đăng Nhập" />
                        )
                    }
                />
                <Route path="/account/*" element={<DefaultLayoutAndPages Render={Myinfo} />} />
                <Route path="/login-register/login" element={<Modal Uselink={Login} title="Đăng nhập" />} />
                <Route path="/login-register/register" element={<Modal Uselink={Register} title="Đăng ký" />} />
            </Routes>
            <div className="quang-cao">
                <div>
                    <span className="span-qc">
                        <FontAwesomeIcon icon={faXmark} />
                    </span>
                    <img src={QCIMG} alt="" />
                </div>
            </div>
        </div>
    );
}

export default App;

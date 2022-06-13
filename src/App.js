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

    const ProductsLocal = JSON.parse(localStorage.getItem('Products')) || [];

    useEffect(() => {
        fetch('https://api-shope-done.herokuapp.com/products')
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
            });
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayoutAndPages Render={ViewRender} />} />
                <Route
                    path={PathActive.length > 0 ? PathActive : ''}
                    element={
                        User.length > 0 ? (
                            <DefaultLayoutAndPages Render={ProductRender} path={PathActive} data={ProductsLocal} />
                        ) : (
                            <Modal Uselink={Login} title="Đăng Nhập" />
                        )
                    }
                />
                <Route
                    path={User.leng > 0 && encodeURI(User[0].user.useraccount)}
                    element={<DefaultLayoutAndPages Render={Myinfo} />}
                />
                <Route path="/login-register/login" element={<Modal Uselink={Login} title="Đăng nhập" />} />
                <Route path="/login-register/register" element={<Modal Uselink={Register} title="Đăng ký" />} />
            </Routes>
        </div>
    );
}

export default App;

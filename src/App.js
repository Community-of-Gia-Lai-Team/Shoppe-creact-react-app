import propTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from '@/components/pages/Modal';
import DefaultLayoutAndPages from '@/Layouts/DefaultLayout';
import { Login, Register } from '@/components/pages/Modal/form';
import ViewRender from './Layouts/DefaultLayout/ViewRende';
import ProductRender from './components/pages/ProductRender/index';

App.propTypes = {
    Products: propTypes.array,
};

App.defaultProps = {
    Products: [],
};

function App() {
    const PathActive = useSelector((state) => state.ActivePath.list);
    const UserAccount = useSelector((state) => state.user);

    const [Products, setProducts] = useState([]);

    const [user, setUser] = useState();

    useEffect(() => {
        fetch('https://api-shope-done.herokuapp.com/users')
            .then((response) => response.json())
            .then((response) => {
                setUser(response);
            });

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
                        UserAccount.length > 0 ? (
                            <DefaultLayoutAndPages Render={ProductRender} path={PathActive} data={Products} />
                        ) : (
                            <Modal Uselink={Login} user={user} title="Đăng Nhập" />
                        )
                    }
                />
                <Route
                    path=""
                    element={
                        UserAccount.length > 0 ? (
                            <Modal Uselink={Register} user={user} title="Đăng nhập" />
                        ) : (
                            <Modal Uselink={Login} user={user} title="Đăng ky" />
                        )
                    }
                />
                <Route path="/login-register/login" element={<Modal Uselink={Login} user={user} title="Đăng nhập" />} />
                <Route
                    path="/login-register/register"
                    element={<Modal Uselink={Register} user={user} title="Đăng ký" />}
                />
            </Routes>
        </div>
    );
}

export default App;

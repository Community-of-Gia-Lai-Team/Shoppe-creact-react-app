import propTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import firebase from 'firebase/compat/app';

import Modal from '@/components/pages/Modal';
import DefaultLayoutAndPages from '@/Layouts/DefaultLayout';
import { Login, Register } from '@/components/pages/Modal/form';
import ViewRender from './Layouts/DefaultLayout/ViewRende';
import ProductRender from './components/pages/ProductRender/index';
import Myinfo from './components/pages/Myinfo';
import CartLayoutPayMent from './Layouts/CartLayoutPayMent';
import QC from './components/pages/QC';
import { addNewUser } from '@/Actions/user';
import TestAPI from './components/Test';
import { getAllProducts } from './services/Product';
import { emitter } from './emitter';

App.propTypes = {
    Products: propTypes.array,
};

App.defaultProps = {
    Products: [],
};

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    // ...
};
firebase.initializeApp(config);

function App() {
    const disPatch = useDispatch();

    // user login to save
    const user = useSelector((state) => state.user);

    const [Products, setProducts] = useState([]);

    emitter.on('CALL_API_AGAIN_LOADING_PRODUCT', (data) => {
        setProducts(data);
    });

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('User is not login');
                return;
            } else {
                disPatch(addNewUser(user));

                // localStorage.setItem('userSave', JSON.stringify(user));

                // console.log('User Name: ', user.displayName);

                // const token = await user.getToken();

                // console.log('Token: ', token);
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Listen to the Firebase Auth state and set the local state.

    const root = document.querySelector('#root');

    root.onclick = (e) => {
        if (e.target.closest('.span-qc')) {
            const QC = e.target.closest('.quang-cao');

            QC.style.display = 'none';
        }
    };

    console.log('check state :', Products);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayoutAndPages Render={ViewRender} />} />
                <Route path="/cart/*" element={<CartLayoutPayMent />} />
                <Route
                    path="/detail-product/*"
                    element={
                        user.length > 0 ? (
                            <DefaultLayoutAndPages Render={ProductRender} />
                        ) : (
                            <Modal Uselink={Login} title="Đăng Nhập" />
                        )
                    }
                />
                <Route path="/account/*" element={<DefaultLayoutAndPages Render={Myinfo} />} />
                <Route path="/testAPi" element={<TestAPI />} />
                <Route path="/login-register/login" element={<Modal Uselink={Login} title="Đăng nhập" />} />
                <Route path="/login-register/register" element={<Modal Uselink={Register} title="Đăng ký" />} />
            </Routes>

            {window.performance.navigation.type === 1 && <QC />} 
        </div>
    );
}

export default App;

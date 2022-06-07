import { Routes, Route } from 'react-router-dom';

import Modal from '@/Modal';
import DefaultLayoutAndPages from '@/Layouts/DefaultLayout';
import { Login, Register } from '@/Modal/form';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayoutAndPages />} />
                <Route path="/login-register/login" element={<Modal Uselink={Login} title="Đăng nhập" />} />
                <Route path="/login-register/register" element={<Modal Uselink={Register} title="Đăng ký" />} />
            </Routes>
        </div>
    );
}

export default App;

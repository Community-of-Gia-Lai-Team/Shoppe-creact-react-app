import { Link } from 'react-router-dom';

function Myinfo() {
    return (
        <div>
            <h2>Tài Khoản của bạn </h2>
            <h2>
                Trang này đang trong quá trình phát triển xin thông cảm
                <Link to="/">Nhấn vào đây để quay lại</Link>
            </h2>

            <p>Cảm ơn bạn đã ghé qua</p>
        </div>
    );
}

export default Myinfo;

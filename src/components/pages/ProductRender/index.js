import { getDetailProducts } from '@/services/Product';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RenderPageNew from './RenderPageNew';

function ProductRender(props) {
    const [data, setData] = useState([]);

    let id = useSelector((state) => state.PathImgAvatar.id);

    if (!id) {
        id = JSON.parse(localStorage.getItem('ID'));
    }

    useEffect(() => {
        try {
            const FetCh = async () => {
                const Res = await getDetailProducts(id);

                if (Res && Res.errCode === 0) {
                    setData(Res.data);
                }
            };

            FetCh();
        } catch (error) {
            alert('co loi xay ra');
        }
    }, [id]);

    console.log('check data :', data);

    return (
        <>
            <RenderPageNew data={data} />
        </>
    );
}

export default ProductRender;

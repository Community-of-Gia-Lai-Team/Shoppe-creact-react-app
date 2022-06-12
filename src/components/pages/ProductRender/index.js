import RenderPageNew from './RenderPageNew';

function ProductRender({ data, path }) {
    console.log(path);

    return (
        <>
            {data.length > 0 &&
                // eslint-disable-next-line array-callback-return
                data.map((res, index) => {
                    if (res.link === path) {
                        return <RenderPageNew data={res} key={index} />;
                    }
                })}
        </>
    );
}

export default ProductRender;

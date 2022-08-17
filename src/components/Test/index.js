import { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';

function TestAPI() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/api/v1/products')
            .then((response) => response.json())
            .then((response) => setData(response));
    }, []);

    return (
        <div>
            <Container fluid="sm">
                {data.map((data) => (
                    <ListGroup style={{ marginLeft: 30 }} key={data.name}>
                        <ListGroupItem>{data.image}</ListGroupItem>
                        <ListGroupItem>{data.name}</ListGroupItem>
                        <ListGroupItem>{data.star}</ListGroupItem>
                        <ListGroupItem>{data.sold}</ListGroupItem>
                        <ListGroupItem>{data.price}</ListGroupItem>
                        <ListGroupItem>{data.avatar}</ListGroupItem>
                        <ListGroupItem>{data.description}</ListGroupItem>
                    </ListGroup>
                ))}
            </Container>
            <div>
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
                <input />
            </div>
        </div>
    );
}

export default TestAPI;

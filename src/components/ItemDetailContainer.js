import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import productsMock from "../mockData.js";

function ItemDetailContainer({ idItem = 2 }) {

    const [item, setItem] = useState({});

    useEffect(() => {
        
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                let filtered = productsMock().filter(prod => prod.id === idItem);
                resolve(filtered);
            }, 2000);
        })

        getItem.then((res) => setItem(res[0]));
    }, [idItem])

    return (
        <Container>
            <Row md={12}>
                <ItemDetail item={item} />
            </Row>
        </Container>
    )
}

export default ItemDetailContainer;
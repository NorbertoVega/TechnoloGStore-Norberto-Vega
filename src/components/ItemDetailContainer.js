import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import productsMock from "../mockData.js";
import { useParams } from "react-router-dom";
import Header from "./Header";

function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                let filtered = productsMock().filter(prod => prod.id === Number(id));
                resolve(filtered);
            }, 2000);
        })

        getItem.then((res) => setItem(res[0]));

    }, [id])

    return (
        <>
            <Header title={item.title} />
            <Container>
                <Row md={12}>
                    <ItemDetail item={item} />
                </Row>
            </Container>
        </>
    )
}

export default ItemDetailContainer;
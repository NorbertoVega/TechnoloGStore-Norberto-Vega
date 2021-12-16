import React, { useState, useEffect } from 'react';
import Item from "./Item";
import Row from "react-bootstrap/Row";


function ItemList() {

    const [productsArray, setProductsArray] = useState([])

    useEffect(() => {

        const productsMock = [
            {
                id: 1, title: "Led Monitor Samsung", price: "25.499",
                pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_796587-MLA46165231779_052021-F.webp",
                stock: 5, initialValue: 1
            },
            {
                id: 2, title: "Gabinete Cooler Noga 8609", price: "3840",
                pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_698511-MLA28912700817_122018-F.webp",
                stock: 4, initialValue: 1
            },
            {
                id: 3, title: "Mouse Redragon", price: "2850",
                pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_961390-MLA31738054777_082019-F.webp",
                stock: 0, initialValue: 0
            },
            {
                id: 4, title: "Teclado Logitech", price: "3799",
                pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_2X_865567-MLA46869059586_072021-F.webp",
                stock: 10, initialValue: 1
            }
        ]

        const asynncMock = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsMock);
            }, 2000);
        })

        asynncMock.then((res) => setProductsArray(res));

    }, [])

    return (
        <Row md={12}>
            {productsArray.map((value) => {
                return <Item key={value.id} title={value.title} price={value.price} pictureUrl={value.pictureUrl} stock={value.stock} initialValue={value.initialValue} />
            })}
        </Row>
    )
}

export default ItemList;


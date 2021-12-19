import React, { useState, useEffect } from 'react';
import Item from "./Item";
import Row from "react-bootstrap/Row";
import productsMock from "../mockData.js";

function ItemList() {

    const [productsArray, setProductsArray] = useState([])

    useEffect(() => {

        const asynncMock = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productsMock());
            }, 2000);
        })

        asynncMock.then((res) => setProductsArray(res));

    }, [])

    return (
        <Row md={12}>
            {productsArray.map((value) => {
                return <Item key={value.id} title={value.title} price={value.price} pictureUrl={value.pictureUrl} />
            })}
        </Row>
    )
}

export default ItemList;


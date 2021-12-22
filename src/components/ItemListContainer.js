import Container from "react-bootstrap/Container";
import "../styles/ItemListContainerStyles.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productsMock from "../mockData.js";
import Header from "./Header";

function ItemListContainer() {

    const [productsArray, setProductsArray] = useState([])
    const { categoryName } = useParams();

    useEffect(() => {

        const filterProductsByCategory = () => {
            if (categoryName === undefined)
                return productsMock();
            else
                return productsMock().filter(prod => prod.category === categoryName);
        }

        const asynncMock = new Promise((resolve) => {
            setTimeout(() => {
                resolve(filterProductsByCategory());
            }, 2000);
        })

        asynncMock.then((res) => setProductsArray(res));

    }, [categoryName]);


    const showCategoryName = () => categoryName === undefined ? "TecnoloG Products" : categoryName.replace(categoryName[0], categoryName[0].toUpperCase());

    return (
        <>
            <Header title={showCategoryName()} />
            <Container className="mb-5">
                <ItemList productArray={productsArray} />
            </Container>
        </>
    )
}

export default ItemListContainer;
import CartContext from "../context/CartContext";
import React, { useContext, useState } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import "../styles/CartStyles.css"

const Cart = () => {

    const cartContext = useContext(CartContext);
    const [products, setProducts] = useState(cartContext.getCartProducts());

    const emptyCart = () => {
        cartContext.clear();
    }

    const updateCart = () => {
        setProducts(cartContext.getCartProducts())
    }

    window.addEventListener('cartHasChanged', updateCart);

    return (
        <>
            <Header title="Carrito" />
            {products?.length === 0 ?
                <div className="center-container">
                    <h1>El Carrito está vacío</h1>
                </div>
                :
                <Container>
                    <Row md={12}>
                        {products.map((prod) => {
                            return <div key={prod.id} className="center-container cart-item">
                                <p>{prod?.title}</p>
                                <p>Cantidad: {prod?.quantity}</p>
                                <p>Precio por unidad: ${prod?.price}</p>
                            </div>
                        })}
                    </Row>
                    <div className="center-container">
                        <button onClick={emptyCart} className="empty-cart-button">Vaciar Carrito</button>
                    </div>
                </Container>}
        </>
    )
}

export default Cart;
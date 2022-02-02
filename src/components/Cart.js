import React, { useContext, useState, useEffect } from "react";
import CartContext from "../context/CartContext";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import "../styles/CartStyles.css";
import { NavLink } from "react-router-dom";
import EmptyCartIcon from "../img/empty-cart.png";
import Spinner from "./Spinner";
import succesIcon from "../img/sucess-icon.png";
import CartItem from "./CartItem";
import CartForm from "./CartForm";

const Cart = () => {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const cartContext = useContext(CartContext);
    const [products, setProducts] = useState(cartContext.getCartProducts());
    const [orderId, setOrderId] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    let total = cartContext.getTotal();

    const updateCart = () => {
        setProducts(cartContext.getCartProducts())
    }

    const emptyCart = () => {
        cartContext.clear();
        updateCart();
    }

    const onUpdateProduct = (currentQuantity, id) => {
        cartContext.updateQuantity(id, currentQuantity);
        forceUpdate();
    }

    const onDeleteProduct = (id) => {
        cartContext.removeItem(id);
        forceUpdate();
    }

    const confirmOrder = (e) => {
        cartContext.confirmOrder(e, setOrderId, setIsLoading, setError)
    }

    useEffect(() => {

    }, [products])

    const EmptyCart = () => {

        return (
            <div className="cart-item-container">
                <h1>El Carrito está vacío</h1>
                <img src={EmptyCartIcon} className="empty-cart" alt="carrito vacío" />
                <NavLink to={"/"}><button className="ir-a-productos-button">Volver a Productos</button></NavLink>
            </div>
        )
    }

    const OrderResult = () => {

        return (
            <div className="cart-item order-result">
                <img src={succesIcon} alt="imágen orden exitosa" />
                <p className="order-sucess">La orden se procesó con éxito!!</p>
                <p>Id de la orden: {orderId}</p>
            </div>
        )
    }

    const EmptyCartButtonAndTotal = () => {

        return (
            <div className="cart-item total-container">
                <button onClick={emptyCart} className="empty-cart-button">Vaciar Carrito</button>
                <p className="total">Total: ${total}</p>
            </div>
        )
    }

    return (
        <>
            <Header title="Carrito" />
            {isLoading ?
                <Spinner />
                :
                <>
                    {products?.length === 0 && orderId === 0 ?
                        <EmptyCart />
                        :
                        <Container>
                            <Row md={12} className="cart-item-container">
                                {orderId === 0 ?
                                    <>
                                        {products.map((prod) => {
                                            return <CartItem prod={prod} onUpdateProduct={onUpdateProduct} onDeleteProduct={onDeleteProduct} />
                                        })}
                                        <EmptyCartButtonAndTotal />
                                        <CartForm confirmOrder={confirmOrder} error={error} />
                                    </>
                                    :
                                    <OrderResult />
                                }
                            </Row>
                        </Container>
                    }
                </>
            }
        </>
    )
}

export default Cart;
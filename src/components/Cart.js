import CartContext from "../context/CartContext";
import React, { useContext, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import "../styles/CartStyles.css";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";
import EmptyCartIcon from "../img/empty-cart.png";

const Cart = () => {

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const cartContext = useContext(CartContext);
    const [products, setProducts] = useState(cartContext.getCartProducts());
    let total = cartContext.getTotal();;

    const updateCart = () => {
        setProducts(cartContext.getCartProducts())
    }

    const emptyCart = () => {
        cartContext.clear();
        updateCart();
    }

    const onUpdateProduct = (currentQuantity, id) => {
        console.log("Producto actualizado.");
        console.log("currentQuantity: ", currentQuantity);
        console.log("id: ", id);
        cartContext.updateQuantity(id, currentQuantity);
        forceUpdate();
    }

    const onDeleteProduct = (id) => {
        console.log("Producto eliminado.");
        console.log("id: ", id);
        cartContext.removeItem(id);
        console.log("carrito luego de eliminar: ", products);
        forceUpdate();
    }

    useEffect(() => {

    }, [products])

    return (
        <>
            <Header title="Carrito" />
            {products?.length === 0 ?
                <div className="cart-item-container">
                    <h1>El Carrito está vacío</h1>
                    <img src={EmptyCartIcon} className="empty-cart" alt="carrito vacío"/>
                    <NavLink to={"/"}><button className="ir-a-productos-button">Volver a Productos</button></NavLink>
                </div>
                :
                <Container>
                    <Row md={12} className="cart-item-container">
                        {products.map((prod) => {
                            return <div key={prod.id} className="cart-item">
                                <div className="img-item-container">
                                    <img src={prod?.pictureUrl} className="image-cart" alt="Imagen de producto" />
                                </div>
                                <div className="title-unit-price-container">
                                    <p>{prod?.title}</p>
                                    <p>Precio por unidad: ${prod?.price}</p>
                                </div>
                                <div className="update-quantity-container">
                                    <ItemCount initialValue={prod?.quantity} stock={prod.stock} onAdd={onUpdateProduct} buttonLabel="Actualizar" id={prod.id} />
                                </div>
                                <div className="subtotal-container">
                                    <p>Subtotal: ${prod.price * prod.quantity}</p>
                                    <button onClick={() => onDeleteProduct(prod.id)} className="delete-button">Quitar del Carrito</button>
                                </div>
                            </div>
                        })}
                        <div className="cart-item total-container">
                            <button onClick={emptyCart} className="empty-cart-button">Vaciar Carrito</button>
                            <p className="total">Total: ${total}</p>
                        </div>
                    </Row>
                </Container>}
        </>
    )
}

export default Cart;
import ItemCount from "./ItemCount";
import "../styles/ItemDetailStyles.css";
import React, { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";
import Toast from "react-bootstrap/Toast";


function ItemDetail({ item }) {

    const cartContext = useContext(CartContext);
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState(0);
    const [initialValue, setInitialVaule] = useState(1);
    const [stock, setStock] = useState(1);
    const [terminarCompra, setTerminarCompra] = useState(false);

    const onAdd = (currentQuantity) => {
        console.log("currentQuantity: ", currentQuantity)
        setCartItems(currentQuantity)
        console.log("cartItems: ", cartItems);
        cartContext.addItem(item, currentQuantity);
        //cartContext.addItem(item, cartItems);
        setTerminarCompra(true);
        setShow(true);
    }

    useEffect(() => {
        setInitialVaule(item.initialValue);
        setStock(item.stock);
    }, [item])

    return (
        <>
            <div className="item-detail-container">
                <div>
                    <img src={item?.pictureUrl} className="detail-image" alt="Imagen de producto" />
                </div>
                <div className="detail-info">
                    <p className="detail-title">Descripción:</p>
                    <p className="detail-description">{item?.description}</p>
                    <p className="detail-price">Precio: ${item?.price}</p>
                    <p className="detail-stock">Quedan {item?.stock} unidades disponibles</p>
                    {terminarCompra ?
                        <NavLink to={"/cart"}><button className="ir-carrito-button">Terminar Compra</button></NavLink>
                        :
                        <ItemCount initialValue={initialValue} stock={stock} onAdd={onAdd} />
                    }
                </div>
            </div>
            <div className="centrar-toasts">
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Body className="centrar-toast">Agregado al carrito!</Toast.Body>
                </Toast>
            </div>
        </>
    )
}

export default ItemDetail;
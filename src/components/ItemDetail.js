import ItemCount from "./ItemCount";
import "../styles/ItemDetailStyles.css";
import Toast from "react-bootstrap/Toast";
import React, { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import { NavLink } from "react-router-dom";


function ItemDetail({ item }) {

    const cartContext = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const onAdd = () => {
        if (item.stock === 0) setError(true);
        if (quantity < item.stock) setQuantity(quantity + 1);
    }

    const onDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    }

    const onAddToCart = () => {
        if (item.stock !== 0)
            setShow(true);
        else
            setError(true);
        cartContext.addItem(item, quantity)
        setQuantity(1);
    }
    
    window.addEventListener('addQuantity', onAdd);
    window.addEventListener('decreaseQuantity', onDecrease);

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
                    <ItemCount
                        currentQuantity={quantity}
                    />
                    <button onClick={onAddToCart} className="agregar-button">Agregar al carrito</button>
                    <NavLink to={"/cart"}><button className="ir-carrito-button">Ir al carrito</button></NavLink>
                </div>
            </div>
            <div className="centrar-toasts">
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Body className="centrar-toast">Agregado al carrito!</Toast.Body>
                </Toast>
                <Toast onClose={() => setError(false)} show={error} delay={2000} autohide>
                    <Toast.Body className="centrar-toast">No hay Stock.</Toast.Body>
                </Toast>
            </div>
        </>
    )
}

export default ItemDetail;
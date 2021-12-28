import ItemCount from "./ItemCount";
import "../styles/ItemDetailStyles.css";
import Toast from "react-bootstrap/Toast";
import React, { useState } from "react";

function ItemDetail({ item }) {

    const [quantity, setQuantity] = useState(1);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const onAdd = (currentValue) => {
        if (item.stock === 0)
            setError(true);

        if (currentValue < item.stock)
            setQuantity(currentValue = currentValue + 1);
    }

    const onDecrease = (currentValue) => {
        if (currentValue > 1)
            setQuantity(currentValue = currentValue - 1);
    }

    const onAddToCart = () => {
        if (item.stock !== 0)
            setShow(true);
        else
            setError(true);
        setQuantity(1)
    }

    return (
        <>
            <div className="item-detail-container">
                <div>
                    <img src={item.pictureUrl} className="detail-image" alt="Imagen de producto" />
                </div>
                <div className="detail-info">
                    <p className="detail-title">Descripción:</p>
                    <p className="detail-description">{item.description}</p>
                    <p className="detail-price">Precio: ${item.price}</p>
                    <p className="detail-stock">Quedan {item.stock} unidades disponibles</p>
                    <ItemCount
                        addQuantity={q => onAdd(q)}
                        decreaseQuantity={q => onDecrease(q)}
                        currentQuantity={quantity}
                        addTocart={() => onAddToCart()} />
                </div>
            </div>
            <div>
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
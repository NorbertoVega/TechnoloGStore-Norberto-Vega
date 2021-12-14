import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "../styles/ItemCountStyles.css";
import plus from "../img/plus-icon.png";
import minus from "../img/minus-icon.png";
import Toast  from "react-bootstrap/Toast";


function ItemCount({ initialValue = 0, stock = 0 }) {

    const [quantity, setQuantity] = useState(initialValue);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(false);

    const onAdd = () => {
        if (stock === 0)
            setError(true);
            
        if (quantity < stock)
            setQuantity((prev) => prev + 1);
    }

    const onDecrease = () => {
        if (quantity > 1)
            setQuantity((prev) => prev - 1);
    }

    const showMessage = () => {
        if (stock !== 0)
            setShow(true);
        else
            setError(true);
    }

    return (
        <div className="counter-container">
            <div className="control-container">
                <div onClick={onAdd} className="circle-control-button size"><Image src={plus} className="size" /></div>
                <span>{quantity}</span>
                <div onClick={onDecrease} className="circle-control-button size"><Image src={minus} className="size" /></div>
            </div>
            <button onClick={showMessage}>Agregar al carrito</button>
            
            <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                <Toast.Body className="centrar-toast">Agregado al carrito!</Toast.Body>
            </Toast>
            <Toast onClose={() => setError(false)} show={error} delay={2000} autohide>
                <Toast.Body className="centrar-toast">No hay Stock.</Toast.Body>
            </Toast>
        </div>
    )
}

export default ItemCount;


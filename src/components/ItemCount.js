import React, { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import "../styles/ItemCountStyles.css";
import plus from "../img/plus-icon.png";
import minus from "../img/minus-icon.png";
import Toast from "react-bootstrap/Toast";


function ItemCount({ initialValue, stock, onAdd }) {

    const [currentQuantity, setCurrentQuantity] = useState(initialValue);
    const [error, setError] = useState(false)

    const onIncrease = () => {
        if (currentQuantity < stock) setCurrentQuantity(currentQuantity + 1);
    }

    const onDecrease = () => {
        if (currentQuantity > 1) setCurrentQuantity(currentQuantity - 1);
    }

    const addHandler = () => {
        if (currentQuantity <= stock)
            onAdd(currentQuantity);
        else
            setError(true);
    }

    useEffect(() => {

    }, [currentQuantity])

    return (
        <>
            <div className="counter-container">
                <div className="control-container">
                    <div onClick={onIncrease} className="circle-control-button size"><Image src={plus} className="size" /></div>
                    <span>{currentQuantity}</span>
                    <div onClick={onDecrease} className="circle-control-button size"><Image src={minus} className="size" /></div>
                </div>
                <button onClick={addHandler} className="agregar-button">Agregar al carrito</button>
            </div>
            <Toast onClose={() => setError(false)} show={error} delay={2000} autohide>
                <Toast.Body className="centrar-toast">No hay Stock.</Toast.Body>
            </Toast>
        </>

    )
}

export default ItemCount;


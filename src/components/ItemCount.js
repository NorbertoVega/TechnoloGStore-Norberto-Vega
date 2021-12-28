import React from "react";
import Image from "react-bootstrap/Image";
import "../styles/ItemCountStyles.css";
import plus from "../img/plus-icon.png";
import minus from "../img/minus-icon.png";
import { NavLink } from "react-router-dom";


function ItemCount({currentQuantity, addQuantity, decreaseQuantity, addTocart}) {

    const onAddHandler = () => addQuantity(currentQuantity);
    const onDecreaseHandler = () => decreaseQuantity(currentQuantity);
    const addToCartHandler = () => addTocart();

    return (
        <div className="counter-container">
            <div className="control-container">
                <div onClick={onAddHandler} className="circle-control-button size"><Image src={plus} className="size" /></div>
                <span>{currentQuantity}</span>
                <div onClick={onDecreaseHandler} className="circle-control-button size"><Image src={minus} className="size" /></div>
            </div>
            <button onClick={addToCartHandler}>Agregar al carrito</button>
            <NavLink to={"/cart"}><button onClick={addToCartHandler} className="finalizar-button">Finalizar Compra</button></NavLink>
        </div>
    )
}

export default ItemCount;


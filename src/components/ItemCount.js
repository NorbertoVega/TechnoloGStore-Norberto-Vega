import React from "react";
import Image from "react-bootstrap/Image";
import "../styles/ItemCountStyles.css";
import plus from "../img/plus-icon.png";
import minus from "../img/minus-icon.png";


function ItemCount({currentQuantity}) {

    const onAddHandler = () => window.dispatchEvent(new CustomEvent("addQuantity"));
    const onDecreaseHandler = () => window.dispatchEvent(new CustomEvent("decreaseQuantity"));

    return (
        <div className="counter-container">
            <div className="control-container">
                <div onClick={onAddHandler} className="circle-control-button size"><Image src={plus} className="size" /></div>
                <span>{currentQuantity}</span>
                <div onClick={onDecreaseHandler} className="circle-control-button size"><Image src={minus} className="size" /></div>
            </div>          
        </div>
    )
}

export default ItemCount;


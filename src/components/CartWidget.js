import Image from "react-bootstrap/Image";
import cart from "../img/shopping-cart.png";
import "../styles/CartWidgetStyles.css";
import CartContext from "../context/CartContext";
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

function CartWidget() {

    const cartContext = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const quantityChangedHandler = () => {
        setQuantity(cartContext.getQuantityCartWidget());
    }

    window.addEventListener('quantityChanged', quantityChangedHandler);

    return (
        <NavLink to={"/cart"}>
            <div className="circle">
                <Image src={cart} className="size" />
                <p>{quantity}</p>
            </div>
        </NavLink>
    )
}

export default CartWidget;
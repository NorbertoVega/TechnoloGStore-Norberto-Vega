import React from "react";
import CartContext from "../context/CartContext";

function CartProvider({ children }) {
    let cartProducts = [];
    let quantityCartWidget = 0;

    function addItem(item, quantity) {
        quantityCartWidget += quantity;
        if (isInCart(item.id)) {
            const position = getPositionAtCart(item.id);
            cartProducts[position].quantity += quantity;
        }
        else {
            const itemCart = { ...item, quantity: quantity }
            cartProducts.push(itemCart);
        }
        window.dispatchEvent(new CustomEvent("quantityChanged"));
    }

    function removeItem(itemId) {
        if (isInCart(itemId)) {
            const position = getPositionAtCart(itemId);
            quantityCartWidget -= cartProducts[position].quantity;
            cartProducts.splice(position, 1);
        }
    }

    function clear() {
        cartProducts = [];
        quantityCartWidget = 0;
        window.dispatchEvent(new CustomEvent("cartHasChanged"));
        window.dispatchEvent(new CustomEvent("quantityChanged"));
    }

    function isInCart(id) {
        const founded = cartProducts.find(p => p.id === id);
        return founded === undefined ? false : true;
    }

    function getPositionAtCart(id) {
        return cartProducts.findIndex(p => p.id === id);
    }

    function getCartProducts() {
        return cartProducts;
    }

    function getQuantityCartWidget() {
        return quantityCartWidget;
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, getCartProducts, getQuantityCartWidget }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
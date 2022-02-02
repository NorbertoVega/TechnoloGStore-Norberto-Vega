import React from "react";
import CartContext from "../context/CartContext";
import { getFirestore, collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";

function CartProvider({ children }) {
    let cartProducts = [];
    let quantityCartWidget = 0;

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

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
            window.dispatchEvent(new CustomEvent("quantityChanged"));
        }
    }

    function clear() {
        cartProducts = [];
        quantityCartWidget = 0;
        window.dispatchEvent(new CustomEvent("quantityChanged"));
    }

    function updateQuantity(itemId, newQuantity) {
        if (isInCart(itemId)) {
            const position = getPositionAtCart(itemId);
            quantityCartWidget -= cartProducts[position].quantity;
            quantityCartWidget += newQuantity;
            cartProducts[position].quantity = newQuantity;
            window.dispatchEvent(new CustomEvent("quantityChanged"));
        }
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

    function getTotal() {
        let total = 0;
        if (cartProducts !== null && cartProducts !== undefined) {
            cartProducts.forEach((prod) => {
                total += prod.price * prod.quantity;
            });
        }
        return total;
    }

    const updateProducts = (orderItems) => {

        if (orderItems !== undefined && orderItems.lenght !== 0) {
            orderItems.forEach(item => {
                const data = doc(db, "itemCollection", item.id);
                getDoc(data).then((snapshot) => {
                    updateDoc(data, { stock: Number(item.stock - item.quantity) })
                })
            });
        }
    }

    const confirmOrder = (e, setOrderId, setIsLoading, setError) => {
        e.preventDefault();
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value)
            setError(true);

        else {
            setIsLoading(true);
            setError(false);
            let order = {
                buyer: { name: e.target[0].value, phone: e.target[1].value, dni: e.target[2].value, email: e.target[3].value },
                items: cartProducts,
                date: Date.now(),
                total: getTotal()
            }
            addDoc(orderCollection, order).then((res) => {
                setOrderId(res.id);
                updateProducts(cartProducts);
                clear();
                setIsLoading(false);
            });
        }
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, isInCart, getCartProducts, getQuantityCartWidget, updateQuantity, getTotal, confirmOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
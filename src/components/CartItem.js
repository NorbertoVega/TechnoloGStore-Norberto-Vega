import React from "react";
import "../styles/CartStyles.css";
import ItemCount from "./ItemCount";


const CartItem = ({ prod, onUpdateProduct, onDeleteProduct }) => {

    return (
        <div key={prod.id} className="cart-item">
            <div className="img-item-container">
                <img src={prod?.pictureUrl} className="image-cart" alt="Imagen de producto" />
            </div>
            <div className="title-unit-price-container">
                <p>{prod?.title}</p>
                <p>Precio por unidad: ${prod?.price}</p>
            </div>
            <div className="update-quantity-container">
                <ItemCount initialValue={prod?.quantity} stock={prod.stock} onAdd={onUpdateProduct} buttonLabel="Actualizar" id={prod.id} />
            </div>
            <div className="subtotal-container">
                <p>Subtotal: ${prod.price * prod.quantity}</p>
                <button onClick={() => onDeleteProduct(prod.id)} className="delete-button">Quitar del Carrito</button>
            </div>
        </div>
    )
}

export default CartItem;
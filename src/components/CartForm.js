import React from "react";
import "../styles/CartStyles.css";
import { Form } from 'react-bootstrap';

const CartForm = ({ confirmOrder, error }) => {

    return (
        <div className="cart-item confirm-container">
            <Form onSubmit={confirmOrder} className="form-customer">
                <p className="form-title">Datos del comprador</p>
                <Form.Group className="form-group-customer">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control type='text' placeholder='Ingresa el nombre y apellido'></Form.Control>
                </Form.Group>
                <Form.Group className="form-group-customer">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type='number' placeholder='Ingresa teléfono'></Form.Control>
                </Form.Group >
                <Form.Group className="form-group-customer">
                    <Form.Label>Dni</Form.Label>
                    <Form.Control type='number' placeholder='Ingresa dni'></Form.Control>
                </Form.Group>
                <Form.Group className="form-group-customer">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Ingresa email'></Form.Control>
                </Form.Group>
                {error && <p className="form-error-message">Falta ingresar algún dato o alguno de los datos ingresados es incorrecto.</p>}
                <button type="submit" className="empty-cart-button">Confirmar Compra</button>
            </Form>
        </div>
    )
}

export default CartForm;
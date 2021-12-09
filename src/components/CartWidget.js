import Image from "react-bootstrap/Image";
import cart from "../img/shopping-cart.png"
import "../styles/CartWidgetStyles.css"

function CartWidget(props) {
    return (
        <div className="circle">
            <Image src={cart} className="size" />
            <p>{props.cantidad}</p>
        </div>
    )
}

export default CartWidget;
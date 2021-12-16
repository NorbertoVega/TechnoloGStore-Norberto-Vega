import ItemCount from "./ItemCount";
import "../styles/ItemStyles.css";

function Item(props) {
    return (
        <>
            <div className="item-container">
                <p className="item-title">{props.title}</p>
                <img src={props.pictureUrl} className="item-image" alt="Imagen de producto" />
                <p className="item-precio">Precio: ${props.price}</p>
                <ItemCount stock={props.stock} initialValue={props.initialValue}/>
            </div>
        </>
    )
}

export default Item;
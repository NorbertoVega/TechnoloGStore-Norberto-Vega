import "../styles/ItemStyles.css";

function Item(props) {
    return (
        <>
            <img src={props.pictureUrl} className="item-image" alt="Imagen de producto" />
            <p className="item-title">{props.title}</p>
            <p className="item-precio">Precio: ${props.price}</p>
        </>
    )
}

export default Item;
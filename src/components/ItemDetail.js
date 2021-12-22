import ItemCount from "./ItemCount";
import "../styles/ItemDetailStyles.css"

function ItemDetail({ item }) {

    return (
        <>
            <div className="item-detail-container">
                <div>
                    <img src={item.pictureUrl} className="detail-image" alt="Imagen de producto" />
                </div>
                <div className="detail-info">
                    <p className="detail-title">Descripción:</p>
                    <p className="detail-description">{item.description}</p>
                    <p className="detail-price">Precio: ${item.price}</p>
                    <p className="detail-stock">Quedan {item.stock} unidades disponibles</p>
                    <ItemCount initialValue={1} stock={item.stock} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail;
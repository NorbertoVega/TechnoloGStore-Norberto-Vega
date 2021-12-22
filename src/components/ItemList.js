import Item from "./Item";
import Row from "react-bootstrap/Row";
import { NavLink } from 'react-router-dom';

function ItemList({productArray}) {

    return (
        <Row md={12}>
            {productArray.map((value) => {
                return  <NavLink to={`/item/${value.id}`} className="item-container" key={value.id}>
                            <Item title={value.title} price={value.price} pictureUrl={value.pictureUrl} />
                        </NavLink>
            })}
        </Row>
    )
}

export default ItemList;


import Container from "react-bootstrap/Container";
import "../styles/ItemListContainerStyles.css";
import Common from "./Common";
import ItemList from "./ItemList";

function ItemListContainer(props) {
    return (
        <>
            <Container>
                        <Common.Mensaje text={props.greeting} centrar={"centrar mensaje-mg"} />
                        <ItemList />
            </Container>
        </>
    )
}

export default ItemListContainer;
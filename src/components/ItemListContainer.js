import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/ItemListContainerStyles.css";
import Common from "./Common";
import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return (
        <>
            <Container>
                    <Row md={12}>
                        <Common.Mensaje text={props.greeting} centrar={"centrar mensaje-pd"} />
                        <ItemCount stock={5} initialValue={1}/>
                        <ItemCount stock={6} initialValue={3}/>
                        <ItemCount stock={0} initialValue={1}/>
                        <ItemCount stock={0} initialValue={0}/>
                    </Row>
            </Container>
        </>
    )
}

export default ItemListContainer;
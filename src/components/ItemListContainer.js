import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/ItemListContainerStyles.css";
import Common from "./Common";

function ListItemContainer(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Common.Mensaje text={props.greetings} centrar={"centrar"} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ListItemContainer;
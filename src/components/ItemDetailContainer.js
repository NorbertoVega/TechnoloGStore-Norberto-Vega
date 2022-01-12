import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";
import { doc, getDoc, getFirestore} from "firebase/firestore";


function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const ref = doc(db, "ItemCollection", id);
        getDoc(ref).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
                setIsLoading(false);
            }
        });

    }, [id])

    return (
        <>
            <Header title={item.title} />
            <Container>
                <Row md={12}>
                   {isLoading? <Spinner/> : <ItemDetail item={item} />}
                </Row>
            </Container>
        </>
    )
}

export default ItemDetailContainer;
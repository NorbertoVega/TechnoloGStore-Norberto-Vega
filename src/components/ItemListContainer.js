import Container from "react-bootstrap/Container";
import "../styles/ItemListContainerStyles.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import { collection, getFirestore, getDocs, query, where} from "firebase/firestore";

function ItemListContainer() {


    const [productsArray, setProductsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryName } = useParams();

    useEffect(() => {
        const db = getFirestore();

        let queryCategory;
        if (categoryName === undefined)
            queryCategory = query(collection(db, "ItemCollection"));
        else
            queryCategory = query(collection(db, "ItemCollection") , where("category", "==", categoryName));

        getDocs(queryCategory).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No results");
            }
            setProductsArray(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
            setIsLoading(false);
        })
        
    }, [categoryName]);


    const showCategoryName = () => categoryName === undefined ? "TecnoloG Products" : categoryName.replace(categoryName[0], categoryName[0].toUpperCase());

    return (
        <>
            <Header title={showCategoryName()} />
            <Container className="mb-5">
                {isLoading? <Spinner/> : <ItemList productArray={productsArray} />}    
            </Container>
        </>
    )
}

export default ItemListContainer;
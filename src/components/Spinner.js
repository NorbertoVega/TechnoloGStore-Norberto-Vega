import SpinnerBootstrap from "react-bootstrap/Spinner";
import "../styles/SpinnerStyles.css";

const Spinner = () => {
    return (
        <div className="spinner-container">
            <SpinnerBootstrap animation="border"/>
        </div>
    )
}

export default Spinner;
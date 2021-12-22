import "../styles/CommonStyles.css"

const Common = {
    Mensaje: (props) => (<h2 className={props.centrar}>{props.text}</h2>),
    Title: (props) => (<p className={props.clase}>{props.text}</p>),
    Enlace: (props) => (<button className={props.clase}>{props.text}</button>)
}

export default Common;
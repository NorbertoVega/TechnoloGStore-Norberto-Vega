import "../styles/CommonStyles.css"

const Common = {
    Mensaje: (props) => (<h2 className={props.centrar}>{props.text}</h2>),
    Title: (props) => (<p className={props.clase}>{props.text}</p>),
    Enlace: (props) => (<a href={props.hrefProp} className={props.clase}>{props.text}</a>)
}

export default Common;
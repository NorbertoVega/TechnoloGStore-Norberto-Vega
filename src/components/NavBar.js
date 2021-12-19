import React from "react";
import logo from "../logo.svg";
import CartWidget from "./CartWidget";
import "../styles/NavBarStyles.css";
import Common from "./Common";

let cantidad = 4;

function Nav() {
    return (
        <nav>
            <ul className="nav_links">
                <a href="#home"><button>Home</button></a>
                <li><Common.Enlace text="Productos" clase={"nav_links"} hrefProp="#productos"/></li>
                <li><Common.Enlace text="Promociones" clase={"nav_links"} hrefProp="#promociones"/></li>
                <li><Common.Enlace text="Arma tu PC" clase={"nav_links"} hrefProp="#armatupc"/></li>
                <li><Common.Enlace text="Contacto" clase={"nav_links"} hrefProp="#contacto"/></li>
                <li><a href="#login"><button>Login</button></a></li>
            </ul>
        </nav>
    )
}

function LogoAndName() {
    return (
        <div className="logo-name-container">
            <img src={logo} className="logo" alt="logo del sitio web" />
            <Common.Title text="TecnoloG Store" clase={"title"} />
        </div>
    )
}

function NavBar() {
    return (
        <div className="header">
            <LogoAndName />
            <Nav />
            <CartWidget cantidad={cantidad}/>
        </div>
    )
}

export default NavBar;
import React from "react";
import logo from "../logo.svg"

function NavBar() {
    return (
        <div className="header">
            <div>
                <img src={logo} className="logo" />
                <p className="title">TecnoloG Store</p>
            </div>
            <nav>
                <ul className="nav__links">
                    <a href="#"><button>Home</button></a>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Promociones</a></li>
                    <li><a href="#">Arma tu pc</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <a href="#"><button>Login</button></a>
        </div>
    )
}

export default NavBar;
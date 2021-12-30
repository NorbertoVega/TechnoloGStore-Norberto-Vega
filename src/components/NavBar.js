import React from "react";
import logo from "../img/upc.png";
import CartWidget from "./CartWidget";
import "../styles/NavBarStyles.css";
import Common from "./Common";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="nav_links">
                <NavLink to={`/`}><button>Home</button></NavLink>
                <li><NavLink to={"/category/monitores"}><Common.Enlace text="Monitores" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/motherboards"}><Common.Enlace text="Motherboards" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/procesadores"}><Common.Enlace text="Procesadores" clase={"nav_links"} /></NavLink></li>
                <li><NavLink to={"/category/perifericos"}><Common.Enlace text="Perifericos" clase={"nav_links"} /></NavLink></li>
            </ul>
        </nav>
    )
}

function LogoAndName() {
    return (
        <NavLink to={`/`}>
            <div className="logo-name-container">
                <img src={logo} className="logo" alt="logo del sitio web" />
                <Common.Title text="TecnoloG Store" clase={"title"} />
            </div>
        </NavLink>
    )
}

function NavBar() {
    return (
        <div className="navbar-container">
            <LogoAndName />
            <Nav />
            <CartWidget/>
        </div>
    )
}

export default NavBar;
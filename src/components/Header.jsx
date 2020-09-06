import React from "react";
import "../Style/Header.css";
import "../Style/DesignBackFrontPage.css";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header__inner">
                <p className="header__logo">
                    <span className="header__logo_color">S</span>TORAGE
                </p>
                <div className="header__menu_item item__text">
                <NavLink to="/design"activeClassName="active" id="text" >DESIGN</NavLink>
                <NavLink to="/frontend" activeClassName="active" id="text">FRONTEND</NavLink>
                <NavLink to="/backend" activeClassName="active" id="text">BACKEND</NavLink>
                    </div>
            </div>
        </div>
    );
}

export default Header;

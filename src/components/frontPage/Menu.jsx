import React from "react";
import "../../Style/frontPage/Menu.css";

function Menu() {
    return (
        <div className="menu">
            <div className="menu__inner">
                <div className="menu__block_first">
                    <p className="menu__text">DESIGN</p>
                </div>

                <div className="menu__block_second">
                    <p className="menu__text">FRONTEND</p>
                </div>

                <div className="menu__block_third">
                    <p className="menu__text">BACKEND</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;

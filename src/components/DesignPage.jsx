import React from "react";
import "../Style/DesignPage.css";

function DesignPage() {
    return (
        <div className="wrapper">
            <div className="wrapper__inner">
                <div className="wrapper__header">
                    <p className="header__logo">
                        <span className="header__logo_color">S</span>TORAGE
                    </p>

                    <div className="header__menu_item">
                        <div className="menu__item">
                            <p className="item__text">DESIGN</p>
                        </div>
                        <div className="menu__item">
                            <p className="item__text">FRONTEND</p>
                        </div>
                        <div className="menu__item">
                            <p className="item__text">BACKEND</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content__post">
                        <p className="post__text">Название статьи</p>
                        <img
                            src="./Image/ph.svg"
                            alt="react"
                            className="post__img"
                        />
                    </div>
                    <div className="content__post">
                        <p className="post__text">Название статьи</p>
                        <img
                            src="./Image/ph.svg"
                            alt="react"
                            className="post__img"
                        />
                    </div>{" "}
                    <div className="content__post">
                        <p className="post__text">Название статьи</p>
                        <img
                            src="./Image/ph.svg"
                            alt="react"
                            className="post__img"
                        />
                    </div>
                    <div className="content__post">
                        <p className="post__text">Название статьи</p>
                        <img
                            src="./Image/ph.svg"
                            alt="react"
                            className="post__img"
                        />
                    </div>
                    <div className="content__line"></div>
                </div>
            </div>
        </div>
    );
}

export default DesignPage;

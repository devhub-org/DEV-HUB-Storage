import React from "react";

function Sections() {
    return (
        <div className="sections">
            <div className="sections__inner">
                <div className="sections__items">
                    <div className="sections__item">
                        <img
                            src="./Image/GroupPen.svg"
                            alt="img"
                            className="sections__img"
                        />
                        <p className="sections__text">FrontEnd</p>
                    </div>

                    <div className="sections__item">
                        <img
                            src="./Image/GroupComp.svg"
                            alt="img"
                            className="sections__img section__img_center"
                        />
                        <p className="sections__text">BackEnd</p>
                    </div>

                    <div className="sections__item">
                        <img
                            src="./Image/GroupMac.svg"
                            alt=""
                            className="sections__img"
                        />
                        <p className="sections__text">Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sections;

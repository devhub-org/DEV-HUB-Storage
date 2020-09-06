import React from "react";
import Search from "./Search"
import ps from "./Image/ps.png";
import design from "./Image/design.png";
import designtwo from "./Image/designtwo.png";
import comp from "./Image/comp.png";
import  "../Style/DesignBackFrontPage.css";


const DesignList = [
    {src:design},{src:designtwo},{src:ps},{src:comp}
]

function DesignPage(props) {
    return (
        <div>
        <ul>
           {DesignList.map(design =><Search src={design.src}/>)}
        </ul>
        <div className="footer-band"></div>   
        </div>
    );
}

export default DesignPage;

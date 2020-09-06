import React from "react";
import Search from "./Search";
import php from "./Image/php.png";
import dolphi from "./Image/dolphi.png";
import bear from "./Image/bear.png";
import python from "./Image/python.png";
import  "../Style/DesignBackFrontPage.css";


const BackList = [
    {src:dolphi},{src:php},{src:bear},{src:python}
    ]

function BackPage(props) {
    return (<div>
    <ul>
        {BackList.map(back=><Search src={back.src}/>)}
        </ul> 
        <div className="footer-band"></div>   
    </div>);
}

export default BackPage;

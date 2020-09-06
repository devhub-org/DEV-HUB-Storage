import React from "react";
import Search from "./Search";
import react from "./Image/react.png";
import angular from "./Image/angular.png";
import node from "./Image/node.png";
import vue from "./Image/vue.png";
import  "../Style/DesignBackFrontPage.css";


const FrontList = [
    { src:react },{src:node},{src:vue},{src:angular}
]

function FrontPage() {
    return (
        <div>
        <ul>
        {FrontList.map(front=><Search src={front.src}/>)}    
        </ul>
        <div className="footer-band"></div>   
    </div>
    );
}

export default FrontPage;

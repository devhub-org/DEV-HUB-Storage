import React from "react";
import "../Style/Search.css";

const Search = (props)=>{
return(<div className="wrapper">
            <div className="wrapper__inner">
               <div className="content">
                    <div className="content__post">
                        <input className="post__text" placeholder="Название статьи"/>
                        <img
                            src={props.src}
                            alt=""
                            className="post__img"
                        />
                        </div>
                </div>
            </div>
        </div>)}

    export default Search;
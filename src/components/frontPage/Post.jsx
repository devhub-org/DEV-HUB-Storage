import React from "react";
import "../../Style/frontPage/Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post__inner">
                <div className="post__first">
                    <p className="post__text">Название статьи</p>
                    <div className="post__poloska"></div>
                    <div className="post__image">
                        <img src="./Image/noder.svg" />
                    </div>
                    <div className="post__footer"></div>
                </div>
            </div>
        </div>
    );
}

export default Post;

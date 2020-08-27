import React from "react";
import Header from "../components/Header";
import Menu from "../components/frontPage/Menu";
import Post from "../components/frontPage/Post";

function frontPage() {
    return (
        <div>
            <Header />
            <Menu />
            <Post />
        </div>
    );
}

export default frontPage;

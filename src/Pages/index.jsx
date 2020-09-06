import React from "react";
import Header from "../components/Header";
import Article from "../components/Article";
import "../Style/Index.css";
import Sections from "../components/Sections";
import Footer from "../components/Footer";


function index() {
    return (
        <>
            <Header />
            <Article />
            <Sections />
            <Footer />
        </>
    );
}

export default index;

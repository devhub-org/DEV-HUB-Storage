import React from "react";
import IndexFront from "./Pages/IndexFront";
import IndexBack from "./Pages/IndexBack";
import IndexDesign from "./Pages/IndexDesign";
import {BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header"

function App() {
    return (
    <BrowserRouter>
    <Header/>
    <Route path='/frontend' render={()=> <IndexFront/>}/>
    <Route path='/backend' render={()=> <IndexBack/>}/>
    <Route path='/design' render={()=> <IndexDesign/>}/>
    </BrowserRouter>
    );
}

export default App;

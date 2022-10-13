import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './conteiners/Home'
import Orders from './conteiners/Orders'


function Rotas() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pedidos" element={<Orders/>} />
            </Routes>
        </Router>
    )
}

export default Rotas
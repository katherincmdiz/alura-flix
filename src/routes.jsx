import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaBase from "./assets/pages/PaginaBase/PaginaBase.jsx";
import Inicio from "./assets/pages/Inicio/Inicio.jsx";
import NuevoVideo from "./assets/pages/NuevoVideo/NuevoVideo.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="nuevo video" element={<NuevoVideo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

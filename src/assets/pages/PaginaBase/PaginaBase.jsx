import Banner from "../../components/Banner/Banner";
import { VideoProvider } from "../../context/context";
import { Outlet, useLocation } from "react-router-dom";
import Cabecera from "../../components/Cabecera/Cabecera";
import Pie from "../../components/Pie/Pie";
import React from "react";

function PaginaBase() {
    const location = useLocation();

    return (
        <VideoProvider>
            <main>
                <Cabecera />
                {location.pathname === "/" && <Banner />}
                <Outlet />
                <Pie />
            </main>
        </VideoProvider>
    );
}

export default PaginaBase;

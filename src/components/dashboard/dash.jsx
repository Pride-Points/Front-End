import React from "react";
import "./dash.css";
import HeaderUsuario from "../headerUsuario/HeaderUsuario";
import MenuLateral from "../menuLateral/HeaderMenuLateral";
import DashContent from "./dash-content";

function Dash() {
    return (

        <div className="container">



            <div className="content-left">
                <MenuLateral />
            </div>

            <div className="container-widdle">
            <HeaderUsuario />
            <DashContent />
            </div>

        </div>

    )
}

export default Dash;

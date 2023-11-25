import React from "react";
import "./dash.css";
import HeaderUsuario from "../headerUsuario/HeaderUsuario";
import MenuLateral from "../menuLateral/MenuLateral";
import DashContent from "./dash-content";

function Dash() {
    return (

        <div className="container">

            <div className="content-right">
                <HeaderUsuario />
            </div>

            <div className="content-left">
                <MenuLateral />
            </div>

            <div className="container-widdle">
                <DashContent />
            </div>

        </div>

    )
}

export default Dash;

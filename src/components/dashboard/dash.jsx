import React from "react";
import "./dash.css";
import HeaderUsuario from "../headerUsuario/HeaderUsuario";
import MenuLateral from "../menuLateral/HeaderMenuLateral";
import DashContent from "./dash-content";
import dashIcon from "../../assets/icon-chart.svg";
import avalBlack from "../../assets/icon-avaliacoes.svg";

function Dash() {
    return (

        <div className="container">



            <div className="content-left">
                <MenuLateral 
                dashIcon= {dashIcon}
                classColor={"pag-atual"}
                avalIcon= {avalBlack}
                classColorAval={""}/>
            </div>

            <div className="container-widdle">
            <HeaderUsuario />
            <DashContent />
            </div>

        </div>

    )
}

export default Dash;

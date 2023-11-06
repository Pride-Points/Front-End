import React, { useState } from 'react';
import "./Cadastro.css";
import CadastroEsq from "./CadastroEsq";
import CadastroDire from "./CadastroDire";
import logoPride from "../../assets/logo.png";
import barraProgressoInicio from "../../assets/progress-inicio.png";
import barraProgressoDois from "../../assets/progress-dois.png";
import imgFormUser from "../../assets/img-form-usuario.png";

function Cadastro(props) {
  
  const [mostrarSegundaParteCad, setMostrarSegundaParteCad] = useState(false);

  const handleContinuarClick = () => {
    setMostrarSegundaParteCad(true);
  };

  const renderizarComponente = () => {
    if (mostrarSegundaParteCad) {
      return (
        <CadastroDire
          quantity={props.quantityDois}
          barraProgresso={barraProgressoDois}
          barraProgressoMT={props.MTbarraDois}
          barraProgressoMB={props.MBbarraDois}
          inputTitles={props.inputTitlesDois}
          titulo={props.tituloDois}
          tituloBotao={props.tituloBotaoDois}
          subtitulo={props.subtituloDois}
        />
      );
    } else {
      return (
        <CadastroDire
          quantity={props.quantityUm}
          barraProgresso={barraProgressoInicio}
          barraProgressoMT={props.MTbarraUm}
          barraProgressoMB={props.MBbarraUm}
          inputTitles={props.inputTitlesUm}
          titulo={props.tituloUm}
          subtitulo={props.subtituloUm}
          tituloBotao={props.tituloBotaoUm}
          onButtonClick={handleContinuarClick}
        />
      );
    }
  };

  return (
    <div className="Cadastro">
      <CadastroEsq
        logo={logoPride}
        widthLogo={215}
        heightLogo={112}
        imgForm={imgFormUser}
        widthImgForm={410}
        heightImgForm={441}
      />
      {renderizarComponente()}
    </div>
  );
}

export default Cadastro;
import React, { useState, useEffect } from 'react';
import imgBack from "../../assets/back.png";
import "./CadastroDire.css";
import { useNavigate } from 'react-router-dom';

function removeSpacesAndAccents(str) {
  return str.toLowerCase().replace(/[\s]/g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function CadastroDire(props) {
  const [inputValues, setInputValues] = useState(props.inputTitles.map(() => ''));
  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const voltarParaPaginaAnterior = () => {
    navigate(-1); // Navegar para trás no histórico
  };

  // Efeito colateral para limpar os valores ao montar o componente
  useEffect(() => {
    setInputValues(props.inputTitles.map(() => ''));
  }, [props.inputTitles]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const inputs = props.inputTitles.map((title, index) => (
    <div key={index} className='input'>
      <label>{title}</label>
      <input
        type="text"
        name={removeSpacesAndAccents(title)}
        value={inputValues[index]}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
    </div>
  ));

  return (
    <form onSubmit={props.handleButtonClick} className="CadastroDire">
        {/* Restante do componente */}
        <div className='imgBack'>
          <img src={imgBack} width={93} height={36} onClick={voltarParaPaginaAnterior} alt="Voltar para página anterior" />
        </div>
        <div className="barraProgresso">
          <img src={props.barraProgresso}
            width={355.98}
            style={{ marginTop: props.barraProgressoMT, marginBottom: props.barraProgressoMB }}
            alt="Barra de progresso" />
        </div>
        <div className='containerCadastro'>
          <div className='tituloAndSubtitulo'>
            <h1>{props.titulo}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.subtitulo }}></p>
          </div>
          {inputs}
          <div className='buttonClass'>
            <button type='submit'>{props.tituloBotao}</button>
            <p>{props.textoFinalUm} {props.tagTextoFinal} <br/><br/>
            {props.alterarSenha}</p>
          </div>
        </div>
    </form>
  );
}

export default CadastroDire;

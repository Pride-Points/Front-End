import React, { useState, useEffect } from 'react';
import imgBack from "../../assets/back.png";
import "./CadastroDire.css";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

function removeSpacesAndAccents(str) {
  // Substituir "e-mail" por "email"
  const replacedStr = str.replace(/e-mail/gi, 'email');

  // Normalizar e substituir espaços e acentos
  return replacedStr.toLowerCase().replace(/[\s]/g, '_').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function CadastroDire(props) {
  const [inputValues, setInputValues] = useState(props.inputTitles.map(() => ''));
  const [showPasswordInfo, setShowPasswordInfo] = useState(false);

  const navigate = useNavigate();

  const handleFocus = () => {
    setShowPasswordInfo(true);
  };

  const handleBlur = () => {
    setShowPasswordInfo(false);
  };

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
      {title.toLowerCase().includes('senha') ? (
        <>
          <input
            type="password"
            name={removeSpacesAndAccents(title)}
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </>
      ) : title.toLowerCase().includes('email') ? (
        <input
          type="email"
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ) : title.toLowerCase().includes('cnpj') ? (
        <InputMask
          mask="99.999.999/9999-99"
          type="text"
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ) : title.toLowerCase().includes('cep') ? (
        <InputMask
          mask="99999-999"
          type="text"
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ) :
        title.toLowerCase().includes('cpf') ? (
          <InputMask
            mask="999.999.999-99"
            type="text"
            name={removeSpacesAndAccents(title)}
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ) : (
          <input
            type="text"
            name={removeSpacesAndAccents(title)}
            value={inputValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        )}
    </div>
  ));

  return (
    <form onSubmit={props.handleButtonClick} className="CadastroDire">
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
          <p>{props.textoFinalUm} {props.tagTextoFinal} <br /><br />
            {props.alterarSenha}</p>
        </div>
        
      </div>
      {showPasswordInfo && (
            <div className="password-info">
              {/* Adicione suas informações sobre os requisitos da senha aqui */}
              A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter no mínimo 8 caracteres.
            </div>
          )}
    </form>
  );
}

export default CadastroDire;

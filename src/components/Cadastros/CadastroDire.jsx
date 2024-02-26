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
    // Atualiza diretamente o array de inputValues baseado no índice e valor
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const generosSexuais = [
    'Homem cis',
    'Mulher cis',
    'Mulher Trans',
    'Homem Trans',
    'Não-Binário',
    'Agênero',
    'Bigênero',
    'Gênero Fluido',
    'Questionando',
    'Outro',
  ];

  const orientacoesSexuais = [
    'Hetero',
    'Gay',
    'Lésbica',
    'Bissexual',
    'Pansexual',
    'Assexual',
    'Outro',
  ];

  const estadosBrasileiros = [
    'AC', 'AL', 'AP', 'AM', 'BA',
    'CE', 'DF', 'ES', 'GO', 'MA',
    'MT', 'MS', 'MG', 'PA', 'PB',
    'PR', 'PE', 'PI', 'RJ', 'RN',
    'RS', 'RO', 'RR', 'SC', 'SP',
    'SE', 'TO'
  ];

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
      ) : title.toLowerCase().includes('gênero') ? (
        <select
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        >
          <option value="" disabled hidden>
            Selecione o gênero
          </option>
          {generosSexuais.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      ) : title.toLowerCase().includes('orientação sexual') ? (
        <select
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        >
          <option value="" disabled hidden>
            Selecione a orientação sexual
          </option>
          {orientacoesSexuais.map((orientacao) => (
            <option key={orientacao} value={orientacao}>
              {orientacao}
            </option>
          ))}
        </select>
      ) : title.toLowerCase().includes('email') ? (
        <input
          type="email"
          name={removeSpacesAndAccents(title)}
          value={inputValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
      ) : title.toLowerCase().includes('numero') ? (
        <input
          type="number"
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
        ) :
          title.toLowerCase().includes('data de nascimento') ? (
            <InputMask
              mask="99/99/9999"
              type="text"
              name={removeSpacesAndAccents(title)}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ) : title.toLowerCase().includes('cidade') ? (
            <input
              type="text"
              name={removeSpacesAndAccents(title)}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          ) : title.toLowerCase().includes('estado') ? (
            <select
              name={removeSpacesAndAccents(title)}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            >
              <option value="" disabled hidden>Selecione o estado</option>
              {estadosBrasileiros.map(estado => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
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

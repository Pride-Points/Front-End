import React, { useState } from 'react';
import "./Cadastro.css";
import CadastroEsq from "./CadastroEsq";
import CadastroDire from "./CadastroDire";
import logoPride from "../../assets/logo.png";
import barraProgressoInicio from "../../assets/progress-inicio.png";
import barraProgressoDois from "../../assets/progress-dois.png";
import imgFormUser from "../../assets/img-form-usuario.png";
import { Link } from 'react-router-dom';
import api from "../../api/api";

function Cadastro(props) {

  const [mostrarSegundaParteCad, setMostrarSegundaParteCad] = useState(false);
  const [dadosPrimeiraParte, setDadosPrimeiraParte] = useState(null);
  const [dadosSegundaParte, setDadosSegundaParte] = useState(null);

  const cadastrarUm = (e) => {
    e.preventDefault();

    // Dados da primeira parte
    const dadosPrimeiraParte = {
      nome: e.target.nome ? e.target.nome.value : '',
      genero: e.target.genero ? e.target.genero.value : '',
      orientacaoSexual: e.target.orientacao_sexual ? e.target.orientacao_sexual.value : ''
    };
    console.log(dadosPrimeiraParte)

    // Armazenar os dados
    setDadosPrimeiraParte(dadosPrimeiraParte);

    // Mostrar a segunda parte
    handleContinuarClick();
  };

  const cadastrarDois = (e) => {
    e.preventDefault();

    // Dados da segunda parte
    const dadosSegundaParte = {
      email: e.target.email ? e.target.email.value : '',
      cpf: e.target.cpf ? e.target.cpf.value : '',
      senha: e.target.senha ? e.target.senha.value : '',
      confirmacaoSenha: e.target.confirmacao_de_senha ? e.target.confirmacao_de_senha.value : ''
    };
    setDadosSegundaParte(dadosSegundaParte);

    // Unir os dados das duas partes
    const cadastroCompleto = {
      ...dadosPrimeiraParte,
      ...dadosSegundaParte
    };

    console.log(cadastroCompleto);

    api.post("/", cadastroCompleto)
      .then((res) => {
        alert("Cadastrado com sucesso!");
      })
      .catch((erro) => {
        alert("Erro ao cadastrar!");
      })

  };

  const handleContinuarClick = (e) => {
    setMostrarSegundaParteCad(true);
  };

  const renderizarComponente = () => {
    const minhaTag = <Link className="login" to="/login">Faça login</Link>;

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
          textoFinalUm="Já possui conta?"
          tagTextoFinal={minhaTag}
          handleButtonClick={cadastrarDois}
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
          textoFinalUm="Já possui conta?"
          tagTextoFinal={minhaTag}
          handleButtonClick={cadastrarUm}
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

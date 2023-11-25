import React, { useState } from "react";
import "./Login.css";
import CadastroEsq from "../Cadastros/CadastroEsq";
import CadastroDire from "../Cadastros/CadastroDire";
import Card from "../Card/Card";
import Modal from "react-modal";
import imgUser from "../../assets/img-usuario.png"
import imgNegocio from "../../assets/img-negocio.png"
import retanguloBranco from "../../assets/retangulo-branco.png"
import logoPride from "../../assets/logo.png";
import imgLogin from "../../assets/img-login.png";
import CardAlterarSenha from "../CardAlterarSenha/CardAlterarSenha";
import api from "../../api/api";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { injectStyle } from "react-toastify/dist/inject-style";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "810px",
      height: "499px",
      bottom: "auto",
      borderRadius: "12px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const customStylesDois = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "469px",
      height: "366px",
      bottom: "auto",
      borderRadius: "12px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

function Login(){
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalSenhaIsOpen, setModalSenhaIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openModalSenha = () => setModalSenhaIsOpen(true);
  const closeModalSenha = () => setModalSenhaIsOpen(false);

  injectStyle();

  const navigate = useNavigate();

 
  const loginBack = (e) => {
    e.preventDefault();

    // Dados de login
    const dadosLogin = {
      email: e.target.email ? e.target.email.value : '',
      senha: e.target.senha ? e.target.senha.value : ''
    };

    console.log(dadosLogin);

    api.post('/users/login', {
      email: dadosLogin.email,
      senha: dadosLogin.senha
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem('authToken', response.data.token);
          sessionStorage.setItem('usuario', response.data.nome);

          toast.success('Login realizado com sucesso!');
          navigate('/');
        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  const handleCadastroClick = () => {
    openModal();
  };

  const handleAlterarSenha = () => {
    openModalSenha();
  }
  const alterarSenha = <a onClick={handleAlterarSenha} className="cadastro">Alterar Senha</a>
  const minhaTag = <a onClick={handleCadastroClick} className="cadastro">Cadastre-se!</a>

    return(
        <div className="Login">
        <CadastroEsq
          logo={logoPride}
          widthLogo={215}
          heightLogo={112}
          imgForm={imgLogin}
          widthImgForm={410}
          heightImgForm={441}
        />
        <CadastroDire 
        inputTitles={['Email','Senha']}
        barraProgresso={retanguloBranco}
        barraProgressoMT={"60px"}
        barraProgressoMB={"30px"}
        titulo="Faça Login!"
        subtitulo={"Se você já é membro, pode fazer login com seu<br> endereço de e-mail e senha. <b>Seu usuário será<br> identificado<b> pela nossa equipe!"}
        tituloBotao="Login"
        textoFinalUm="Não possui uma conta?"
        tagTextoFinal={minhaTag}
        alterarSenha={alterarSenha}
        handleButtonClick={loginBack}
        />
              <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={customStyles}
        onRequestClose={closeModal}
      >
        <Card
        isOpen={closeModal}
        titulo="Cadastre-se como"
        tituloFirstCard="Um participante comum"
        imgFirstCard={imgUser}
        tituloSecondCard="Um participante dono de um negócio"
        imgSecondCard={imgNegocio}
        />
      </Modal>
      <Modal
      isOpen={modalSenhaIsOpen}
      contentLabel="Example Modal"
      style={customStylesDois}
      onRequestClose={closeModalSenha}
    >
        <CardAlterarSenha 
        onRequestClose={closeModalSenha}/>
      </Modal>
      </div>
    )
}

export default Login;

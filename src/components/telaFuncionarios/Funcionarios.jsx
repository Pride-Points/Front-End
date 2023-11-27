import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoPride from "../../assets/logo-dark (1).png";
import peopleIcon from "../../assets/people.svg";
import checkEvento from "../../assets/Vector.svg";
import dashIcon from "../../assets/dashBlack.svg";
import avalBlack from "../../assets/icon-avaliacoes.png";
import avatar from "../../assets/avatar.png";
import excel from "../../assets/excel.png";
import text from "../../assets/text.png";
import iconPerson from "../../assets/icon-person.svg";
import iconHelp from "../../assets/icon-help.svg";
import iconSair from "../../assets/icon-sair.svg";
import iconLupa from "../../assets/lupa-icon.svg";
import downloadIcon from "../../assets/downloadIcon.svg";
import "./funcionarios.css";
import imgFuncionario from "../../assets/imgFuncionario.png";
import CardFuncionario from "./CardFuncionario";
import iconClose from "../../assets/icon-close.png";
import { toast } from 'react-toastify';
import api from "../../api/api";

const Funcionarios = () => {
  const [modalAberto, setModalAberto] = useState(false);

  const [csvModalAberto, setCsvModalAberto] = useState(false);
  const [parte1, setParte1] = useState(true);
  const [firstDados, setFirstDados] = useState(null);
  const [funcionarioResponse, setFuncionarioResponse] = useState([]);
  const [listaFuncionarios, setListaFuncionarios] = useState([]);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);
  const openCSVModal = () => setCsvModalAberto(true);
  const closeCSVModal = () => setCsvModalAberto(false);

  const [eventos, setEventos] = useState([]);

  const downloadCSV = async () => {
    try {
      const response = await api.get(`/funcionarios/download-csv?cnpj=${sessionStorage.cnpj}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.authToken}`
        },
        responseType: 'blob', // Indica que a resposta é um arquivo binário
      });

      // Cria um URL para o blob (objeto binário) da resposta
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      // Cria um elemento de link temporário
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'funcionarios.csv'); // Nome que o arquivo terá no download

      // Adiciona o link ao documento e simula o clique
      document.body.appendChild(link);
      link.click();

      // Remove o link do documento
      document.body.removeChild(link);

      // Revoga o URL do blob para liberar memória
      window.URL.revokeObjectURL(url);

      toast.success('Download bem-sucedido!');
    } catch (error) {
      // Erro no download
      toast.error('Erro ao fazer o download!');
    }
  };

  const exportacaoTXT = async () => {
    try {
      const response = await api.get(`/funcionarios/exportar-txt?cnpj=${sessionStorage.cnpj}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.authToken}`
        },
        responseType: 'blob', // Indica que a resposta é um arquivo binário
      });

      // Cria um URL para o blob (objeto binário) da resposta
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      // Cria um elemento de link temporário
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'funcionarios.txt'); // Nome que o arquivo terá no download

      // Adiciona o link ao documento e simula o clique
      document.body.appendChild(link);
      link.click();

      // Remove o link do documento
      document.body.removeChild(link);

      // Revoga o URL do blob para liberar memória
      window.URL.revokeObjectURL(url);

      toast.success('Exportação bem-sucedida!');
    } catch (error) {
      // Erro no download
      toast.error('Erro ao fazer a exportação!');
    }
  };

  useEffect(() => {
    console.log('idEmpresa:', sessionStorage.idEmpresa);
    console.log('authToken:', sessionStorage.authToken);

    const listarFuncionariosAtivos = async () => {
      try {
        const response = await api.get(`/funcionarios/ativos/${sessionStorage.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.authToken}`
          }
        });
        console.log(response.data)
        setListaFuncionarios(response.data)
      } catch (error) {
        toast.error(error.message);
      }
    };

    listarFuncionariosAtivos();
  }, []);

  const cadastrarFuncFirst = (e) => {
    e.preventDefault();

    const dados = {
      nome: e.target.nome ? e.target.nome.value : '',
      cargo: e.target.cargo ? e.target.cargo.value : '',
      email: e.target.email ? e.target.email.value : '',
    };
    console.log(dados);
    // Verificar se todos os campos estão preenchidos
    if (Object.values(dados).some(value => value === '')) {
      toast.error("Todos os campos do cadastro devem ser preenchidos.");
      return;
    }


    setFirstDados(dados);

    setParte1(false);
  }

  const cadastrarFuncDois = (e) => {
    e.preventDefault();

    const dados = {
      senha: e.target.senha ? e.target.senha.value : '',
      confirmacaoDeSenha: e.target.confirmacaoSenha ? e.target.confirmacaoSenha.value : ''
    }

    if (Object.values(dados).some(value => value === '')) {
      toast.error("Todos os campos do cadastro devem ser preenchidos.");
      return;
    }

    console.log(dados);

    // Validar a senha
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(dados.senha);

    // Validar se a senha e a confirmação de senha são iguais
    if (!senhaValida) {
      toast.error("A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um número e ter no mínimo 8 caracteres.");
      return;
    }

    if (dados.senha !== dados.confirmacaoDeSenha) {
      toast.error("A senha e a confirmação de senha devem ser iguais.");
      return;
    }

    const cadastroCompleto = {
      nome: firstDados.nome,
      cargo: firstDados.cargo,
      email: firstDados.email,
      senha: dados.senha,
      tipoFuncionario: firstDados.cargo === "Gerente" ? "Admin" : "Comum",
      isGerente: firstDados.cargo === "Gerente" ? true : false,
    }

    console.log(cadastroCompleto);

    api.post(`/funcionarios/${sessionStorage.idEmpresa}`, cadastroCompleto, {
      headers: {
        Authorization: `Bearer ${sessionStorage.authToken}`
      }
    })
      .then((res) => {
        // Cadastro bem-sucedido
        setFuncionarioResponse(res.data);
        toast.success("Sucesso ao cadastrar");
        fecharModal();
        // Recarrega a página
        window.location.reload();
      })
      .catch((erro) => {
        // Erro no cadastro
        toast.error("Erro ao cadastrar!");
      });
  }

  return (
    <div className="funcionarios-content">
      <header className="header-pos-logon">
        <h1 className="textoheader">{sessionStorage.usuario}</h1>
        <img className="imgheader" src={avatar} alt="imagem do usuário" />
      </header>

      <div className="menu-lateral">
        <div className="logo-container">
          <Link to="/">
            <img src={logoPride} alt="Logo PridePoints" className="logo" />
          </Link>
        </div>
        <div className="primeiro-menu">
          <ul>
            <li>
              <a href="#">
                <img src={dashIcon} alt="Logo Item 1" className="logo-item" />
                Overview
              </a>
            </li>
            <li>
              <a href="/eventos-empresa">
                <img
                  src={checkEvento}
                  alt="Logo Item 1"
                  className="logo-item"
                />
                Eventos
              </a>
            </li>
            <li>
              <a href="/avaliacao-empresa">
                <img src={avalBlack} alt="Logo Item 1" className="logo-item" />
                Avaliações
              </a>
            </li>
            <li>
              <a href="#">
                <img src={peopleIcon} alt="Logo Item 1" className="logo-item" />
                Funcionários
              </a>
            </li>
          </ul>
        </div>
        <div className="segundo-menu">
          <ul>
            <li>
              <a href="#">
                <img src={iconPerson} alt="" className="logo-item" />
                Minha conta
              </a>
            </li>
            <li>
              <a href="#">
                <img src={iconHelp} alt="" className="logo-item" />
                Help
              </a>
            </li>
            <li>
              <a href="/" onClick={() =>
                sessionStorage.clear()
              }>
                <img src={iconSair} alt="" className="logo-item" />
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="conteudo">
        <div className="titulo">
          <h1>Funcionários</h1>
          <h2>Cadastre e visualize todos os seus funcionários!</h2>

          <button className="botaoPadraoEmpresa" onClick={abrirModal}>
            Cadastrar
          </button>
        </div>
        <div className="SearchContent">
          <div className="top">
            <div className="search">
              <input type="text" placeholder="Pesquisar" />
              <img src={iconLupa} alt="ícone lupa" />
            </div>

            <div className="filtro">
              <button onClick={openCSVModal}>
                <img src={downloadIcon} alt="ícone download" />
              </button>
            </div>
          </div>
        </div>
        <div className="itens">
          {listaFuncionarios.map((evento) => (
            <CardFuncionario
              img={imgFuncionario}
              nome={evento.nome}
              cargo={evento.cargo}
              email={evento.email}
            />
          ))}
        </div>
        {modalAberto && (
          <div className="modalEmpresa">
            <div className="modalContainer">
              <div className="boxModal">
                <div className="modalHeader">
                  <button onClick={fecharModal}>X</button>
                  <h1>Adicionar Funcionário</h1>
                </div>
                <div className="modalBody">
                  {parte1 && (
                    <form onSubmit={cadastrarFuncFirst} className="formModal">
                      <label>Nome</label>
                      <input type="text" placeholder="" name="nome" />
                      <label>Cargo</label>
                      <input type="text" placeholder="" name="cargo" />
                      <label>Email</label>
                      <input type="text" placeholder="someone@email.com" name="email" />
                      <div className="botoes-formulario">
                        <button onClick={fecharModal}>Cancelar</button>
                        <button type='submit'>
                          Continuar
                        </button>
                      </div>
                    </form>
                  )}

                  {!parte1 && (
                    <form className="formModal" onSubmit={cadastrarFuncDois}>
                      <label>Senha</label>
                      <input type="password" placeholder="*********" name="senha" />
                      <label>Confirmação de senha</label>
                      <input type="password" placeholder="*********" name="confirmacaoSenha" />
                      <div className="botoes-formulario">
                        <button type='submit'>Voltar</button>
                        <button type='submit'>Finalizar</button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {csvModalAberto && (
          <div className="modal-cadastroFuncionario-overlay">
            <div className="modal-cadastroFuncionario">
              <div className="close">
                <img
                  src={iconClose}
                  onClick={() => {
                    closeCSVModal();
                  }}
                  width="30px"
                  height="30px"
                ></img>
              </div>
              <h1>Como deseja seguir?</h1>
              <div className="container-cards">
                <Link to={"#"} className="link-style">
                  <div className="cardFuncionario-modal" onClick={downloadCSV}>
                    <h2>Fazer a exportação em CSV</h2>
                    <img src={excel} width="100px" height="100px" />
                  </div>
                </Link>
                <Link to={"#"} className="link-style">
                  <div className="cardFuncionario-modal borderFuncionario-color" onClick={exportacaoTXT}>
                    <h2>Fazer a exportaçãoem TXT</h2>
                    <img src={text} width="100px" height="100px" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default Funcionarios;

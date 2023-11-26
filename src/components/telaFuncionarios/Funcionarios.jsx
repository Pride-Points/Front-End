import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoPride from '../../assets/logo-dark (1).png';
import peopleIcon from '../../assets/people.svg';
import checkEvento from '../../assets/Vector.svg';
import dashIcon from '../../assets/dashBlack.svg';
import avalBlack from '../../assets/avalBlack.svg';
import avatar from '../../assets/avatar.png';
import iconPerson from '../../assets/icon-person.svg';
import iconHelp from '../../assets/icon-help.svg';
import iconSair from '../../assets/icon-sair.svg';
import iconLupa from '../../assets/lupa-icon.svg';
import iconFiltro from '../../assets/icon_filter.svg';
import userIcon from '../../assets/userCard.svg'
import user2 from '../../assets/user2.svg';
import downloadIcon from '../../assets/downloadIcon.svg';
import './funcionarios.css';

const Funcionarios = () => {
    const [modalAberto, setModalAberto] = useState(false);
    const [parte1, setParte1] = useState(true);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <div className="funcionarios-content">
            <header className="header-pos-logon">
                <h1 className="textoheader">empresa.nome</h1>
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
                            <a href="#">
                                <img src={checkEvento} alt="Logo Item 1" className="logo-item" />
                                Eventos
                            </a>
                        </li>
                        <li>
                            <a href="#">
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
                            <a href="#">
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
                            <button>
                                <img src={downloadIcon} alt="ícone download" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="itens">
                    <div class="card">
                        <img src={userIcon} alt="Imagem do Card" class="card-image" />
                        <div class="card-content">
                            <h3 class="card-title">Nayara Limeira</h3>
                            <p class="card-paragraph">Cargo: atendente</p>
                            <p class="card-paragraph">Email: NayLimeiraAzeved@gmail.com</p>
                        </div>
                        <div class="card-buttons">
                            <div class="edit-button">Editar</div>
                            <div class="delete-button">Excluir</div>
                        </div>
                    </div>

                    <div class="card">
                        <img src={user2} alt="Imagem do Card" class="card-image" />
                        <div class="card-content">
                            <h3 class="card-title">Tâmara Oliveira</h3>
                            <p class="card-paragraph">Cargo: consultora </p>
                            <p class="card-paragraph">Email: TamOliveiranuness@gmail.com</p>
                        </div>
                        <div class="card-buttons">
                            <div class="edit-button">Editar</div>
                            <div class="delete-button">Excluir</div>
                        </div>
                    </div>

                </div>

                {modalAberto && (
                    <div className="modalEmpresa">
                        <div className="modalContainer">
                            <div className="boxModal">
                                <div className="modalHeader">
                                    <h1>Adicionar Funcionário</h1>
                                </div>
                                <div className="modalBody">
                                    {parte1 && (
                                        <form className="formModal">

                                            <label>Nome</label>
                                            <input type="text" placeholder="" />
                                            <label>Cargo</label>
                                            <input type="text" placeholder="" />
                                            <label>Email</label>
                                            <input type="text" placeholder="someone@email.com" />
                                            <div className="botoes-formulario">
                                                <button onClick={fecharModal}>Cancelar</button>
                                                <button onClick={() => setParte1(false)}>Continuar</button>
                                            </div>
                                        </form>
                                    )}

                                    {!parte1 && (
                                        <form className="formModal">

                                            <label>Senha</label>
                                            <input type="text" placeholder="*********" />
                                            <label>Confirmação de senha</label>
                                            <input type="text" placeholder="*********" />
                                            <div className="botoes-formulario">
                                                <button onClick={() => setParte1(true)}>Voltar</button>
                                                <button onClick={fecharModal}>Finalizar</button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div >
    );
};

export default Funcionarios;

import React, { useState, useEffect } from 'react';
import "./Eventos.css";
import logoPride from "../../assets/logo-dark (1).png";
import { Link } from 'react-router-dom';
import peopleIcon from "../../assets/people.svg";
import checkEvento from "../../assets/eventosColor.svg";
import dashIcon from "../../assets/dashBlack.svg";
import avalBlack from "../../assets/avalBlack.svg";
import avatar from "../../assets/avatar.png";
import iconPerson from "../../assets/icon-person.svg";
import iconHelp from "../../assets/icon-help.svg";
import iconSair from "../../assets/icon-sair.svg";
import searchIcon from '../../assets/search-icon.svg';
import calendarIcon from '../../assets/icon-calendar.svg';
import MainContentEmpresa from "./MainContentEmpresa.jsx";
import imgEvento1 from "../../assets/img-evento1.png";

function Evento() {
    const [modalAberto, setModalAberto] = useState(false);
    const [eventos, setEventos] = useState([]);
    const [mostrarFormulario, setMostrarFormulario] = useState(true);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    const eventosDoBancoDeDados = [
        {
            img: imgEvento1,
            titulo: 'Inclusão LGBT',
            descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
            info: 'Av.Paulista',
            data: '15/08/2023',
        },
        {
            img: imgEvento1,
            titulo: 'Inclusão LGBT',
            descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
            info: 'Av.Paulista',
            data: '15/08/2023',
        },
        {
            img: imgEvento1,
            titulo: 'Inclusão LGBT',
            descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
            info: 'Av.Paulista',
            data: '15/08/2023',
        }, {
            img: imgEvento1,
            titulo: 'Inclusão LGBT',
            descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
            info: 'Av.Paulista',
            data: '15/08/2023',
        },
        // Outros eventos...
    ];

    useEffect(() => {
        // Aqui seria a lógica para buscar os eventos do banco de dados
        // Por enquanto, usei os dados acima
        setEventos(eventosDoBancoDeDados);
    }, []);

    const alternarConteudo = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    return (
        <div className='corpo'>
            <header className='header-pos-logon'>
                <h1 className='textoheader'>empresa.nome</h1>
                <img className='imgheader' src={avatar} alt="imagem do usuário" />
            </header>
            <div className="menu-lateral">

                <div className='logo-container'>
                    <Link to="/">
                        <img src={logoPride} alt="Logo PridePoints" className='logo' />
                    </Link>
                </div>
                <div className='primeiro-menu'>
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
                                <p className='pag-atual'>Eventos</p>
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
                <div className='segundo-menu'>
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


            {mostrarFormulario ? (
                <div className="lista-eventos-container">

                    <MainContentEmpresa
                        tituloPgn="Eventos"
                        subtituloPgn="Encontre eventos para você participar"
                        eventos={eventos}
                    />

                </div>
            ) : (
                <div className='conteudo'>
                    <div className='titulo'>
                        <h1>Eventos</h1>
                        <h2>Crie e veja seus eventos!</h2>
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Pesquisar" className="bar-input" />
                        <span className="search-icon">
                            <img src={searchIcon} alt=" ícone de busca" />
                        </span>
                    </div>
                    <div className='itens'>
                        <span className='calendario'>
                            <img src={calendarIcon} alt="icone de calendario" />
                        </span>
                        <h1>Crie seus eventos!</h1>

                        <button className='botaoPadraoEmpresa' onClick={abrirModal}>
                            Criar
                        </button>

                    </div>
                </div>

            )}

            {modalAberto && (
                <div className="modalEmpresa">


                    <div className="modalContainer">
                        <div className='boxModal'>
                            <div className="modalHeader">
                                <h1>Criar evento</h1>
                                <button onClick={fecharModal}>X</button>
                            </div>
                            <div className="modalBody">
                                <form className="formModal">
                                    <label>Nome do evento</label>
                                    <input type="text" placeholder="Nome do evento" />
                                    <label>Descrição</label>
                                    <textarea type="text" placeholder="Descrição" />
                                    <label>Local</label>
                                    <input type="text" placeholder="Local" />
                                    <label>Data</label>
                                    <input type="date" placeholder="Data" />
                                </form>
                            </div>
                            <div className="modalFooter">
                                <button className='botaoPadraoEmpresa' onClick={fecharModal}>Criar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
}

export default Evento;
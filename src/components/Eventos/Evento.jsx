import React, { useState } from 'react';
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


function Evento() {
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

                    <button className='butao'>
                        Criar
                    </button>

                </div>


            </div>
        </div>
    );
}

export default Evento;
import React, { useState, useEffect } from 'react';

import "./headerMenuLateral.css";

import logoPride from "../../assets/logo-dark (1).png";
import { Link } from 'react-router-dom';
import peopleIcon from "../../assets/people.svg";
import avatar from "../../assets/avatar.svg";
import iconPerson from "../../assets/icon-person.svg";
import iconHelp from "../../assets/icon-help.svg";
import iconSair from "../../assets/icon-sair.svg";
import searchIcon from '../../assets/search-icon.svg';
import calendarIcon from '../../assets/icon-calendar.svg';
import checkEvento from "../../assets/icon-eventos.svg";


function MenuLateral(props) {
  return (  
  <div className='corpo'>
  <header className='header-pos-logon'>
      <h1 className='textoheader'>{sessionStorage.usuario}</h1>
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
                  <a href="/dash">
                      <img src={props.dashIcon} alt="Logo Item 1" className="logo-item" />
                      <p className={props.classColor}>Overview</p>
                  </a>
              </li>
              <li>
                  <a href="eventos-empresa">

                      <img src={checkEvento} alt="Logo Item 1" className="logo-item" />
                     Eventos
                  </a>
              </li>
              <li>
                  <a href="/avaliacao-empresa">
                      <img src={props.avalIcon} alt="Logo Item 1" className="logo-item" />
                      <p className={props.classColorAval}>Avaliações</p>
                  </a>
              </li>
              <li>
                  <a href="/funcionarios">
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
                      <img src={iconHelp} alt="" className="logo-item" />
                      Help
                  </a>
              </li>
              <li>
                  <a href="/">
                      <img src={iconSair} alt="" className="logo-item" onClick={() => sessionStorage.clear()}/>
                      Sair
                  </a>
              </li>
          </ul>
      </div>
  </div>
</div>
  );
}

export default MenuLateral;
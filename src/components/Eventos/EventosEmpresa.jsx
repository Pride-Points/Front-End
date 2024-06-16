import React, { useState, useEffect } from "react";
import "./Eventos.css";
import logoPride from "../../assets/logo-dark (1).png";
import { Link } from "react-router-dom";
import peopleIcon from "../../assets/people.svg";
import checkEvento from "../../assets/eventosColor.svg";
import dashIcon from "../../assets/dashBlack.svg";
import avalBlack from "../../assets/icon-avaliacoes.png";
import avatar from "../../assets/avatar.png";
import iconPerson from "../../assets/icon-person.svg";
import iconHelp from "../../assets/icon-help.svg";
import iconSair from "../../assets/icon-sair.svg";
import searchIcon from "../../assets/search-icon.svg";
import calendarIcon from "../../assets/icon-calendar.svg";
import MainContentEmpresa from "./MainContentEmpresa.jsx";
import api from "../../api/api.js";
import { toast } from 'react-toastify';

function Evento() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listarEventos = async () => {
      try {
        const response = await api.get(`/eventos/empresa/${sessionStorage.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.authToken}`
          }
        });
        if (response.status == 204) {
          console.log("nao existe nenhum evento cadastrado")
          console.log(response)
        }
        else if (response.status !== 200) {
          toast.error('"Erro ao obter eventos. Por favor, tente novamente mais tarde."')
          console.log(response)

          return;
        }

        setEventos(response.data);
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setEventos([]);
        } else {
          toast.error(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    listarEventos();
  }, []);


  return (
    <div className="corpo">
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
              <a href="/dash">
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
                <p className="pag-atual">Eventos</p>
              </a>
            </li>
            <li>
              <a href="/avaliacao-empresa">
                <img src={avalBlack} alt="Logo Item 1" className="logo-item" />
                Avaliações
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
        <div className="segundo-menu">
          <ul>
            <li>
              <a href="#">
                <img src={iconHelp} alt="" className="logo-item" />
                Help
              </a>
            </li>
            <li>
              <a href="/">
                <img src={iconSair} alt="" className="logo-item" onClick={() => sessionStorage.clear()} />
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="lista-eventos-container">
        <MainContentEmpresa
          tituloPgn="Eventos"
          subtituloPgn="Crie e veja seus eventos"
          eventos={eventos}
        />
      </div>
    </div>
  );
}

export default Evento;
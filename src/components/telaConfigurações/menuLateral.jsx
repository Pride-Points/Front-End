import React from 'react';
import Logo from '../../assets/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faCalendarAlt, faStar, faCog, faQuestionCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./menuLateral.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <a href="#">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
      </div>

      <div className="sidebar-menu">
        <a href="#"><FontAwesomeIcon icon={faMap} /><span>Mapa</span></a>
        <a href="#"><FontAwesomeIcon icon={faCalendarAlt} /><span>Eventos</span></a>
        <a href="#"><FontAwesomeIcon icon={faStar} /><span>Avaliações</span></a>
        <a href="#"><FontAwesomeIcon icon={faCog} /><span>Configurações</span></a>
      </div>

      <div className="bottom-options">
        <a href="#"><FontAwesomeIcon icon={faQuestionCircle} /> Help Desk</a>
        <div className="btn-sair">
          <a href="#"><FontAwesomeIcon icon={faSignOutAlt} /> Sair</a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
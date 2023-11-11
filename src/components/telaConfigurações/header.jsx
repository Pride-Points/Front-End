import React from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function HeaderConfig() {
  return (
    <div className="header">
      <div className="user-info">
        <b id="nome-usuario">Isabela Saori</b>
        <a><img alt="Seu Nome" />img</a>
      </div>
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default HeaderConfig;
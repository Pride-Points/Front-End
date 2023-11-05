import React from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { userImage } from '../../assets/img-user.png';

function Header() {
  return (
    <div className="header">
      <div className="user-info">
        <b id="nome-usuario">Isabela Saori</b>
        <a><img src={userImage} alt="Seu Nome" /></a>
      </div>
      <div className="user-icon">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}

export default Header;
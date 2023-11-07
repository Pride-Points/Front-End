import React from 'react';
import './header.css';
import AvatarUser from '../../assets/avatar.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function HeaderConfig() {
  return (
    <div className="header">
      <div className="user-info">
        <b id="nome-usuario">Isabela Saori</b>
        <a><img src= {AvatarUser} alt="Seu Nome" /></a>
      </div>
  
    </div>
  );
}

export default HeaderConfig;
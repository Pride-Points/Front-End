//JSX é o JS que inserimos html nele
// Pq -> porque o header vai ter funções (abrir modal por exemplo)
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';


function Header({ openModal }) {

  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [redirectPath, setRedirectPath] = useState("/");

  useEffect(() => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    const decodedToken = jwtDecode(token);

    // Define o caminho de redirecionamento com base na role
    if (decodedToken.roles.includes('ROLE_ADMIN')) {
      setRedirectPath("/dash");
    } else if (decodedToken.roles.includes('ROLE_FISICA')) {
      setRedirectPath("/home-usuario-eventos");
    }
  }
}, []);

  useEffect(() => {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
      setUsuarioLogado(usuario);
    }
  }, []);

  return (
    <header>
      <div className="left">
        <img
          src={Logo}
          alt="Logo da Pride Points"
          title="Logo da Pride Points"
        />
      </div>

      <div className="center">
        <nav>
          <ul>
            <li><ScrollLink to="WelcomeSection" smooth={true} duration={500} offset={-250}>Sobre o projeto</ScrollLink></li>
            <li><ScrollLink to="ParaVoce" smooth={true} duration={500} offset={-240}>Para você</ScrollLink></li>
            <li><ScrollLink to="ParaSeuNegocio" smooth={true} duration={500} offset={-220}>Para seu negócio</ScrollLink></li>
          </ul>
        </nav>
      </div>

      <div className="right">
      {usuarioLogado ? (
          <RouterLink to={redirectPath} style={{ textDecoration: 'none' }}><span className="user-name" >Olá, {usuarioLogado}</span></RouterLink>
        ) : (
          <>
            <RouterLink className="login" to="/login">Login</RouterLink>
            <button onClick={openModal}>Cadastre-se</button>
          </>
        )}
      </div>
    </header>
  );
}

//exportando o componente de forma global (default)
export default Header;

import "./menuLateral.css";

import iconMapa from "../../../assets/icon-mapa.svg";
import iconCalendario from "../../../assets/icon-calendario.svg";
import iconEstrela from "../../../assets/icon-estrela.svg";
import iconConfiguracoes from "../../../assets/icon-configuracoes.svg";
import iconHelpDesk from "../../../assets/icon-helpdesk.svg";
import iconSair from "../../../assets/icon-sair.svg";
import Logo from "../../../assets/logo-dark.png"

import { Link, useLocation } from "react-router-dom";

function MenuLateral() {
  const location = useLocation();

  return (
    <aside>
      <img className="logo" src={Logo} alt="Logo" />

      <div className="content-middle">
        <nav>
          <ul>
            <li>
              <Link
                to="/home-usuario "
                className={location.pathname === "/home-usuario" ? "active" : ""}>
                <img src={iconMapa} alt="icone mapa" /> Mapa
              </Link>
            </li>
            <li>
              <Link to="/eventos" className={location.pathname === '/eventos' ? 'active' : ''}>
                <img src={iconCalendario} alt="icone calendario" /> Eventos
              </Link>
            </li>
            <li>
              <Link to="/avaliacoes" className={location.pathname === '/avaliacoes' ? 'active' : ''}>
                <img src={iconEstrela} alt="icone estrela" /> Avaliações
              </Link>
            </li>
            <li>
              <Link to="/configuracoes" className={location.pathname === '/configuracoes' ? 'active' : ''}>
                <img src={iconConfiguracoes} alt="icone configuracoes"/> Configurações
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-bottom">
        <Link to="/Mapa">
          <img src={iconHelpDesk} alt="icone de help desk" /> Help
        </Link>
        <Link to="/" onClick={() => 
            sessionStorage.clear()
          }>
          <img src={iconSair} alt="icone sair"/> Sair
        </Link>
      </div>
    </aside>
  );
}

export default MenuLateral;

import "./menuLateral.css";
import iconDash from "../../assets/icon-chart.svg";
import iconEventos from "../../assets/icon-eventos.svg";
import iconAvaliacoes from "../../assets/icon-avaliacoes.svg";
import iconConfiguracoes from "../../assets/icon-config.svg";
import iconHelpDesk from "../../assets/icon-helpdesk.svg"
import iconSair from "../../assets/icon-sair.svg";
import Logo from "../../assets/logo-dark.svg"

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
              <Link to="/Dash" className={location.pathname === "/Dash" ? "active" : ""}>
                <img src={iconDash} alt="icone dash" /> Dashboard
              </Link>

            </li>
            <li>
              <Link to="/eventos" className={location.pathname === '/eventos' ? 'active' : ''}>
                <img src={iconEventos} alt="icone eventos" /> eventos
              </Link>
            </li>
            <li>
              <Link to="/avaliacoes" className={location.pathname === '/avaliacoes' ? 'active' : ''}>
                <img src={iconAvaliacoes} alt="icone estrela" /> Avaliações
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="content-bottom">
        <Link to="/Mapa">
          <img src={iconHelpDesk} alt="icone de help desk" /> Help
        </Link>
        <Link to="/Mapa">
          <img src={iconSair} alt="icone sair" /> Sair
        </Link>
      </div>
    </aside>
  );
}

export default MenuLateral;
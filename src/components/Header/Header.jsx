//JSX é o JS que inserimos html nele
// Pq -> porque o header vai ter funções (abrir modal por exemplo)
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link as RouterLink} from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';

function Header({ openModal }) {
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
      <a ><RouterLink className="login" to="/login">login</RouterLink></a>

        <button onClick={() => openModal((prev) => !prev)}>Cadastre-se</button>
      </div>
    </header>
  );
}

//exportando o componente de forma global (default)
export default Header;

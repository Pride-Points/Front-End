//JSX é o JS que inserimos html nele
// Pq -> porque o header vai ter funções (abrir modal por exemplo)
import "./header.css";
import Logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

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
            <li>Sobre o projeto</li>
            <li>Para você</li>
            <li>Para seu negócio</li>
          </ul>
        </nav>
      </div>

      <div className="right">
      <a ><Link className="login" to="/login">login</Link></a>

        <button onClick={() => openModal((prev) => !prev)}>Cadastre-se</button>
      </div>
    </header>
  );
}

//exportando o componente de forma global (default)
export default Header;

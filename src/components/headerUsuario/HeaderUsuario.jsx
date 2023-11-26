import "./headerUsuario.css";

import imgUser from "../../assets/avatar.svg";


function HeaderUsuario(){
  return(
    <header className="HeaderUsuario">
      <div className="usuario">
        <label> {sessionStorage.usuario}</label>
        <img src={imgUser} alt=" imagem usuário" />
      </div>
     
    </header>

  );
}

export default HeaderUsuario;
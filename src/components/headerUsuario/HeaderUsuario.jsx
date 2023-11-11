import "./headerUsuario.css";

import imgUser from "../../assets/avatar.svg";


function HeaderUsuario(){
  return(
    <header>
      <div className="usuario">
        <label> usuario.nome</label>
        <img src={imgUser} alt=" imagem usuário" />
      </div>
     
    </header>

  );
}

export default HeaderUsuario;
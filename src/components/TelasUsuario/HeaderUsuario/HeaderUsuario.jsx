import "./headerUsuario.css";

import imgUser from "../../../assets/avatar.png";


function HeaderUsuario(){
  return(
    <header className="headerUsuario">
      <div className="usuario">
        <label> usuario.nome</label>
        <img src={imgUser} alt=" imagem usuário" />
      </div>
      
    </header>

  );
}

export default HeaderUsuario;
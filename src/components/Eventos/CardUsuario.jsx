import React, { useState } from "react";
import trashIcon from "../../assets/trash.svg";
import iconModalEvent from "../../assets/icon modal event.png";


function CardUsuario(props) {

  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => () => {
    setModalAberto(true);
  };

  const fecharModal = () => setModalAberto(false);

  var partesData = props?.data?.split('/');
  var dataISO = partesData?.[2] + '-' + partesData?.[1] + '-' + partesData?.[0];

  return (
    <div className="cardUsuario">
      <div className="cardImage">
        <img src={props.img} alt="imagem" />
      </div>

      <div className="cardText">
        <h3>{props.titulo}</h3>
        <p>{props.descricao}</p>
      </div>

      <div className="cardRight">
        <div className="cardButtons">
          <button onClick={abrirModal()}>Editar</button>
          <button className="trashButton">
            <img src={trashIcon} alt="" />
          </button>
        </div>

        <div className="cardInfo">
          <span className="info">{props.info}</span>
          <span className="data">{props.data}</span>
        </div>
      </div>

      {modalAberto && (
        <div className="modalEmpresa">
          <div className="modalContainer">
            <div className="boxModal">
              <div className="modalHeader">
                <button onClick={fecharModal}>X</button>
              </div>
              <div className="modalBody">
                <img src={iconModalEvent} alt="" />
                <form className="formModal">
                  <label>Nome Evento</label>
                  <input type="text" placeholder="Nome do evento" defaultValue={props.titulo}/>
                  <label>Descrição</label>
                  <textarea type="text" placeholder="Descrição" defaultValue={props.descricao} />
                  <label>Local</label>
                  <input type="text" placeholder="Local" defaultValue={props.info}/>
                  <label>Data</label>
                  <input type="date" placeholder="Data" id="date" defaultValue={dataISO}/>
                </form>
              </div>
              <div className="modalFooter">
                <button className="botaoPadraoEmpresa" onClick={fecharModal}>
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardUsuario;

import React, { useState } from "react";
import "./mainContent.css";
import SearchContentEmpresa from "./SearchContentEmpresa.jsx";
import iconModalEvent from "../../assets/icon modal event.png";

function MainContentEmpresa(props) {
  const [modalAberto, setModalAberto] = useState(false);
  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <div className="mainContentEmpresa">
      <div className="titulo">
        <h1>{props.tituloPgn}</h1>
        <h2>{props.subtituloPgn}</h2>
        <button className="buttonCreateEvent" onClick={abrirModal}>
          Criar
        </button>
      </div>

      <SearchContentEmpresa
        eventos={props.eventos}
        reviews={props.reviews}
        isClickable={props.isClickable}
      />

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
                  <label>Nome do evento</label>
                  <input type="text" placeholder="Nome do evento" />
                  <label>Descrição</label>
                  <textarea type="text" placeholder="Descrição" />
                  <label>Local</label>
                  <input type="text" placeholder="Local" />
                  <label>Data</label>
                  <input type="date" placeholder="Data" id="date"/>
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

export default MainContentEmpresa;

import React, { useState } from "react";
import trash from "../../assets/trash.svg";
import defaultIcon from "../../assets/defaultIcon.png";

function CardFuncionario(props) {
  const [modalAbertoFuncionario, setModalAbertoFuncionario] = useState(false);

  const abrirModalFuncionario = () => setModalAbertoFuncionario(true);
  const fecharModalFuncionario = () => setModalAbertoFuncionario(false);

  return (
    <div className="card">
      <img src={props.img} alt="Imagem do Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{props.nome}</h3>
        <p className="card-paragraph">{props.cargo}</p>
        <p className="card-paragraph">{props.email}</p>
      </div>
      <div className="card-buttons">
        <button className="edit-button" onClick={abrirModalFuncionario}>
          Editar
        </button>
        <div className="delete-button">
          <img src={trash} alt="Icone Excluir" />
        </div>
      </div>

      {modalAbertoFuncionario && (
        <div className="modalEmpresa">
          <div className="modalContainer">
            <div className="boxModal">
              <div className="modalHeader">
                <button onClick={fecharModalFuncionario}>X</button>
              </div>
              <div className="modalBody ">
                <form className="formModal">
                  <label>Nome do Funcionário</label>
                  <input
                    type="text"
                    placeholder="Nome do evento"
                    defaultValue={props.nome}
                  />
                  <label>Cargo do Funcionário</label>
                  <textarea
                    type="text"
                    placeholder="Descrição"
                    defaultValue={props.cargo}
                  />
                  <label>Email do Funcionário</label>
                  <input
                    type="text"
                    placeholder="Local"
                    defaultValue={props.email}
                  />
                </form>
              </div>
              <div className="modalFooter">
                <button
                  className="botaoPadraoEmpresa"
                  onClick={fecharModalFuncionario}
                >
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

export default CardFuncionario;

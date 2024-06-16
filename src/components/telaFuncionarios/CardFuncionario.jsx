import React, { useState } from "react";
import trash from "../../assets/trash.svg";
import "./CardFuncionario.css";
import api from "../../api/api";
import { toast } from 'react-toastify';

function CardFuncionario(props) {
  const [modalAbertoFuncionario, setModalAbertoFuncionario] = useState(false);

  const abrirModalFuncionario = () => setModalAbertoFuncionario(true);
  const fecharModalFuncionario = () => setModalAbertoFuncionario(false);

  const [nomeFuncionario, setNomeFuncionario] = useState(props.nome);
  const [cargoFuncionario, setCargoFuncionario] = useState(props.cargo);
  const [emailFuncionario, setEmailFuncionario] = useState(props.email);


  const handleNomeChange = (event) => {
    setNomeFuncionario(event.target.value);
  };

  const handleCargoChange = (event) => {
    setCargoFuncionario(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailFuncionario(event.target.value);
  };

  const handleSalvarClick = async () => {
    const funcionarioAtualizado = {
      nome: nomeFuncionario,
      cargo: cargoFuncionario,
      email: emailFuncionario
    };
  
    try {
      // Chame o endpoint PUT com o objeto funcionarioAtualizado
      const responsePUT = await api.put(`/funcionarios/${props.idFuncionario}`, funcionarioAtualizado, {
        headers: {
          'Authorization': `Bearer ${sessionStorage.authToken}`,
        },
      });
  
      if (responsePUT.status === 200) {
        // Feche o modal

        alert('Funcionário Atualizado com sucesso!')
        
        fecharModalFuncionario();
        // Atualize a página para refletir as alterações
        window.location.reload();
      } else {
        // Tratamento de erro se a resposta não estiver ok
        console.error("Falha ao atualizar funcionário:", responsePUT.statusText);
      }
    } catch (error) {
      // Tratamento de erro se ocorrer um erro durante a requisição
      console.error("Erro ao atualizar funcionário:", error);
    }
  };

  const deletarFuncionario = async () => {
    try {
      // Passo 1: Deletar o funcionário
      if (props.idFuncionario === 1) {
        toast.error("Você não pode deletar o dono da empresa!");
        return;
      }

      const responseDelete = await api.delete(`/funcionarios/${sessionStorage.idEmpresa}/${props.idFuncionario}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${sessionStorage.authToken}`,
        },
      });

      if (responseDelete.status === 200) {
        alert("Funcionario deletado com sucesso!")
        window.location.reload()
      } else {
        // Tratamento de erro
        alert("Falha ao deletar o funcionário.");
      }
    } catch (error) {
      console.error("Erro ao deletar funcionário:", error);
    }
  };

  return (
    <div className="cardFuncionario">
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
          <img src={trash} alt="Icone Excluir" onClick={deletarFuncionario} style={{ cursor: 'pointer' }} />
        </div>
      </div>

      {modalAbertoFuncionario && (
        <div className="modalEmpresa">
          <div className="modalContainer">
            <div className="boxModal">
              <div className="modalHeaderCard">
                <h1>Editar Funcionario</h1>
                <button onClick={fecharModalFuncionario}>X</button>

              </div>
              <div className="modalBody ">
                <form className="formModal">
                  <label>Nome do Funcionário</label>
                  <input
                    type="text"
                    placeholder="Nome do funcionário"
                    value={nomeFuncionario}
                    onChange={handleNomeChange}
                  />
                  <label>Cargo do Funcionário</label>
                  <input
                    placeholder="Cargo"
                    value={cargoFuncionario}
                    onChange={handleCargoChange}
                  />
                  <label>Email do Funcionário</label>
                  <input
                    type="text"
                    placeholder="Email"
                    value={emailFuncionario}
                    onChange={handleEmailChange}
                  />
                </form>
              </div>
              <div className="modalFooter">
                <button
                  className="botaoPadraoEmpresaCard"
                  onClick={handleSalvarClick}
                >Salvar
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

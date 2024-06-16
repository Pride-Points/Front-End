import React, { useState } from "react";
import trashIcon from "../../assets/trash.svg";
import iconModalEvent from "../../assets/icon modal event.png";
import api from "../../api/api.js"; // Importe a instância do axios ou fetch que você está usando para fazer as solicitações HTTP
import { toast } from 'react-toastify';

function CardUsuario(props) {

  const [modalAberto, setModalAberto] = useState(false);
  const [nomeEvento, setNomeEvento] = useState("");
  const [descricaoEvento, setDescricaoEvento] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const abrirModal = () => () => {
    setModalAberto(true);
  };
  

  const handleSalvarEvento = async () => {
  
    const novoEvento = {
      nome: nomeEvento,
      descricaoEvento: descricaoEvento,
      imgEvento: urlImagem,
      dtEvento: formatDate(dataEvento)
    };

    api.put(`/eventos/${sessionStorage.idEmpresa}/${props.id}`, novoEvento, {
      headers: {
        Authorization: `Bearer ${sessionStorage.authToken}`
      }
    })
      .then((res) => {
        toast.success("Sucesso ao atualizar!");
        window.location.reload();
      })
      .catch((erro) => {
        // Erro no cadastro
        toast.error("Erro ao atualizar!");
      });

    fecharModal();
  };

  const handleExcluirEvento = async () => {
    try {
      await api.delete(`/eventos/${props.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.authToken}`
        }
      });
      toast.success("Evento excluído com sucesso!");
      window.location.reload(); // Recarrega a página após a exclusão
    } catch (error) {
      toast.error("Erro ao excluir o evento!");
    }
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
            <img src={trashIcon} alt="" onClick={handleExcluirEvento} />
          </button>
        </div>

        <div className="cardInfo">
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
                <label>Nome do evento</label>
                <input type="text" placeholder="Nome do evento" value={nomeEvento} onChange={(e) => setNomeEvento(e.target.value)} />
                <label>Descrição</label>
                <textarea type="text" placeholder="Descrição" value={descricaoEvento}  onChange={(e) => setDescricaoEvento(e.target.value)} />
                <label>Url Imagem</label>
                <input type="text" placeholder="Url Imagem" value={urlImagem}  onChange={(e) => setUrlImagem(e.target.value)} />
                <label>Data</label>
                <input type="date" placeholder="Data" value={dataEvento}onChange={(e) => setDataEvento(e.target.value)} />
              </form>
            </div>
            <div className="modalFooter">
              <button className="botaoPadraoEvento" onClick={handleSalvarEvento}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
}

const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

export default CardUsuario;

import React, { useState } from "react";
import "./mainContent.css";
import SearchContentEmpresa from "./SearchContentEmpresa.jsx";
import iconModalEvent from "../../assets/icon modal event.png";
import api from "../../api/api.js"; // Importe a instância do axios ou fetch que você está usando para fazer as solicitações HTTP
import { toast } from 'react-toastify';

function MainContentEmpresa(props) {
  const [modalAberto, setModalAberto] = useState(false);
  const [nomeEvento, setNomeEvento] = useState("");
  const [descricaoEvento, setDescricaoEvento] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [dataEvento, setDataEvento] = useState("");

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  const handleSalvarEvento = async () => {
  
    const novoEvento = {
      nome: nomeEvento,
      descricaoEvento: descricaoEvento,
      imgEvento: urlImagem,
      dtEvento: formatDate(dataEvento)
    };

    const cadastrarEvento = async () => {
      try {
          await api.post(`/eventos/${sessionStorage.idEmpresa}`, novoEvento, {
              headers: {
                  Authorization: `Bearer ${sessionStorage.authToken}`
              }
          });
          toast.success("Sucesso ao cadastrar");
              console.log(novoEvento)
              console.log()
              window.location.reload();
            } catch (erro) {
          if(novoEvento.descricaoEvento.length <20 ){
            toast.error("A descrição do evento tem que ter pelo menos 20 caracters");
          }else{
          toast.error("Erro ao cadastrar!");
          }
        }
  };
  
  cadastrarEvento();
    fecharModal();
  };

  return (
    <div className="mainContentEmpresa">
      <div className="titulo">
        <h1>{props.tituloPgn}</h1>
        <h2>{props.subtituloPgn}</h2>
        <button className="buttonCreateEvent" onClick={abrirModal}>Criar</button>
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
                  <input type="text" placeholder="Nome do evento" value={nomeEvento} onChange={(e) => setNomeEvento(e.target.value)} />
                  <label>Descrição</label>
                  <textarea type="text" placeholder="Descrição" value={descricaoEvento} onChange={(e) => setDescricaoEvento(e.target.value)} />
                  <label>Url Imagem</label>
                  <input type="text" placeholder="Url Imagem" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} />
                  <label>Data</label>
                  <input type="date" placeholder="Data" value={dataEvento} onChange={(e) => setDataEvento(e.target.value)} />
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

export default MainContentEmpresa;
import "./popUpEventosGeral.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/foto-pride.svg'
import ModalAvaliacao from '../Modal/modal'; // Importe o componente
import { toast } from 'react-toastify';
import api from "../../../api/api";


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUp(props) {
  const [empresaDetalhes, setEmpresaDetalhes] = useState(null);

  useEffect(() => {
    const buscarEventosDaEmpresaPorId = async () => {
      try {
        const token = sessionStorage.authToken;
  
        const response = await api.get(`http://localhost:8080/eventos/${props.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        if (response.status === 200) {
          if (response.data && response.data.length > 0) {
            setEmpresaDetalhes(response.data);
            console.log(response.data);
          } else {
            toast.error("Não existem eventos!");
          }
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        toast.error("Não existem eventos!");
      }
    };
  
    buscarEventosDaEmpresaPorId();
  }, []);

  let [modalAberto, setModalAberto] = useState(false);
  let abrirModal = () => {
    setModalAberto(true);
    console.log("apertou1")
  };

  let fecharModal = () => {
    setModalAberto(false);
    console.log("aperto21")

  };
  return (

    <div className="popUp">
      <div className="containerBar">
        <div className="nomeBar">
        {empresaDetalhes && empresaDetalhes.nomeFantasia}
          <span className="notaBar">
            2.9
          </span>
        </div>
        <Link to="/home-usuario" className="fecharBar">
          <img src={fecharBar} alt="Botão para fechar o estabelecimento e ir para a tela inicial do mapa" />
        </Link>
      </div>
      <div className="containerDescricao">
        <div className="descricaoBar">
       
        </div>
      </div>
      <div className="containerInformacoes">
        <div>
          Localizado em: <span>Av. Paulista</span>
        </div>
        <div>
          Horário de funcionamento: <span>18:00 - 05:00</span>
        </div>
      </div>
      <div className="botaoAvalie">
        <button onClick={abrirModal}>Avalie</button>
        <ModalAvaliacao onClose={fecharModal} mostrarModal={modalAberto} />
      </div>
      <div className="containerOpcoes">
        <div className="opcoes ">
          <Link to={`/home-usuario-avaliacoes/${props.idEmpresa}`} style={{ textDecoration: 'none', color: 'black' }}>Avalições</Link>
        </div>
        <div className="opcoes selecionada">
          <Link to="/home-eventos" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
        <div className="containerLocalE">
          <div className="containerImagem">
            <img src={imagemPerfil} alt="" />
        
          </div>
          <div className="containerLocalDireita">
            <div className="containerLocalCima">
              <div className="tituloNome">
                Inclusão LGBT
              </div>
              <div className="estrelasEvento">
                Av.Paulista
              </div>
            </div>
            <div className="descricaoAvaliacao">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.
            </div>
            <div className="avaliacaoData">
              18/09/2023
            </div>
          </div>

        </div>
        <div className="containerLocalE">
          <div className="containerImagem">
            <img src={imagemPerfil} alt="" />
      
          </div>
          <div className="containerLocalDireita">
            <div className="containerLocalCima">
              <div className="tituloNome">
                Inclusão LGBT
              </div>
              <div className="estrelasEvento">
                Av.Paulista
              </div>
            </div>
            <div className="descricaoAvaliacao">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.
            </div>
            <div className="avaliacaoData">
              18/09/2023
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default PopUp;
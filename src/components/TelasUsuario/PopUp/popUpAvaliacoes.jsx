
import "./popUpAvaliacoes.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from "../../../assets/avatar.svg"
import ModalAvaliacao from '../Modal/modal'; // Importe o componente
import { toast } from 'react-toastify';
import api from '../../../api/api';
import StarRating from "./estrelas"


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Importe o componente Link do React Router

function PopUp() {
  const [empresaDetalhes, setEmpresaDetalhes] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState(null);
  const [nota2, setNota2] = useState(null);

  useEffect(() => {
    const buscarEmpresaPorId = async (token) => {
      try {
        const userId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken


        const idEmpresa = sessionStorage.getItem("idEmpresaClicada");

        if (!idEmpresa) {
          throw new Error("ID da empresa não encontrado no sessionStorage");
        }

        const response = await api.get(`/empresas/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          setEmpresaDetalhes(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes da empresa:", error);
        toast.error(error.message);
      }
    };

    buscarEmpresaPorId();
  }, []);

  useEffect(() => {
    const buscarAvaliacoes = async (token) => {
      try {
        token = sessionStorage.authToken

        const idEmpresa = sessionStorage.getItem("idEmpresaClicada");

        if (!idEmpresa) {
          throw new Error("ID da empresa não encontrado no sessionStorage");
        }

        const response = await api.get(`/avaliacoes/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {

          setAvaliacoes(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes da empresa:", error);
        toast.error(error.message);
      }
    };

    buscarAvaliacoes();
  }, []);

  useEffect(() => {
    const buscarNotas = async (token) => {
      try {

        token = sessionStorage.authToken

        const idEmpresa = sessionStorage.getItem("idEmpresaClicada");

        if (!idEmpresa) {
          throw new Error("ID da empresa não encontrado no sessionStorage");
        }

        const response = await api.get(`/empresas/media/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          setNota2(response.data);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes da empresa:", error);
        toast.error(error.message);
      }
    };

    buscarNotas();
  }, []);
  let [modalAberto, setModalAberto] = useState(false);

  let abrirModal = () => {
    setModalAberto(true);
  };

  console.log(avaliacoes)

  let fecharModal = () => {
    setModalAberto(false);

  };
  return (
    <div className="popUp">
      <div className="containerBar">
        <div className="nomeBar">
          {empresaDetalhes && empresaDetalhes.nomeFantasia}
          <span className="notaBar">
            <StarRating className="DgEstrela" rating={nota2} />
          </span>
        </div>
        <Link to="/home-usuario" className="fecharBar">
          <img src={fecharBar} alt="Botão para fechar o estabelecimento e ir para a tela inicial do mapa" />
        </Link>
      </div>
      <div className="containerDescricao">
        {/* Conteúdo da descrição, se necessário */}
      </div>
      <div className="containerInformacoes">
        <div>
          Localizado em: <span>{empresaDetalhes && `${empresaDetalhes.cidade}, Nº${empresaDetalhes.numero}`}</span>
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
        <div className="opcoes selecionada">
          <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }}>Avaliações</Link>
        </div>
        <div className="opcoes">
          <Link to="/home-usuario-eventos" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
        {avaliacoes && avaliacoes.length > 0 ? (
          avaliacoes.map((avaliacao) => (
            <div className="containerLocalE" key={avaliacao.id}>
              <div className="containerImagem">
                <img src={imagemPerfil} alt="Imagem de perfil do avaliador" />
              </div>
              <div className="containerLocalDireita">
                <div className="containerLocalCima">
                  <div className="tituloNome">
                    {avaliacao.nomeAvaliador}
                  </div>
                  <div className="estrelasEvento">
                    <StarRating className="DgEstrela" rating={avaliacao.nota} />
                  </div>
                </div>
                <div className="descricaoAvaliacao">
                  {avaliacao.comentario}
                  <div className="box-resposta-avaliacao">
                    <p>Resposta de {empresaDetalhes && empresaDetalhes.nomeFantasia}</p>
                    <div className="box-resp">
                      <img src={avaliacao.title} alt="" />
                      <p>{avaliacao.resp}</p>
                    </div>
                  </div>
                </div>
                <div className="avaliacaoData">
                  {avaliacao.dtAvaliacao}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="mensagemVazio">Não há avaliações</div>
        )}
      </div>
    </div>
  );
}

export default PopUp;
import "./popUpEventosGeral.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/foto-pride.svg'
import ModalAvaliacao from '../Modal/modal'; // Importe o componente
import { toast } from 'react-toastify';
import axios from 'axios';
import StarRating from './estrelas'
import api from "../../../api/api";

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUp() {
  const [empresaDetalhes, setEmpresaDetalhes] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [Eventos, setEventos] = useState(null);

  useEffect(() => {
    const buscarEmpresaPorId = async (token) => {
      try {
        const userId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        console.log(token)
        console.log(userId)


        const idEmpresa = sessionStorage.getItem('idEmpresaClicada');

        if (!idEmpresa) {
          throw new Error('ID da empresa não encontrado no sessionStorage');
        }

        const response = await api.get(`/empresas/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {

          setEmpresaDetalhes(response.data);
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da empresa:', error);
        toast.error(error.message);
      }
    };

    buscarEmpresaPorId();
  }, []);


  useEffect(() => {
    const buscarNotas = async (token) => {
      try {
        const userId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        console.log(token)
        console.log(userId)


        const idEmpresa = sessionStorage.getItem('idEmpresaClicada');

        if (!idEmpresa) {
          throw new Error('ID da empresa não encontrado no sessionStorage');
        }

        const response = await api.get(`/empresas/media/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          console.log(response.data)
          setNota2(response.data);
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da empresa:', error);
        toast.error(error.message);
      }
    };

    buscarNotas();
  }, []);




  useEffect(() => {
    const buscarEventos = async (token) => {
      try {
        const userId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        console.log(token)
        console.log(userId)


        const idEmpresa = sessionStorage.getItem('idEmpresaClicada');

        if (!idEmpresa) {
          throw new Error('ID da empresa não encontrado no sessionStorage');
        }

        const response = await api.get(`/eventos/empresa/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          console.log(response.data)
          setEventos(response.data);
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da empresa:', error);
        toast.error(error.message);
      }
    };

    buscarEventos();
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
          <StarRating className="DgEstrela" rating={nota2} />
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
          <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }}>Avalições</Link>
        </div>
        <div className="opcoes selecionada">
          <Link to="/home-eventos" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
        {Eventos && Eventos.map((evento) => (

          <div className="containerLocalE">
            <div className="containerImagem">
              <img src={imagemPerfil} alt="" />
            </div>
            <div className="containerLocalDireita">
              <div className="containerLocalCima">
                <div className="tituloNome">
                  {evento.nome}
                </div>
                <div className="estrelasEvento2">
                  Av.Paulista
                </div>
              </div>
              <div className="descricaoAvaliacao">
                {evento.descricaoEvento}
              </div>
              <div className="avaliacaoData">
                {evento.dtEvento}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}

export default PopUp;
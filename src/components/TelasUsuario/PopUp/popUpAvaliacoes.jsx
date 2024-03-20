
import "./popUpAvaliacoes.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/PESOSOSOA.svg'
import estrelas from '../../../assets/estrela.png';
import imagemRespondida from '../../../assets/resposta.svg';
import ModalAvaliacao from '../Modal/modal'; // Importe o componente
import { toast } from 'react-toastify';
import axios from 'axios';
import StarRating from "./estrelas"


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUp() {

  const [empresaDetalhes, setEmpresaDetalhes] = useState(null);
  const [avaliacoes, setAvaliacoes] = useState(null);
  const [nota2, setNota2] = useState(null);

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

        const response = await axios.get(`http://75.101.208.160:8080/empresas/${idEmpresa}`, {
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
    const buscarAvaliacoes = async (token) => {
      try {
        const userId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        console.log(token)
        console.log(userId)


        const idEmpresa = sessionStorage.getItem('idEmpresaClicada');

        if (!idEmpresa) {
          throw new Error('ID da empresa não encontrado no sessionStorage');
        }

        const response = await axios.get(`http://75.101.208.160:8080/avaliacoes/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          console.log(response.data)
          setAvaliacoes(response.data);
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes da empresa:', error);
        toast.error(error.message);
      }
    };

    buscarAvaliacoes();
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

        const response = await axios.get(`http://75.101.208.160:8080/empresas/media/${idEmpresa}`, {
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
          Localizado em: <span>{empresaDetalhes && empresaDetalhes.cidade},  Nº{empresaDetalhes && empresaDetalhes.numero}</span>
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
          <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }}>Avalições</Link>

        </div>
        <div className="opcoes">
          <Link to="/home-usuario-eventos" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
        {/* Aqui você vai mapear as avaliações e exibi-las */}
        {avaliacoes && avaliacoes.map((avaliacao) => (
          <div className="containerLocalE" key={avaliacao.id}>
            <div className="containerImagem">
              <img src={imagemPerfil} alt="" />
              <div className="resposta">
                <div className="resposta">

                </div>

              </div>
            </div>
            <div className="containerLocalDireita">
              <div className="containerLocalCima">
                <div className="tituloNome">
                  {avaliacao.nomeAvaliador}
                </div>
                <div className="estrelasEvento">
                  {/* Renderizando as estrelas com base na nota da avaliação */}
                  <StarRating className="DgEstrela" rating={avaliacao.nota} />
               
                  </div>
              </div>
              <div className="descricaoAvaliacao">
                {avaliacao.comentario}
              </div>
              <div className="avaliacaoData">
                {avaliacao.dtAvaliacao}
              </div>
            </div>
            {/* Adicione o restante das informações da avaliação */}
          </div>
        ))}

      </div>
    </div>

  );
}

export default PopUp;
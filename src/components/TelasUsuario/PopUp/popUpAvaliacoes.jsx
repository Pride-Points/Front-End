
import "./popUpAvaliacoes.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/FotoPadrao.png'
import estrelas from '../../../assets/estrela.png';
import imagemRespondida from '../../../assets/resposta.svg';
import ModalAvaliacao from '../Modal/modal'; // Importe o componente
import { toast } from 'react-toastify';
import api from "../../../api/api";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router
import Star from '../../estrela/estrela';

function PopUp(props) {

  const [empresaDetalhes, setEmpresaDetalhes] = useState([]);
  const [nomeEmpresa, setNomeEmpresa] = useState(null);

  useEffect(() => {
    const buscarNomeDaEmpresaPorId = async () => {
      try {
        const token = sessionStorage.authToken;

        const response = await api.get(`http://localhost:8080/empresas/${props.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
            setNomeEmpresa(response.data.nomeFantasia);
            console.log(response.data);
          
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        toast.error("Não existem nome!");
      }
    };

    buscarNomeDaEmpresaPorId();
  }, []);


  useEffect(() => {
    const buscarAvaliacoesDaEmpresaPorId = async () => {
      try {
        const token = sessionStorage.authToken;

        const response = await api.get(`http://localhost:8080/avaliacoes/${props.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          if (response.data && response.data.length > 0) {
            setEmpresaDetalhes(response.data);
            console.log(response.data);
          } else {
            toast.error("Não existem avaliações!");
          }
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar os detalhes da empresa.');
        }
      } catch (error) {
        toast.error("Não existem avaliações!");
      }
    };

    buscarAvaliacoesDaEmpresaPorId();
  }, []);

  const calcularMediaNotas = () => {
  
    if (empresaDetalhes) {
      console.log("aqui ta avaliacoes " + empresaDetalhes)
      const notas = empresaDetalhes.map(avaliacao => avaliacao.nota);
      const totalNotas = notas.length;
      const somaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
      const media = totalNotas > 0 ? somaNotas / totalNotas : 0;
      return media.toFixed(2); // Limita para duas casas decimais
    }
    return 0;
  };


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
          {empresaDetalhes && nomeEmpresa}
          <span className="notaBar">
            {empresaDetalhes && nomeEmpresa} - {calcularMediaNotas()}
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
          <Link to={`/home-usuario-avaliacoes/${props.idEmpresa}`} style={{ textDecoration: 'none', color: 'black' }}>Avalições</Link>

        </div>
        <div className="opcoes">
          <Link to={`/home-usuario-eventos/${props.idEmpresa}`} style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
      {empresaDetalhes.map((detalhe, index) => (
    <div key={index} className="containerLocalE">
      <div className="containerImagem">
        <img src={imagemPerfil} alt="" />
        <div className="resposta">
          {detalhe.title !== "" && (
            <img
              src={imagemRespondida}
              alt="Um selo de verificação"
              title={detalhe.title}
            />
          )}
        </div>
      </div>

      <div className="outraClasse" id={`outroId-${index}`}>
        <div>
          <div className="containerLocalCima">
            <div className="tituloNome">
              {detalhe.nomeAvaliador}
            </div>
            <div className="estrelasEvento">
              {Array.from({ length: detalhe.nota }, (_, i) => (
                <Star key={i} filled />
              ))}
              {Array.from({ length: 5 - detalhe.nota }, (_, i) => (
                <Star key={i} filled={false} />
              ))}
            </div>
          </div>
          <div className="descricaoAvaliacao">
            {detalhe.comentario.length > 80 ? `${detalhe.comentario.slice(0, 80)}...` : detalhe.comentario}
          </div>
          <div className="avaliacaoData">
            {detalhe.dtAvaliacao}
          </div>
        </div>
      </div>
    </div>
  ))}
      </div>
    </div>

  );
}

export default PopUp;
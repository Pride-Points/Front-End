import imagemPerfil from '../../assets/FotoPadrao.png'
import "./PopUpLocaisExplorador.css"
import LogoImg from '../../assets/logo-dark.svg';
import IconBack from '../../assets/icon-back.png';
import StarRating from './starRating';

import IconePesquisa from '../../assets/search-icon.svg';
import estrelas from '../../assets/estrela.png';

import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUpLocais(props) {

  const avaliacao = [
    {
      id: 1,
      nome: 'Tamires Janilda',
      estrelas: 2,
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.',
      data: '18/09/2023',
    },
    {
      id: 2,
      nome: 'Tamires Janilda',
      estrelas: 5,
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.',
      data: '18/09/2023',
    },
    {
      id: 3,
      nome: 'Tamires Janilda',
      estrelas: 5,
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.',
      data: '18/09/2023',
    },
    {
      id: 4,
      nome: 'Tamires Janilda',
      estrelas: 5,
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.',
      data: '18/09/2023',
    },
    {
      id: 5,
      nome: 'Tamires Janilda',
      estrelas: 5,
      comentario: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eum, officiis unde modi deserunt inventore.',
      data: '18/09/2023',
    }
  ];

  const navigate = useNavigate();

  // Função para voltar para a página anterior
  const voltarParaPaginaAnterior = () => {
    navigate(-1); // Navegar para trás no histórico
  };
  const [opcaoSelecionada, setOpcaoSelecionada] = useState('locais');
  const [mostrarModalEventos, setMostrarModalEventos] = useState(false);
  const [mostrarComentarios, setMostrarComentarios] = useState(false);

  const abrirModalEventos = () => {
    setOpcaoSelecionada('eventos');
    setMostrarModalEventos(true);
  };

  const fecharModalEventos = () => {
    setOpcaoSelecionada('locais');
    setMostrarModalEventos(false);
  };

  const abrirModalComentarios = () => {
    setMostrarComentarios(true);
  };

  const fecharModalComentarios = () => {
    setMostrarComentarios(false);
  };

  return (
    <div className="popUpExplorer">
      <header className='headerExplorer'>
        <button className='buttonExplorer'>
          <img src={IconBack} width="18px" height="26px" alt="botão de retornar a pagina inicial" onClick={voltarParaPaginaAnterior} />
        </button>
        <img src={LogoImg} alt=" logo da pride points (bandeira lgbt e frase pride points)" className="logo-prideExplorer" />
      </header>
      <div className="barraPesquisa">
        <div className="barra">
          <input type="text" className="inputBarra" />
          <div className="iconeLupa">
            <img src={IconePesquisa} alt="icone de pesquisar (Uma Lupa)" />
          </div>
        </div>
      </div>
      {!mostrarComentarios && (
        <div className="containerOpcoes">
          <div className={`opcoes ${opcaoSelecionada === 'locais' ? 'selecionada' : ''}`} onClick={fecharModalEventos}>
            <p style={{ textDecoration: 'none', color: 'black' }}>Locais</p>
          </div>

          <div className={`opcoes ${opcaoSelecionada === 'eventos' ? 'selecionada' : ''}`} onClick={abrirModalEventos}>
            <p style={{ textDecoration: 'none', color: 'black' }}>Eventos</p>
          </div>
        </div>
      )}
      <div className="containesLocais">


        {opcaoSelecionada === 'locais' && (
          props.listaEmpresas.map((empresa) => (
            <div key={empresa.id}>
              {mostrarComentarios ? (
                // Renderizar apenas quando mostrarComentarios for false
                null
              ) : (
                <p
                  style={{ textDecoration: 'none', color: 'black' }}
                  className="containerLocal"
                  onClick={abrirModalComentarios}
                >
                  <div className="containerlocalCima">
                    <div className="tituloLocal">{empresa.nomeFantasia}</div>
                    <div className="estrelasLocal">
                      <img src={estrelas} alt={`Quantidade de estrelas, esse estabelecimento tem ${empresa.estrelas} estrelas`} />
                    </div>
                  </div>
                  <div className="descricaoLocal">
                    <p>Cidade: {empresa.cidade}</p>
                    <p>Estado: {empresa.estado}</p>
                  </div>
                </p>
              )}
              {mostrarComentarios && (
                <img src={IconBack} alt="voltar" width="18px" height="26px" onClick={fecharModalComentarios}/>
              )}
              {mostrarComentarios &&
                avaliacao.map((avaliacao) => (
                  <div key={avaliacao.id} className="containerLocalE">
                    <div className="containerImagem">
                      <img src={imagemPerfil} alt="" />
                      <div className="resposta"></div>
                    </div>
                    <div className="containerLocalDireita">
                      <div className="containerLocalCima">
                        <div className="tituloNome">{avaliacao.nome}</div>
                        <div className="estrelasEvento">
                          <StarRating rating={avaliacao.estrelas} />
                        </div>
                      </div>
                      <div className="descricaoAvaliacao">
                        {avaliacao.comentario}
                      </div>
                      <div className="avaliacaoData">{avaliacao.data}</div>
                    </div>
                  </div>
                ))}
              <h3>© 2023 PridePoints. Todos os direitos reservados.</h3>
            </div>

          ))
        )}

        {opcaoSelecionada === 'eventos' && (
          <div>
            <div className="modalEventos">
              <p>Para ver os eventos e outros benefícios, cadastre-se!</p>
              <Link to="/cadastro">
                <button className="button-close">Cadastrar</button>
              </Link>
              <h3>© 2023 PridePoints. Todos os direitos reservados.</h3>

            </div>
          </div>
        )}

      </div>


    </div >

  );
}

export default PopUpLocais;
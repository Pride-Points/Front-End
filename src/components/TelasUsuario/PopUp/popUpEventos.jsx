
import "./popUpEventos.css"
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/FotoPadrao.png'
import estrelas from '../../../assets/estrela.png';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUp() {

  return (

    <div className="popUp">
      <div className="containerBar">
        <div className="nomeBar">
          Bar da juju
          <span className="notaBar">
            2.9
          </span>
        </div>
        <div className="fecharBar">
          <img src={fecharBar} alt="Botão para fechar o estabelecimento e ir para a tela inicial do mapa" />
        </div>
      </div>
      <div className="containerDescricao">
        <div className="descricaoBar">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, atque reiciendis ipsam fuga provident non modi officiis voluptatem voluptates totam.
          </span>
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
        <button className="botaoA">Avalie</button>
      </div>
      <div className="containerOpcoes">
        <div className="opcoes selecionada">
          <Link to="/home-locais" style={{ textDecoration: 'none', color: 'black' }}>Avalições</Link>

        </div>
        <div className="opcoes">
          <Link to="/home-eventos" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>
        </div>
      </div>
      <div className="containesLocaisE">
        <div className="containerLocalE">
        <div className="containerImagem">
        <img src={imagemPerfil} alt="" />
        <div>
          a
        </div>
        </div>
        <div className="containerLocalDireita">
          <div className="containerLocalCima">
          <div className="tituloNome">
         Tamires Janilda
          </div> 
          <div className="estrelasEvento">
          <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
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
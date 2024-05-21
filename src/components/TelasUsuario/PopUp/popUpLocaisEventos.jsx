
import "./popUpLocais.css"
import IconePesquisa from '../../../assets/IconePesquisa.png';
import fecharBar from '../../../assets/Fechar.png';
import imagemPerfil from '../../../assets/foto-pride.svg'

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUpLocais(props) {
    return (

        <div className="popUp">
            <div className="barraPesquisa">
                <div className="barra">
                    <input type="text" className="inputBarra" />
                    <div className="iconeLupa">
                        <img src={IconePesquisa} alt="icone de pesquisar (Uma Lupa)" />
                    </div>
                </div>
            </div>
            <div className="containerOpcoes">
                <div className="opcoes ">
                    <Link to="/home-usuario" style={{ textDecoration: 'none', color: 'black' }}>Locais</Link>

                </div>
                <div className="opcoes selecionada">
                    <Link to="/home-usuario-eventos-locais" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>

                </div>
            </div>
            <div className="containesLocaisE">
            {props.listaEventos.map((eventos) => (
                <div className="containerLocalE">
                    <div className="containerImagem">
                        <img src={imagemPerfil} alt="" />
                    </div>
                    <div className="containerLocalDireita">
                        <div className="containerLocalCima">
                            <div className="tituloNome">
                                {eventos.nome}
                            </div>
                            <div className="estrelasEvento">
                            Av.Paulista 
                            </div>
                        </div>
                        <div className="descricaoAvaliacao">
                        {eventos.descricaoEvento}

                        </div>
                        <div className="avaliacaoData">
                            {eventos.dtEvento}
                            </div>
                    </div>

                </div>
                    ))}

            </div>
        </div>

    );
}

export default PopUpLocais;
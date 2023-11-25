
import "./popUpLocais.css"
import IconePesquisa from '../../../assets/IconePesquisa.png';
import estrelas from '../../../assets/estrela.png';


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link do React Router

function PopUpLocais() {

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
                <div className="opcoes selecionada">
                <Link to="/home-locais" style={{ textDecoration: 'none', color: 'black' }}>Locais</Link>

                </div>
                <div className="opcoes">
                <Link to="/home-usuario-eventos-locais" style={{ textDecoration: 'none', color: 'black' }}>Eventos</Link>

                </div>
                </div>
                <div className="containesLocais">
             
                  <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
                    <div className="containerlocalCima">
                    <div className="tituloLocal">
                          empresa.nome
                      </div>
                      <div className="estrelasLocal">
                      <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
                      </div>
                    </div>
                      <div className="descricaoLocal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
                      </div>
                  </Link>
                  <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
                    <div className="containerlocalCima">
                    <div className="tituloLocal">
                          empresa.nome
                      </div>
                      <div className="estrelasLocal">
                      <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
                      </div>
                    </div>
                      <div className="descricaoLocal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
                      </div>
                  </Link>
                  <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
                    <div className="containerlocalCima">
                    <div className="tituloLocal">
                          empresa.nome
                      </div>
                      <div className="estrelasLocal">
                      <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
                      </div>
                    </div>
                      <div className="descricaoLocal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
                      </div>
                  </Link>
                  <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
                    <div className="containerlocalCima">
                    <div className="tituloLocal">
                          empresa.nome
                      </div>
                      <div className="estrelasLocal">
                      <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
                      </div>
                    </div>
                      <div className="descricaoLocal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
                      </div>
                  </Link>
                           <Link to="/home-usuario-avaliacoes" style={{ textDecoration: 'none', color: 'black' }} className="containerLocal">
                    <div className="containerlocalCima">
                    <div className="tituloLocal">
                          empresa.nome
                      </div>
                      <div className="estrelasLocal">
                      <img src={estrelas} alt="Quantidade de estrelas, esse estabelecimento tem 3 estrelas" />
                      </div>
                    </div>
                      <div className="descricaoLocal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, deserunt.
                      </div>
                  </Link>
                  
                </div>
              </div>

  );
}

export default PopUpLocais;
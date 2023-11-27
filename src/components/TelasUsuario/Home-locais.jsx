import "./home-locais.css"

import MenuLateral from "./MenuLateral/MenuLateral.jsx"
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx"
import Pointer from "../../assets/icone-Pointer.png"
import MapSection from './MapSection.jsx';
import PopUpLocais from './PopUp/PopUpLocais.jsx'
import api from "../../api/api.js";
import { toast } from 'react-toastify';



import React, { useState, useEffect } from 'react';

function Home() {
  const moveToCoordinates = (latitude, longitude) => {
    // Aqui você pode definir a lógica para mover o mapa para as coordenadas fornecidas
    console.log(`Movendo para as coordenadas: Latitude ${latitude}, Longitude ${longitude}`);
    // Exemplo: chame uma função do MapSection para atualizar as coordenadas
    // mapSection.moveTo(latitude, longitude);
  };
  const [listaEmpresa, setListaEmpresa] = useState([]);

  useEffect(() => {
    const carregarEmpresas = async () => {
      try {
        const response = await api.get('/empresas');
        if (response.status === 200 && response.data) {
          setListaEmpresa(response.data);
        } else if(response.data === ""){
          return;
        }else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    // Chama a função de carregarEmpresas apenas uma vez quando o componente é montado
    carregarEmpresas();
  }, []); // O array vazio indica que este efeito deve ser executado apenas uma vez, equivalente ao componentDidMount



  return (
    <div className="container">

      <div className="content-left">
        <MenuLateral />
      </div>

      <div className="content-right">
        <HeaderUsuario />
        <main className="content-up">
          <div className="tituloHome">
            <div className="containerTitulo">
              <h1>Olá, {sessionStorage.usuario}</h1>
              <div className="subtituloHome">Encontre lugares inclusivos para você</div></div>

            <div className="botaoPaulista">
              <div className="borda">
                <div>
                  <img src={Pointer} alt="icone de localização Roxo" />
                </div>
                <div className="texto">
                  SP / Av.Paulista
                </div>
              </div>
            </div>
          </div>

          <div className="mapaHome">
            <div className="mapa">
              <MapSection />

            </div>
            <div className="teste">
              <PopUpLocais
                listaEmpresas={listaEmpresa}
                moveToCoordinates={moveToCoordinates} // Passando a função moveToCoordinates como uma propriedade
              />
            </div>

          </div>
        </main>
      </div>

    </div>
  );
}

export default Home;
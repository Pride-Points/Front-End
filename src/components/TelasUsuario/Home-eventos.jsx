import "./home-locais.css"
import MenuLateral from "./MenuLateral/MenuLateral.jsx"
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx"
import Pointer from "../../assets/icone-Pointer.png"
import MapSection from './MapSection.jsx';
import PopUpEventos from './PopUp/popUpEventosGeral.jsx'
import { toast } from 'react-toastify';
import axios from 'axios';



import React, { useState, useEffect } from 'react';

function Home() {
    const [empresaDetalhes, setEmpresaDetalhes] = useState(null);

    useEffect(() => {
      const buscarEmpresaPorId = async (token) => {
        try {
          const userId =  sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
          token = sessionStorage.authToken
          console.log(token)
          console.log(userId)
  
   
          const idEmpresa = sessionStorage.getItem('idEmpresaClicada');
  
          if (!idEmpresa) {
            throw new Error('ID da empresa não encontrado no sessionStorage');
          }
  
          const response = await axios.get(`http://3.82.9.113:8080/empresas/${idEmpresa}`, {
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
                            <PopUpEventos />
                        </div>
                    </div>
                </main>
            </div>

        </div>
    );
}

export default Home;
import "./eventos.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import MenuLateral from './MenuLateral/MenuLateral.jsx';
import HeaderUsuario from './HeaderUsuario/HeaderUsuario.jsx';
import MainContent from './Maincontent/MainContent.jsx';
import imgEvento1 from '../../assets/img-evento1.png';

function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const carregarEventos = async () => {
      try {
        const response = await axios.get('http://75.101.208.160:8080/eventos');
          if(response.status === 204 && response.data){
            console.log("sem evento")
          }
        
        if (response.status === 200 && response.data) {
          // Mapeando os eventos recebidos da API para o formato desejado

          const eventosFormatados = response.data.map(evento => ({
            img: imgEvento1, // Altere para o campo correto se necessário
            titulo: evento.nome,
            descricao: evento.descricaoEvento,
            info:  'Av.Paulista', // Informação estática, adapte conforme necessário
            data: evento.dtEvento ? evento.dtEvento : '15/08/2023', // Use a data recebida ou uma data padrão
          }));

          // Atualizando a lista de eventos com os eventos da API
          setEventos(eventosFormatados);
        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    carregarEventos();
  }, []);

  return(
    <div className="container">

      <div className="content-left">
        <MenuLateral/>
      </div>

      <div className="content-right">
        <HeaderUsuario/>        
        <main>
          <MainContent 
            tituloPgn="Eventos"
            subtituloPgn="Encontre eventos para você participar"
            eventos={eventos}
            />
        </main>
      </div>

    </div>
  );
}

export default Eventos;
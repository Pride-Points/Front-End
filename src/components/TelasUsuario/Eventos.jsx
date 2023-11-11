import "./eventos.css"

import MenuLateral from "./MenuLateral/MenuLateral.jsx"
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx"
import MainContent from "./Maincontent/MainContent.jsx"

import imgEvento1 from "../../assets/img-evento1.png"


import React, { useState, useEffect } from 'react';

function Eventos(){

  const [eventos, setEventos] = useState([]);

  // Simulação de dados de eventos do banco de dados
  const eventosDoBancoDeDados = [
    {
      img: imgEvento1,
      titulo: 'Inclusão LGBT',
      descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
      info: 'Av.Paulista',
      data: '15/08/2023',
    },
    {
      img: imgEvento1,
      titulo: 'Inclusão LGBT',
      descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
      info: 'Av.Paulista',
      data: '15/08/2023',
    },
    {
      img: imgEvento1,
      titulo: 'Inclusão LGBT',
      descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
      info: 'Av.Paulista',
      data: '15/08/2023',
    },{
      img: imgEvento1,
      titulo: 'Inclusão LGBT',
      descricao: 'A comunidade estará reunida para festejar. terá show ao vivo.',
      info: 'Av.Paulista',
      data: '15/08/2023',
    },
    // Outros eventos...
  ];

  useEffect(() => {
    // Aqui seria a lógica para buscar os eventos do banco de dados
    // Por enquanto, usei os dados acima
    setEventos(eventosDoBancoDeDados);
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
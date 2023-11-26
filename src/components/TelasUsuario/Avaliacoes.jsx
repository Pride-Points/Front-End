import "./avaliacoes.css";

import MenuLateral from "./MenuLateral/MenuLateral.jsx";
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx";
import MainContent from "./Maincontent/MainContent.jsx";

import imgAvaliacao1 from "../../assets/img-avaliacao1.png";

import React, { useState, useEffect } from "react";

function Eventos() {
  const [eventos, setEventos] = useState([]);

  // Simulação de dados de eventos do banco de dados
  const eventosDoBancoDeDados = [
    {
      img: imgAvaliacao1,
      titulo: "Bar do Jaú",
      descricao:
        "Um bar localizado na região da Paulista, possui musica ao vivo.",
      info: "4.7",
      data: "20/08/2021",
    },
    {
      img: imgAvaliacao1,
      titulo: "Zig Club",
      descricao:
        "Festa lgbt localizada na republica onde ocorrem eventos sobre artistas e muita musica",
      info: "4.8",
      data: "08/09/2023",
    },
    {
      img: imgAvaliacao1,
      titulo: "Zig Club",
      descricao:
        "Festa lgbt localizada na republica onde ocorrem eventos sobre artistas e muita musica",
      info: "4.8",
      data: "08/09/2023",
    },
    {
      img: imgAvaliacao1,
      titulo: "Zig Club",
      descricao:
        "Festa lgbt localizada na republica onde ocorrem eventos sobre artistas e muita musica",
      info: "4.8",
      data: "08/09/2023",
    },
    {
      img: imgAvaliacao1,
      titulo: "Zig Club",
      descricao:
        "Festa lgbt localizada na republica onde ocorrem eventos sobre artistas e muita musica",
      info: "4.8",
      data: "08/09/2023",
    },
    // Outros eventos...
  ];

  useEffect(() => {
    // Aqui seria a lógica para buscar os eventos do banco de dados
    // Por enquanto, usei os dados acima
    setEventos(eventosDoBancoDeDados);
  }, []);

  // Simulação de dados vindo do bacos de dados do modal
  const reviews = [
    {
      title: "Péssima Localização",
      desc: "Fui desrespeitada, jogaram café na minha cara e ainda riram de mim, como pode isso? Não recomendo a ninguém! ",
      date: "09/10/2023",
      resposta: { 
        resposta: "Lamentamos qualquer inconveniente! Entre em contato em sacBar.com",
      },
    },
    {
      title: "Horrível!",
      desc: "Fui nessa cafeteria na semana passada e odiei o atendimento. são muitos mesquinhos",
      date: "09/10/2023",
      resposta: {
        resposta: "Lamentamos qualquer inconveniente! Entre em contato em sacBar.com",
      },
    },
    {
      title: "Ótima localização",
      desc: "Fui nessa cafeteria na semana passada e adorei o atendimento :D",
      date: "09/10/2023"
    },
    // Outros eventos...
  ];

  return (
    <div className="container">
      <div className="content-left">
        <MenuLateral />
      </div>

      <div className="content-right">
        <HeaderUsuario />
        <main>
          <MainContent
            tituloPgn="Avaliações"
            subtituloPgn="Encontre lugares inclusivos para você"
            eventos={eventos}
            isClickable={true}
            reviews={reviews}
          />
        </main>
      </div>
    </div>
  );
}

export default Eventos;

import React from "react";
import iconComentario from "../../assets/icon-comentarios.svg";
import iconCupom from "../../assets/icon-cupons.svg";
import iconAvaliacao from "../../assets/icon-media.svg";
import iconRelatorio from "../../assets/icon-clipboard.png";
import iconData from "../../assets/icon-filtro.svg";
import DashboardBar from "./DashboardBar";
import DashboardPizza from "./DashbpardPizza";


// Componente para um card individual
const Card = ({ title, content, icon, isolateDiv }) => (
  <div className={`card-dash ${isolateDiv ? 'isolated' : ''} ${isolateDiv ? `isolate-${content}` : ''}`}>
    <h2>{title}</h2>
    <img src={icon} alt={`Ícone para ${content}`} />
    <h4>{content}</h4>
  </div>
);

function DashContent() {
  const cardsData = [
    { title: "30", content: "Comentários", icon: iconComentario, isolateDiv: true },
    { title: "6", content: "Eventos ativos", icon: iconCupom, isolateDiv: false },
    { title: "4.6", content: "Média Avaliação", icon: iconAvaliacao, isolateDiv: false },
    { content: "Imprimir relatório", icon: iconRelatorio, isolateDiv: true },
  ];

  return (
    <div className="presentation">
      <h1>Olá</h1>
      <p>Veja as informações do seu negócio!</p>

      <div className="card-dad">

        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} icon={card.icon} isolateDiv={card.isolateDiv} />
        ))}
      </div>

      <div className="date">
        <img src={iconData} alt="" />
        <p>Filtro por data</p>
      </div>

      <div className="dash">

        <div className="dash-bar">
          < DashboardBar />
        </div>

        <div className="dash-pizza">
          <DashboardPizza />
        </div>
      </div>
    </div>
  );
}

export default DashContent;

/* 
    
   COMO VAI FICAR PARA O ATRIBUTO TITLE SER VARIAVEL 

   ela vira a função que vai fazer as coisas que ela tem que fazer 
   
   // Função para calcular dinamicamente o título
const dynamicTitleFunction = () => {
  // Lógica para calcular o título
  return "Título dinâmico";
};

const cardsData = [
  { getTitle: () => "Título do Card 1", content: "Conteúdo do Card 1" },
  { getTitle: dynamicTitleFunction, content: "Conteúdo do Card 2" },
  // Adicione mais dados de cards conforme necessário
];


 dynamicTitleFunction é uma função que retorna o título dinâmico. 
No objeto cardsData, você pode usar a referência direta à função dynamicTitleFunction como valor para a propriedade getTitle.
 Isso permite que a função seja chamada dinamicamente quando você renderiza os componentes.



  return (
    <div className="presentation">
      <h1>Olá Empresa de chuchu</h1>
      <p>Veja as informações do seu negócio!</p>

      <div className="cards">
        {cardsData.map((card, index) => (
          <Card key={index} getTitle={card.getTitle} content={card.content} icon={card.icon} />
        ))}
      </div>
    </div>
  );
   
   */
import React, { useEffect, useState } from "react";
import iconComentario from "../../assets/icon-comentarios.svg";
import iconCupom from "../../assets/icon-cupons.svg";
import iconAvaliacao from "../../assets/icon-media.svg";
import iconRelatorio from "../../assets/icon-clipboard.png";
import iconData from "../../assets/icon-filtro.svg";
import DashboardBar from "./DashboardBar";
import DashboardPizza from "./DashbpardPizza";
import api from '../../api/api';
import { toast } from 'react-toastify';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';  // Importe o plugin autotable
import html2canvas from 'html2canvas';

// Componente para um card individual
const Card = ({ title, content, icon, isolateDiv, onClick }) => (
  <div className={`card-dash ${isolateDiv ? 'isolated' : ''} ${isolateDiv ? `isolate-${content}` : ''}`} onClick={onClick}>
    <h2>{title}</h2>
    <img src={icon} alt={`Ícone para ${content}`} />
    <h4>{content}</h4>
  </div>
);

function DashContent() {

  const [avaliacoes, setAvaliacoes] = useState([]);
  const [quantidadeEventos, setQuantidadeEventos] = useState(0);
  const [data, setData] = useState(Array(12).fill(0));
  const [tagData, setTagData] = useState([0, 0, 0, 0, 0, 0]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Inicializa com o mês atual

  const gerarPDF = () => {
    const input = document.getElementById('dashboard');
  
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height + 200]
      });
  
      // Adicionando um cabeçalho
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(32);
      pdf.setTextColor(40, 55, 71);
      // Calcular a largura do texto para centralizar
      const title = 'Relatório de Desempenho';
      const titleWidth = pdf.getStringUnitWidth(title) * pdf.getFontSize() / pdf.internal.scaleFactor;
      const xOffset = (pdf.internal.pageSize.getWidth() - titleWidth) / 2; // Centralizar o título
  
      pdf.text(title, xOffset, 40); // Ajustando a posição Y para melhor visualização
  
      // Logo
      // Assegure-se de que o logo está disponível como um Data URL ou caminho acessível
      // pdf.addImage(logoData, 'PNG', pdf.internal.pageSize.getWidth() - 100, 15, 80, 40);
  
      // Adicionando o gráfico
      pdf.addImage(imgData, 'PNG', 20, 50, canvas.width, canvas.height);
  
      // Adicionando estatísticas
      const baseTextHeight = canvas.height + 80;
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(60);
      pdf.text('Estatísticas do Relatório:', 20, baseTextHeight);
  
      pdf.setFontSize(14);
      pdf.setTextColor(70);
      pdf.text(`Total de Avaliações: ${avaliacoes.length}`, 20, baseTextHeight + 20);
      pdf.text(`Média das Avaliações: ${calcularMediaAvaliacoes()}`, 20, baseTextHeight + 40);
      pdf.text(`Eventos Ativos: ${quantidadeEventos}`, 20, baseTextHeight + 60);
  
// Tabela
pdf.autoTable({
  startY: baseTextHeight + 80,
  theme: 'striped',
  head: [['Tag', 'Quantidade']],
  body: tagData.map((count, index) => [['Humilhade', 'Brave', 'Frustrade', 'Amade', 'Acolhide', 'Feliz'][index], count.toString()]),
  styles: {
    fillColor: [240, 240, 240],
    fontSize: 16  // Definindo o tamanho da fonte para 16 para todo o conteúdo da tabela
  },
  headStyles: {
    fillColor: [40, 55, 71],
    textColor: [255, 255, 255],
    fontSize: 16  // Definindo o tamanho da fonte para 16 para o cabeçalho da tabela
  },
  bodyStyles: {
    fontSize: 16  // Definindo o tamanho da fonte para 16 para o corpo da tabela
  },
  columnStyles: {
    0: { halign: 'center', cellWidth: 100 }  // Estilos específicos para a primeira coluna
  },
});

  
      // Rodapé
      pdf.setFontSize(16);
      pdf.setTextColor(150);
      pdf.text(`Data do Relatório: ${new Date().toLocaleDateString()}`, 20, pdf.internal.pageSize.getHeight() - 10);
  
      // Salvar o PDF
      pdf.save(`relatorio-${selectedMonth === -1 ? 'todos-os-meses' : monthNames[selectedMonth]}.pdf`);
    });
  };
  

  const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };


  useEffect(() => {
    const buscarComentarios = async () => {
      try {
        const response = await api.get(`/avaliacoes/${sessionStorage.idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.authToken}`,
          },
        });
        setAvaliacoes(response.data);
    
        // Contagem inicial para cada mês do ano
        const monthlyCounts = Array(12).fill(0);
          response.data.forEach(avaliacao => {
            const date = new Date(avaliacao.dtAvaliacao.split('-').reverse().join('-'));
            const month = date.getMonth();
            monthlyCounts[month]++;
          });
  
          const avaliacoesDoMes = response.data.filter(av => {
            if (selectedMonth === -1) return true; // Se "Todos os Meses" for selecionado, incluir todas as avaliações
            const date = new Date(av.dtAvaliacao.split('-').reverse().join('-'));
            return date.getMonth() === selectedMonth;
          });
      
          // Tags pré-definidas para o gráfico
          const tags = ['Humilhade', 'Brave', 'Frustrade', 'Amade', 'Acolhide', 'Feliz'];
          const tagCounts = tags.map(tag => avaliacoesDoMes.filter(av => av.tag === tag).length);
      
          setTagData(tagCounts);  // Atualiza os dados das tags no gráfico de pizza
          setData(monthlyCounts); // Atualiza o estado com as contagens por mês

      } catch (error) {
        toast.error(error.message);
      }
    };


    const intervalId = setInterval(buscarComentarios, 5000); // Chama a função a cada 30 segundos

    // Chama a função imediatamente e também a cada 30 segundos
    buscarComentarios();

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, [selectedMonth]);

  useEffect(() => {
    const buscarEventos = async () => {
      try {
        const token = sessionStorage.authToken;
        const idEmpresa = sessionStorage.idEmpresa;

        if (!idEmpresa) {
          throw new Error('ID da empresa não encontrado no sessionStorage');
        }

        const response = await api.get(`/eventos/empresa/${idEmpresa}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200 && response.data) {
          setQuantidadeEventos(response.data.length);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    const intervalId = setInterval(buscarEventos, 5000); // Chama a função a cada 30 segundos

    // Chama a função imediatamente e também a cada 30 segundos
    buscarEventos();

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);


  const calcularMediaAvaliacoes = () => {
    if (Array.isArray(avaliacoes) && avaliacoes.length > 0) {
      const somaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.nota, 0);
      const media = somaAvaliacoes / avaliacoes.length;
      return media.toFixed(1);
    } else {
      return 0; // ou qualquer valor padrão desejado se não houver avaliações
    }
  };

  const cardsData = [
    { title: avaliacoes.length, content: "Comentários", icon: iconComentario, isolateDiv: true },
    { title: quantidadeEventos, content: "Eventos ativos", icon: iconCupom, isolateDiv: false },
    { title: calcularMediaAvaliacoes(), content: "Média Avaliação", icon: iconAvaliacao, isolateDiv: false },
    { content: "Imprimir relatório", icon: iconRelatorio, isolateDiv: true, onClick: gerarPDF },
  ];

  return (
    <div className="presentation" id="dashboard">
      <h1>Olá</h1>
      <p>Veja as informações do seu negócio!</p>

      <div className="card-dad">

        {cardsData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} icon={card.icon} isolateDiv={card.isolateDiv} onClick={card.onClick}/>
        ))}
      </div>

      <div className="date">
        <div className="date-select">
        <img src={iconData} alt="" />
        <p>Filtro por mês</p>
        <select onChange={handleMonthChange} value={selectedMonth}>
          <option value={-1}>Todos os Meses</option>
          {monthNames.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        </div>

      </div>

      <div className="dash">

        <div className="dash-bar">
          <DashboardBar
            labels={selectedMonth === -1 ? monthNames : monthNames.map((month, index) => index === selectedMonth ? month : '')}
            data={selectedMonth === -1 ? data : data.map((count, index) => index === selectedMonth ? count : 0)}
          />
        </div>

        <div className="dash-pizza">
          <DashboardPizza
            labels={['Humilhade', 'Brave', 'Frustrade', 'Amade', 'Acolhide', 'Feliz']}
            data={tagData} />
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
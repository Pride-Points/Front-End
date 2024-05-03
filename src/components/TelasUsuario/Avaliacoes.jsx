import "./avaliacoes.css";
import api from '../../api/api.js'
import { useState, useEffect } from "react";
import MenuLateral from "./MenuLateral/MenuLateral.jsx";
import HeaderUsuario from "./HeaderUsuario/HeaderUsuario.jsx";
import MainContent from "./Maincontent/MainContent.jsx";
import estrelas from "./PopUp/estrelas.js"
import dashIcon from "../../assets/dashBlack.svg"
import avalBlack from "../../assets/icon-avaliacoes.svg";
import imgAvaliacao1 from "../../assets/img-avaliacao1.png";

function Eventos() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  
  // Simulação de dados de reviews (supondo que você obtenha esses dados de algum lugar)

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const carregarEventosDoUsuario = async (token) => {
      try {
        // Simulando um userId (você deve definir isso de acordo com a lógica da sua aplicação)
        const userId =  sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        console.log(token)
        console.log(userId)

        const response = await api.get(`/avaliacoes/usuario/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.status === 200 && response.data) {
          // Mapeando as avaliações recebidas da API para o formato desejado
          console.log(response.data)
          const avaliacoesFormatadas = response.data.map(avaliacao => ({
            img: imgAvaliacao1, // Altere para o campo correto se necessário
            titulo: avaliacao.tag, // Supondo que 'nome' seja o título da avaliação
            descricao: avaliacao.comentario, // Supondo que 'descricao' seja a descrição da avaliação
            info: avaliacao.nota, // Supondo que 'avaliacao' seja a informação de avaliação
            data: avaliacao.dtAvaliacao,  // Supondo que 'data' seja a data da avaliação
          }
          ));
        
          const reviewsFormatadas = response.data.map(reviews => ({
            title: reviews.tag,
            desc: reviews.comentario,
            date: reviews.dtAvaliacao,
            id: reviews.id
          }));
  
          // Atualizando a lista de avaliações do usuário
          setAvaliacoes(avaliacoesFormatadas);
          setReviews(reviewsFormatadas)
        } else {
          throw new Error('Ops! Ocorreu um erro ao buscar as avaliações do usuário.');
        }
      } catch (error) {
        console.error('Erro ao buscar avaliações do usuário:', error);
      }
    };
  
    carregarEventosDoUsuario();
  }, []);

  return (
    <div className="container">
            <div className="content-left">
                <MenuLateral 
                dashIcon= {dashIcon}
                classColor={"pag-atual"}
                avalIcon= {avalBlack}
                classColorAval={""}/>
            </div>

      <div className="content-right">
        <HeaderUsuario />
        <div>
          <MainContent
            tituloPgn="Avaliações"
            subtituloPgn="Encontre lugares inclusivos para você"
            eventos={avaliacoes}
            isClickable={true}
            reviews={reviews}
          />
        </div>
      </div>
    </div>
  );
}

export default Eventos;

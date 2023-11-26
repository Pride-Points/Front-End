import React from "react";
import HeaderMenu from "../menuLateral/HeaderMenuLateral";
import iconData from "../../assets/icon-filtro.svg";
import StarRating from './starRating';
import "./avaliacaoEmpresa.css";
import iconAnswered from "../../assets/icon-answered.svg"
import iconAnsweredFalse from '../../assets/icon-anserwered-false.svg'
import iconPerfil from '../../assets/icon-perfil.svg'
import { separarComentariosPorEstrelas } from "./avaliacao";
import PreenchidoColuna from "./preenchidoColuna";


function AvaliacaoEmpresa() {

    const comentarios = [
        { iconPerfil: iconPerfil, nome: 'Maria', avaliacao: 1, conteudo: 'Bar descontraído e intimista, gostei.', data: '10/10/2020', isShared: false },
        { iconPerfil: iconPerfil, nome: 'Roberto', avaliacao: 5, conteudo: 'Comida boa e muita musica, a melhor experiencia que eu ja tive.', data: '10/10/2020', isShared: true, title: "Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!" },
        { iconPerfil: iconPerfil, nome: 'Zé', avaliacao: 0, conteudo: 'Muita festa e diversão, foram a minha felicidade em meio aos terrores noturnos.', data: '10/10/2020', isShared: true, title: "Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!" },
        { iconPerfil: iconPerfil, nome: 'Bjork', avaliacao: 1, conteudo: 'Experiencia unica e experimental, eu amei.', data: '10/10/2020', isShared: false },
        { iconPerfil: iconPerfil, nome: 'Taylor Saia', avaliacao: 2, conteudo: 'Porco', data: '10/10/2020', isShared: true, title: "Fxdxssx vxdxx pxtx" }
    ];


    const comentariosPorEstrlas = separarComentariosPorEstrelas(comentarios);
    const comentariosDe5Estrelas = comentariosPorEstrlas['5'] || [];
    const comentariosDe4Estrelas = comentariosPorEstrlas['4'] || [];
    const comentariosDe3Estrelas = comentariosPorEstrlas['3'] || [];
    const comentariosDe2Estrelas = comentariosPorEstrlas['2'] || [];
    const comentariosDe1Estrelas = comentariosPorEstrlas['1'] || [];
    const comentariosDe0Estrelas = comentariosPorEstrlas['1'] || [];

    
    const preenchidoColuna = [
        { quantidade: comentariosDe5Estrelas.length, estrela: '5'},
        { quantidade: comentariosDe4Estrelas.length, estrela: '4'},
        { quantidade: comentariosDe3Estrelas.length, estrela: '3'},
        { quantidade: comentariosDe2Estrelas.length, estrela: '2'},
        { quantidade: comentariosDe1Estrelas.length, estrela: '1'},
        { quantidade: comentariosDe0Estrelas.length, estrela: '0'},
    ];

    const calcularMediaAvaliacoes = () => {
        const somaAvaliacoes = comentarios.reduce((total, comentario) => total + comentario.avaliacao, 0);
        const media = somaAvaliacoes / comentarios.length;
        return media.toFixed(1); // Arredonda para uma casa decimal
    };

    return (
        <div className="container">

            <div className="content-right">
                <HeaderMenu />
            </div>


            <div className="conteudo">
                <div className='titulo'>
                    <h1>Avaliações Gerais</h1>
                    <h2>Veja o que seus clientes comentam sobre seu estabelecimento</h2>
                </div>



                <div className="titles" >
                    <h4 className="coments">Comentários</h4>

                    <div className="date">
                        <img src={iconData} alt="" />
                        <h5 className="filtro">Filtrar</h5>
                    </div>
                </div>

                <div className="notas">

                    <div className='description'>
                        {comentarios.map((comentario, index) => (
                            <div key={index} className="comments-description">

                                {comentario.iconPerfil && <img src={comentario.iconPerfil} alt="Foto de perfil do usuário" className="perfil" />}

                                <h4>{comentario.nome}</h4>
                                <StarRating rating={comentario.avaliacao} />

                                <a href="modal">
                                    {comentario.isShared ? (
                                        <img src={iconAnswered} alt="icone de comentario respondido" className="answered"
                                            title={comentario.title}
                                        />
                                    ) : (
                                        <img
                                            src={iconAnsweredFalse}
                                            alt="icone de comentario não respondido"
                                            className="answered"
                                        />
                                    )}
                                </a>
                                <p>{comentario.conteudo}</p>
                                <h5>{comentario.data}</h5>
                            </div>
                        ))}
                    </div>

                    <div className="overview">
                        <p className="media">{calcularMediaAvaliacoes(comentarios)}</p>

                        <div className="stars">
                            <StarRating rating={calcularMediaAvaliacoes(comentarios)} />
                        </div>
                        <h5 className="mediaComentarios">
                            Essa nota é a media das avaliações
                            do seu estabelicimento
                        </h5>
                        <h4>
                            Você tem {comentarios.length}  avaliações
                        </h4>

                        <div className="quantidade-comentarios">
                       {preenchidoColuna.map((coluna, index) => (
                            <PreenchidoColuna key={index} {...coluna} />
                        ))}
                        </div>

                    </div>

                </div>




            </div>

        </div>
    );
}

export default AvaliacaoEmpresa;


/*({comentarios.length} comentários)*/

/*
Se você estiver considerando um cenário em que as imagens de perfil são obtidas dinamicamente a partir de uma fonte externa, como um banco de dados, você pode fazer o seguinte:

Armazenamento da URL da Imagem no Banco de Dados:

No seu banco de dados, armazene a URL (ou caminho) da imagem de perfil para cada usuário no registro correspondente.
Dinamicamente Atribuir a URL ao Componente:

Ao renderizar o componente ModeloComentario, passe a URL da imagem de perfil relevante como parte dos dados do comentário. Em vez de usar <img src={iconPerfil} alt="Icone do perfil" />, use <img src={comentario.iconPerfil} alt="Icone do perfil" />, assumindo que comentario é um objeto representando um comentário com a propriedade iconPerfil.
Atualização Dinâmica:

Se as imagens de perfil mudarem com o tempo ou se forem adicionadas ou removidas, a atualização dinâmica ocorrerá conforme você buscar as informações mais recentes do banco de dados.
Implementação em um Contexto de Banco de Dados:

Se você estiver utilizando um contexto de banco de dados (como Redux, React Context, ou outra solução de gerenciamento de estado), você pode incluir a lógica para recuperar essas imagens de perfil nesse contexto.
Aqui está um exemplo simplificado de como isso pode parecer:

jsx
Copy code
// ModeloComentario.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import iconAnsweredFalse from '../../assets/icon-anserwered-false.svg';

const ModeloComentario = ({ iconPerfil, autor, conteudo, data, isShared }) => {
  return (
    <div className="comentario">
      <img src={iconPerfil} alt="Icone do perfil" />
      <h4>{autor}</h4>
      <p>{conteudo}</p>
      <h5>{data}</h5>
      {isShared ? (
        <FontAwesomeIcon icon={faShare} className="icon-share" />
      ) : (
        <FontAwesomeIcon icon={iconAnsweredFalse} className="icon-not-shared" />
      )}
    </div>
  );
};

export default ModeloComentario;
jsx
Copy code
// Componente de onde você usa ModeloComentario

import React from 'react';
import ModeloComentario from './ModeloComentario';
import iconPerfil1 from '../../assets/icon-perfil-1.jpg';  // Substitua com lógica dinâmica
import iconPerfil2 from '../../assets/icon-perfil-2.jpg';  // Substitua com lógica dinâmica

function ExemploComponente() {
  const comentarios = [
    { iconPerfil: iconPerfil1, autor: 'Usuário 1', conteudo: '...', data: '...', isShared: true },
    { iconPerfil: iconPerfil2, autor: 'Usuário 2', conteudo: '...', data: '...', isShared: false },
    // ... outros comentários
  ];

  return (
    <div>
      {comentarios.map((comentario, index) => (
        <ModeloComentario key={index} {...comentario} />
      ))}
    </div>
  );
}

export default ExemploComponente;
Este exemplo presume que cada objeto comentario tem uma propriedade iconPerfil que contém o caminho ou URL da imagem de perfil para esse comentário específico. Certifique-se de ajustar conforme necessário com base na sua lógica de backend e frontend.*/
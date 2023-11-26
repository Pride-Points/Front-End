import React, { useState } from "react";
import HeaderMenu from "../menuLateral/HeaderMenuLateral";
import iconData from "../../assets/icon-filtro.svg";
import StarRating from './starRating';
import "./avaliacaoEmpresa.css";
import iconAnswered from "../../assets/icon-answered.svg";
import iconAnsweredFalse from '../../assets/icon-anserwered-false.svg';
import iconPerfil from '../../assets/icon-perfil.svg';
import { separarComentariosPorEstrelas } from "./avaliacao";
import PreenchidoColuna from "./preenchidoColuna";

function AvaliacaoEmpresa() {

    const comentarios = [
        { iconPerfil: iconPerfil, nome: 'Maria', avaliacao: 1, conteudo: 'Bar descontraído e intimista, gostei.', data: '10/10/2020', isShared: false },
        { iconPerfil: iconPerfil, nome: 'Roberto', avaliacao: 5, conteudo: 'Comida boa e muita música, a melhor experiência que eu já tive.', data: '10/10/2020', isShared: true, title: "Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!" },
        { iconPerfil: iconPerfil, nome: 'Zé', avaliacao: 0, conteudo: 'Muita festa e diversão, foram a minha felicidade em meio aos terrores noturnos.', data: '10/10/2020', isShared: true, title: "Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!" },
        { iconPerfil: iconPerfil, nome: 'Bjork', avaliacao: 1, conteudo: 'Experiência única e experimental, eu amei.', data: '10/10/2020', isShared: false },
        { iconPerfil: iconPerfil, nome: 'Taylor Saia', avaliacao: 2, conteudo: 'Porco', data: '10/10/2020', isShared: true, title: "Fxdxssx vxdxx pxtx" }
    ];

    const comentariosPorEstrlas = separarComentariosPorEstrelas(comentarios);
    const comentariosDe5Estrelas = comentariosPorEstrlas['5'] || [];
    const comentariosDe4Estrelas = comentariosPorEstrlas['4'] || [];
    const comentariosDe3Estrelas = comentariosPorEstrlas['3'] || [];
    const comentariosDe2Estrelas = comentariosPorEstrlas['2'] || [];
    const comentariosDe1Estrelas = comentariosPorEstrlas['1'] || [];
    const comentariosDe0Estrelas = comentariosPorEstrlas['0'] || [];

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

    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

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
                        <h5 className="filtro" >Filtrar</h5>
                    </div>
                </div>

                <div className="notas">
                    <div className='description'>
                        {comentarios.map((comentario, index) => (
                            <div key={index} className="comments-description">
                                {comentario.iconPerfil && <img src={comentario.iconPerfil} alt="Foto de perfil do usuário" className="perfil" />}
                                <h4>{comentario.nome}</h4>
                                <StarRating rating={comentario.avaliacao} />
                                <a>
                                    {comentario.isShared ? (
                                        <img src={iconAnswered} alt="icone de comentario respondido" className="answered" title={comentario.title} onClick={abrirModal}/>
                                    ) : (
                                        <img src={iconAnsweredFalse} alt="icone de comentario não respondido" className="answered"  onClick={abrirModal} />
                                    )}
                                </a>
                                <p>{comentario.conteudo}</p>
                                <h5>{comentario.data}</h5>
                            </div>
                        ))}
                    </div>

                    <div className="overview">
                        <p className="media">{calcularMediaAvaliacoes()}</p>
                        <div className="stars">
                            <StarRating rating={calcularMediaAvaliacoes()} />
                        </div>
                        <h5 className="mediaComentarios">Essa nota é a média das avaliações do seu estabelecimento</h5>
                        <h4>Você tem {comentarios.length} avaliações</h4>

                        <div className="quantidade-comentarios">
                            {preenchidoColuna.map((coluna, index) => (
                                <PreenchidoColuna key={index} {...coluna} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {modalAberto && (
                 <div className="modal-resposta-container">
                 <div className="modal">
                   <div className="modalHeader">
                     <p>Em resposta a: <b>nome usuário</b></p>
                   </div>
                   <div className="modalBody">
                     <div className="checkbox">
                       <input type="checkbox" id="verde" />
                       <label htmlFor="verde" className="verde"  onClick={fecharModal}>
                       Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!
                       </label>
                     </div>
                     <div className="checkbox">
                       <input type="checkbox" id="amarela"  onClick={fecharModal}/>
                       <label htmlFor="amarela" className="amarela">
                       Apreciamos sua avaliação, estamos comprometidos em melhorar continuamente.
                       </label>
                     </div>
                     <div className="checkbox">
                       <input type="checkbox" id="vermelha"  onClick={fecharModal} />
                       <label htmlFor="vermelha" className="vermelha">
                       Lamentamos qualquer inconveniente! Entre em contato em <b>sacBar.com</b>
                       </label>
                     </div>
                   </div>
                   <div className="modalFooter">
                     <button class="button-close" onClick={fecharModal}>Fechar Modal</button>
                   </div>
                 </div>
               </div>
            )}
        </div>
    );
}

export default AvaliacaoEmpresa;

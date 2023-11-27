import React, { useState } from "react";
import HeaderMenu from "../menuLateral/HeaderMenuLateral";
import iconData from "../../assets/icon-filtro.svg";
import StarRating from './starRating';
import iconAnswered from "../../assets/icon-answered.svg";
import iconAnsweredFalse from '../../assets/icon-anserwered-false.svg';
import iconPerfil from '../../assets/icon-perfil.svg';
import { separarComentariosPorEstrelas } from "./avaliacao";
import PreenchidoColuna from "./preenchidoColuna";
import balaoVerde from "../../assets/balãoVerde.svg";
import balaoAmarelo from "../../assets/balãoAmarelo.svg";
import balaoVermelho from "../../assets/balãoVermelho.svg";

import "./avaliacaoEmpresa.css";

function AvaliacaoEmpresa() {
    
    const [comentarios, setComentarios] = useState([
        { iconPerfil: iconPerfil, nome: 'Maria', avaliacao: 4, conteudo: 'Bar descontraído e intimista, gostei.', data: '10/10/2020', isShared: false, resp: "" },
        { iconPerfil: iconPerfil, nome: 'Roberto', avaliacao: 5, conteudo: 'Comida boa e muita música, a melhor experiência que eu já tive.', data: '10/10/2020', isShared: false, resp: "" },
        { iconPerfil: iconPerfil, nome: 'Zé', avaliacao: 4, conteudo: 'Muita festa e diversão, foram a minha felicidade em meio aos terrores noturnos.', data: '10/10/2020', isShared: false, resp: "" },
        { iconPerfil: iconPerfil, nome: 'Bjork', avaliacao: 5, conteudo: 'Experiência única e experimental, eu amei.', data: '10/10/2020', isShared: false, resp: "" },
        { iconPerfil: iconPerfil, nome: 'Taylor Saia', avaliacao: 0, conteudo: 'Bar porco, e experiência ruim, não volto mais', data: '10/10/2020', isShared: false, resp: "" }
    ]);

    const respostaPadronizada = [
        { resposta: `Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!` },
        { resposta: `Apreciamos sua avaliação, estamos comprometidos em melhorar continuamente.` },
        { resposta: `Lamentamos qualquer inconveniente! Entre em contato em siteSac.com` } //lembrar de poder modificar o {SAC} para o nome do bar

    ];

    const comentariosPorEstrlas = separarComentariosPorEstrelas(comentarios);
    const comentariosDe5Estrelas = comentariosPorEstrlas['5'] || [];
    const comentariosDe4Estrelas = comentariosPorEstrlas['4'] || [];
    const comentariosDe3Estrelas = comentariosPorEstrlas['3'] || [];
    const comentariosDe2Estrelas = comentariosPorEstrlas['2'] || [];
    const comentariosDe1Estrelas = comentariosPorEstrlas['1'] || [];
    const comentariosDe0Estrelas = comentariosPorEstrlas['0'] || [];

    const preenchidoColuna = [
        { quantidade: comentariosDe5Estrelas.length, estrela: '5' },
        { quantidade: comentariosDe4Estrelas.length, estrela: '4' },
        { quantidade: comentariosDe3Estrelas.length, estrela: '3' },
        { quantidade: comentariosDe2Estrelas.length, estrela: '2' },
        { quantidade: comentariosDe1Estrelas.length, estrela: '1' },
        { quantidade: comentariosDe0Estrelas.length, estrela: '0' },
    ];

    const calcularMediaAvaliacoes = () => {
        const somaAvaliacoes = comentarios.reduce((total, comentario) => total + comentario.avaliacao, 0);
        const media = somaAvaliacoes / comentarios.length;
        return media.toFixed(1);
    };

    // PEGANDO RESPOSTA
    const [respostasUsuarios, setRespostasUsuarios] = useState({});
    const pegarResposta = (valorResposta) => {
        let balaoCor;

        switch (valorResposta) {
            case respostaPadronizada[0].resposta:
                balaoCor = balaoVerde;
                break;
            case respostaPadronizada[1].resposta:
                balaoCor = balaoAmarelo;
                break;
            case respostaPadronizada[2].resposta:
                balaoCor = balaoVermelho;
                break;
            default:
                balaoCor = 'default'; // Defina uma cor padrão ou lógica para casos não correspondentes
                break;
        }

        if (usuarioSelecionado) {
            setRespostasUsuarios((prevState) => ({
                ...prevState,
                [usuarioSelecionado]: valorResposta,
            }));
            setComentarios((prevComentarios) =>
                prevComentarios.map((comentario) =>
                    comentario.nome === usuarioSelecionado
                        ? { ...comentario, resp: valorResposta, isShared: true, title: balaoCor }
                        : comentario
                )
            );
            fecharavaliacaoModal();
        }
    };

    //avaliacaoModal
    const [avaliacaoModalAberto, setavaliacaoModalAberto] = useState(false);
    const fecharavaliacaoModal = () => setavaliacaoModalAberto(false);

    //PEGANDO O NOME DOS USUÁRIOS E ABRINDO avaliacaoModal
    const [usuarioSelecionado, setUsuarioSelecionado] = useState("");

    const abriravaliacaoModal = (nomeUsuario) => {
        setUsuarioSelecionado(nomeUsuario); //Pegando o nome da pessoa da vez :3
        setavaliacaoModalAberto(true);
    };

    return (
        <div className="container">
            <div className="content">
                <HeaderMenu />
            </div>

            <div className="conteudo">
                <div className='avEmp'>
                    <h1>Avaliações Gerais</h1>
                    <h2>Veja o que seus clientes comentam sobre seu estabelecimento</h2>
                </div>

                <div className="subtitulo" >
                    <h4 className="coments">Comentários</h4>    
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
                                        <img src={iconAnswered} alt="icone de comentario respondido" className="answered" title={comentario.title} onClick={() => abriravaliacaoModal(comentario.nome)} />
                                    ) : (
                                        <img src={iconAnsweredFalse} alt="icone de comentario não respondido" className="answered" onClick={() => abriravaliacaoModal(comentario.nome)} />
                                    )}
                                </a>
                                <p>{comentario.conteudo}</p>
                                {comentario.resp && <p><img src={comentario.title} alt="balão verde" />{comentario.resp}</p>}
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

            {avaliacaoModalAberto && (
                <div className="avaliacaoModal-resposta-container">
                    <div className="avaliacaoModal">
                        <div className="avaliacaoModalHeader">
                            <p>Em resposta a: <b>{usuarioSelecionado}</b></p>
                        </div>
                        <div className="avaliacaoModalBody">
                            <div className="checkbox">
                                <input type="checkbox" id="verde" name="resposta" value="verde" onClick={() => pegarResposta(respostaPadronizada[0].resposta)} />
                                <label htmlFor="verde" className="verde" >
                                    {respostaPadronizada[0].resposta}

                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="amarela" name="resposta" value="amarela" onClick={() => pegarResposta(respostaPadronizada[1].resposta)} />
                                <label htmlFor="amarela" className="amarela">
                                    {respostaPadronizada[1].resposta}

                                </label>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" id="vermelha" name="resposta" value="vermelha" onClick={() => pegarResposta(respostaPadronizada[2].resposta)} />
                                <label htmlFor="vermelha" className="vermelha">
                                    {respostaPadronizada[2].resposta}

                                </label>
                            </div>
                        </div>
                        <div className="avaliacaoModalFooter">
                            <button class="button-close" onClick={fecharavaliacaoModal}>Fechar modal</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AvaliacaoEmpresa;

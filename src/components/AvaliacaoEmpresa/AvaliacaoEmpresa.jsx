import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import api from "../../api/api";
import HeaderMenu from "../menuLateral/HeaderMenuLateral";
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

    const [avaliacoes, setAvaliacoes] = useState([]);


    useEffect(() => {

        const buscarComentarios = async () => {
            try {
                const response = await api.get(`/avaliacoes/${sessionStorage.idEmpresa}`, {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.authToken}`
                    }
                });
                console.log(response.data)
                setAvaliacoes(response.data)
            } catch (error) {
                toast.error(error.message);
            }
        };

        buscarComentarios();
    }, []);

    const respostaPadronizada = [
        { resposta: `Agradecemos pelo seu feedback positivo! Esperamos vê-lo novamente em breve!` },
        { resposta: `Apreciamos sua avaliação, estamos comprometidos em melhorar continuamente.` },
        { resposta: `Lamentamos qualquer inconveniente! Entre em contato em siteSac.com` } //lembrar de poder modificar o {SAC} para o nome do bar

    ];

    const comentariosPorEstrlas = separarComentariosPorEstrelas(avaliacoes);
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
        if (Array.isArray(avaliacoes) && avaliacoes.length > 0) {
            const somaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.nota, 0);
            const media = somaAvaliacoes / avaliacoes.length;
            return media.toFixed(1);
        } else {
            return 'N/A'; // ou qualquer valor padrão desejado se não houver avaliações
        }
    };


    const pegarResposta = async (valorResposta) => {
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
                balaoCor = 'default';
                break;
        }

      const  objetoEnviado = {
            resposta: valorResposta,
            isShared: true,
            title: balaoCor,
        }


        if (usuarioSelecionado) {
            api.post(
                `/avaliacoes/resposta-empresa/${usuarioSelecionado}`,
                objetoEnviado, // Corpo da requisição
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.authToken}`,
                    },
                }
            )
                .then((res) => {
                    toast.success("Resposta enviada com sucesso!");

                    fecharavaliacaoModal();
                    window.location.reload();
                })
                .catch((erro) => {
                    // Erro no cadastro
                    toast.error("Erro ao cadastrar!");
                });
        }
    };

    //avaliacaoModal
    const [avaliacaoModalAberto, setavaliacaoModalAberto] = useState(false);
    const fecharavaliacaoModal = () => setavaliacaoModalAberto(false);

    //PEGANDO O NOME DOS USUÁRIOS E ABRINDO avaliacaoModal
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

    const abriravaliacaoModal = (id) => {
        console.log(id);
        setUsuarioSelecionado(id); // Usar o id em vez do nome do usuário
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
                        {Array.isArray(avaliacoes) && avaliacoes.length > 0 ? (
                            avaliacoes.map((avaliacao, index) => (
                                <div key={index} className="comments-description" id={`card-${avaliacao.id}`}>
                                    {iconPerfil && <img src={iconPerfil} alt="Foto de perfil do usuário" className="perfil" />}
                                    <h4>{avaliacao.nomeAvaliador}</h4>
                                    <StarRating rating={avaliacao.nota} />
                                    <a>
                                        {avaliacao.shared ? (
                                            <img src={iconAnswered} alt="icone de avaliacao respondido" className="answered" title={avaliacao.title} onClick={() => abriravaliacaoModal(avaliacao.id)} />
                                        ) : (
                                            <img src={iconAnsweredFalse} alt="icone de avaliacao não respondido" className="answered" onClick={() => abriravaliacaoModal(avaliacao.id)} />
                                        )}
                                    </a>
                                    <p>{avaliacao.comentario}</p>
                                    {avaliacao.resp && <p><img src={avaliacao.title} alt="balão verde" />{avaliacao.resp}</p>}
                                    <h5>{avaliacao.dtAvaliacao}</h5>
                                </div>
                            ))
                        ) : (
                            <p>Não há avaliações disponíveis.</p>
                        )}
                    </div>

                    <div className="overview">
                        <p className="media">{calcularMediaAvaliacoes()}</p>
                        <div className="stars">
                            <StarRating rating={calcularMediaAvaliacoes()} />
                        </div>
                        <h5 className="mediaComentarios">Essa nota é a média das avaliações do seu estabelecimento</h5>
                        <h4>Você tem {avaliacoes.length} avaliações</h4>

                        <div className="quantidade-comentarios">
                            {preenchidoColuna.map((coluna, index) => (
                                <PreenchidoColuna key={index} totalAvaliacoes={avaliacoes.length} {...coluna} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {avaliacaoModalAberto && (
                <div className="avaliacaoModal-resposta-container">
                    <div className="avaliacaoModal">
                        <div className="avaliacaoModalHeader">
                            <p>Em resposta a avaliação: <b>{usuarioSelecionado}</b></p>
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

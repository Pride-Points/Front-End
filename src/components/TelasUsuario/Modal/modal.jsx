import "./modal.css";
import closeModal from '../../../assets/closeModal.svg'
import estrela from '../../../assets/Starrrrr.svg'
import estrelaP from '../../../assets/starrrpreenchida.svg'

import axios from 'axios';

import React, { useState } from 'react';

function ModalAvaliacao({ onClose, mostrarModal, modoEdicao = false, avaliacaoParaEditar = {}, onAvaliacaoSalva }) {
    // Estados iniciais podem vir das props se estiver em modo de edição
    const [selectedEmotion, setSelectedEmotion] = useState(modoEdicao ? avaliacaoParaEditar.tag : '');
    const [estrelasHover, setEstrelasHover] = useState(modoEdicao ? avaliacaoParaEditar.nota : 0);
    const [comentario, setComentario] = useState(modoEdicao ? avaliacaoParaEditar.comentario : '');

    const handleMouseEnter = (id) => {
        setEstrelasHover(id);
    };

    const handleMouseLeave = () => {
        setEstrelasHover(0);
    };

    const handleEmotionClick = (emotion) => {
        setSelectedEmotion(emotion);
    };

    let nomeEmpresa = sessionStorage.nomeFantasiaClicada

    const [tag, setTag] = useState('');
  

    const fecharModal = () => {
        setEstrelasHover(0)
        setSelectedEmotion('');
        onClose(); // Chama a função onClose passada por props para fechar o modal na tela pai
    };
    const hoje = new Date();
    const ano = hoje.getFullYear();
    let mes = hoje.getMonth() + 1;
    let dia = hoje.getDate();

    // Adicionando um zero à esquerda se o mês ou o dia for menor que 10
    mes = mes < 10 ? `0${mes}` : mes;
    dia = dia < 10 ? `0${dia}` : dia;

    const dataAvaliacao = `${ano}-${mes}-${dia}`;


    const enviarAvaliacao = () => {
        const usuarioId = sessionStorage.id;
        const empresaId = sessionStorage.idEmpresaClicada;
        const token = sessionStorage.authToken;
        const data = {
            nota: estrelasHover,
            tag: selectedEmotion,
            comentario,
            dtAvaliacao: dataAvaliacao, // Considerar se a data deve ser atualizada na edição
        };
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const urlBase = `http://54.166.62.134:8080/avaliacoes`;
        const url = modoEdicao ? 
            `${urlBase}/${avaliacaoParaEditar.id}/${usuarioId}/${empresaId}` :
            `${urlBase}/${empresaId}/${usuarioId}`;

        const metodoHttp = modoEdicao ? axios.put : axios.post;

        metodoHttp(url, data, config)
            .then(response => {
                console.log('Avaliação enviada com sucesso!', response.data);
                window.location.reload();

                onAvaliacaoSalva(); // Callback para atualizar a lista de avaliações no componente pai

            })
            .catch(error => {
                console.error('Erro ao enviar avaliação:', error);
            });
    };


    return (
        <div>
            {/* Modal */}
            {mostrarModal && (
                <div className="modal2">
                    <div className="conteudoModal">
                        <div className="headerModal">
                            <img onClick={fecharModal} src={closeModal} alt="Botão para fechar modal" />
                        </div>
                        <div className="nomeEstabelecimento">
                            {nomeEmpresa}
                            <div className="estrelas">
                                {[1, 2, 3, 4, 5].map((id) => (
                                    <img
                                        key={id}
                                        src={id <= estrelasHover ? estrelaP : estrela} // Aqui você pode trocar o SVG
                                        id={id}
                                        alt={`Quantidade de estrelas: ${id}`}
                                        onMouseEnter={() => handleMouseEnter(id)}
                                        onClick={() => handleMouseEnter(id)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="modalTexto">
                            <span>Como foi sua experiência ?</span>
                        </div>

                        <div className="modalContainerEmocoes">
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Humilhade' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Humilhade')}
                            >
                                Humilhade
                            </div>
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Brave' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Brave')}
                            >
                                Brave
                            </div>
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Frustade' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Frustade')}
                            >
                                Frustade
                            </div>
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Amade' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Amade')}
                            >
                                Amade
                            </div>
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Acolhide' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Acolhide')}
                            >
                                Acolhide
                            </div>
                            <div
                                className={`modalContainerEmocao ${selectedEmotion === 'Feliz' ? 'selected2' : ''}`}
                                onClick={() => handleEmotionClick('Feliz')}
                            >
                                Feliz
                            </div>
                        </div>

                        <div className="modalTexto">
                            <span>Comente sua experiencia</span>
                        </div>
                        <div className="modalComentario">
                            <textarea name="" id="" cols="30" rows="10" value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                        </div>
                        <div className="botaoModal">
                            <button onClick={enviarAvaliacao}>Avalie</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );

}
export default ModalAvaliacao;

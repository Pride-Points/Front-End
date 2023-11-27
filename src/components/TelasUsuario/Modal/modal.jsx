import "./modal.css";
import closeModal from '../../../assets/closeModal.svg'
import estrela from '../../../assets/Starrrrr.svg'
import estrelaP from '../../../assets/starrrpreenchida.svg'

import axios from 'axios';

import React, { useState } from 'react';

function ModalAvaliacao({ onClose, mostrarModal }) {
    const [selectedEmotion, setSelectedEmotion] = useState('');
    const [estrelasHover, setEstrelasHover] = useState(0);

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
    const [comentario, setComentario] = useState('');

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


    const enviarAvaliacao = (token) => {
        const usuarioId = sessionStorage.id; // Substitua pelo ID do usuário que você quer buscar as avaliações
        token = sessionStorage.authToken
        const empresaId = sessionStorage.idEmpresaClicada
        // Aqui você faz a requisição POST para o endpoint do Spring Boot com os dados capturados do modal
        const data = {
            nota: estrelasHover, // Aqui você pode colocar a nota, ou pode ter um estado para isso também
            tag: selectedEmotion,
            comentario: comentario,
            dtAvaliacao: dataAvaliacao
        };

        console.log(data)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        // Substitua a URL abaixo pela URL do seu endpoint no Spring Boot
        axios.post(`http://localhost:8080/avaliacoes/${empresaId}/${usuarioId}`, data, config)
            .then(response => {
                // Manipule a resposta aqui se precisar
                console.log('Avaliação enviada com sucesso!', response.data);
                fecharModal();
                window.location.reload();
            })
            .catch(error => {
                // Manipule os erros aqui se precisar
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

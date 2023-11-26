import "./modal.css"
import closeModal from '../../../assets/closeModal.svg'
import estrelas from '../../../assets/Estrelas.svg'

import React from 'react';

function ModalAvaliacao({ onClose, mostrarModal }) {
    const fecharModal = () => {
        onClose(); // Chama a função onClose passada por props para fechar o modal na tela pai
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
                            Bar da juju
                            <div className="estrelas">
                                <img src={estrelas} alt="estrelas de avaliações" />
                            </div>
                        </div>
                        <div className="modalTexto">
                            <span>Como foi sua experiência ?</span>
                        </div>

                        <div className="modalContainerEmocoes">
                            <div className="modalContainerEmocao">
                                Humilhade
                            </div>
                            <div className="modalContainerEmocao">
                                Brave
                            </div>
                            <div className="modalContainerEmocao">
                                Frustade
                            </div>
                            <div className="modalContainerEmocao">
                                Amade
                            </div>
                            <div className="modalContainerEmocao">
                                Acolhide
                            </div>
                            <div className="modalContainerEmocao">
                                Feliz
                            </div>
                        </div>
                        <div className="modalTexto">
                            <span>Comente sua experiencia</span>
                        </div>
                        <div className="modalComentario">
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="botaoModal">
                            <button  onClick={fecharModal}>Avalie</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ModalAvaliacao;

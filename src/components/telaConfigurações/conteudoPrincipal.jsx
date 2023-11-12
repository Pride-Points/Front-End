import React from 'react';
import './conteudoPrincipal.css';
import { useState } from 'react';
import IconImage from '../../assets/ion_image-outline.png';
import IconEdit from '../../assets/tabler_edit.png';
import IconBlock from '../../assets/block.png';


function ConteudoPrincipal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSecondPartVisible, setIsSecondPartVisible] = useState(false);


  const openModal = () => {
    setModalVisible(true);
    setIsSecondPartVisible(false);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleNext = () => {
    setIsSecondPartVisible(true);
  };

  const handleBack = () => {
    setIsSecondPartVisible(false);
  };

  const handleSave = () => {
    closeModal();
  };

  return (
    <div class="content">
      <div class="container">

        <div class="conteudo">

          <div class="container-cima">
            <div class="frases">
              <span class="titulo">Olá, <b id="nome-usuario">Usuário</b></span>
              <span class="subtitulo">Confira seus dados cadastrais!</span>
            </div>
            <div className="upload-container">
              <span className="texto-upload" onClick={openModal}>Altere sua imagem aqui →</span>
              <div className="imagem-upload" onClick={openModal}>
                <img src={IconImage} />
              </div>

            </div>

            {/* Modal */}
            {modalVisible && (
              <div className="modal" onClick={closeModal}>
                <div className="modal-content">
                  <span className="titulo-modal">
                    <h1>Alterar foto</h1>
                  </span>
                  <span className="fechar-modal" onClick={closeModal}>
                    X
                  </span>
                  <div className="contorno">
                    <div className="imagem-upload-modal">
                      <img src={IconImage} alt="Icone de Imagem" />
                    </div>
                    <span>Adicionar imagem</span>
                  </div>

                  <button className="botao-salvar" onClick={closeModal}>
                    Salvar
                  </button>
                </div>
              </div>
            )}
          </div>

          <div class="container-baixo">
            <div className="form-container">
              <form>
                {isSecondPartVisible ? (
                  <>
                    <h1>Edite seus dados (Parte 2)</h1>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="input-container">
                        <input type="email" id="email" name="email" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>


                    </div>
                    <div className="form-group">
                      <label htmlFor="senha-atual">Senha Atual</label>
                      <div className="input-container">
                      <input type="password" id="senha-atual" name="senha-atual" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>
                     
                    </div>
                    <div className="form-group">
                      <label htmlFor="nova-senha">Nova Senha</label>
                      <div className="input-container">
                      <input type="password" id="nova-senha" name="nova-senha" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>
                    
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirmacao-senha">Confirmação de Senha</label>
                      <div className="input-container">
                      <input type="password" id="confirmacao-senha" name="confirmacao-senha" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>
                  
                      
                    </div>


                  </>
                ) : (
                  <>
                    <h1>Edite seus dados (Parte 1)</h1>
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <div className="input-container">
                        <input type="text" id="nome" name="nome" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>

                    </div>
                    <div className="form-group">
                      <label htmlFor="cpf">CPF</label>
                      <div className="input-container" id='input_cpf'>
                        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" />
                        <img src={IconBlock} className="edit-icon" />
                      </div>

                    </div>
                    <div className="form-group">
                      <label htmlFor="genero">Gênero</label>
                      <div className="input-container">
                        <input type="text" id="genero" name="genero" placeholder="Masculino/Feminino" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>

                    </div>
                    <div className="form-group">
                      <label htmlFor="orientacao-sexual">Orientação Sexual</label>
                      <div className="input-container">
                        <input type="text" id="orientacao-sexual" name="orientacao-sexual" />
                        <img src={IconEdit} className="edit-icon" />
                      </div>

                    </div>
                  </>
                )}


                {/* Adicione os outros campos aqui conforme necessário */}
                <div className="form-group">
                  <div className="button-container">
                    {isSecondPartVisible ? (
                      <>
                        <button type="button" onClick={handleBack}>
                          Voltar
                        </button>
                        <button type="button" onClick={handleSave}>
                          Salvar
                        </button>
                      </>
                    ) : (
                      <button type="button" onClick={handleNext}>
                        Continuar
                      </button>
                    )}
                  </div>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div >
    </div >

  );
}

export default ConteudoPrincipal;
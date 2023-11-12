import React from 'react';
import './conteudoPrincipal.css';
import { useState } from 'react';
import IconImage from '../../assets/ion_image-outline.png';


function ConteudoPrincipal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isSecondPartVisible, setIsSecondPartVisible] = useState(false);

  const openModalForm = () => {
    setModalVisible(true);
    setIsSecondPartVisible(false); // Certifique-se de que a primeira parte seja exibida ao abrir o modal
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
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

       
            {isSecondPartVisible ? ( // Verifica se a segunda parte deve ser exibida
              <form>
                {/* Adicione os campos de email, senha atual, nova senha e confirmação de senha aqui */}
                <h1>Edite seus dados (Parte 2)</h1>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="senha-atual">Senha Atual</label>
                  <input type="password" id="senha-atual" name="senha-atual" />
                </div>
                <div className="form-group">
                  <label htmlFor="nova-senha">Nova Senha</label>
                  <input type="password" id="nova-senha" name="nova-senha" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmacao-senha">Confirmação de Senha</label>
                  <input type="password" id="confirmacao-senha" name="confirmacao-senha" />
                </div>

                <div className="form-group">
                  <button type="button" onClick={() => setIsSecondPartVisible(false)}>
                    Cancelar
                  </button>
                  <button type="submit">
                    Salvar
                  </button>
                </div>
              </form>
            ) : (
              <form>
                {/* Adicione os campos existentes aqui */}
                <h1>Edite seus dados (Parte 1)</h1>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input type="text" id="nome" name="nome" />
                </div>
                <div className="form-group">
                  <label htmlFor="cpf">CPF</label>
                  <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" />
                </div>
                <div className="form-group">
                  <label htmlFor="genero">Gênero</label>
                  <input type="text" id="genero" name="genero" placeholder="Masculino/Feminino" />
                </div>
                <div className="form-group">
                  <label htmlFor="orientacao-sexual">Orientação Sexual</label>
                  <input type="text" id="orientacao-sexual" name="orientacao-sexual" />
                </div>
                <div className="form-group">
                  <button type="button" onClick={closeModal}>
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSecondPartVisible(true)}
                  >
                    Continuar
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  </div>

  );
}

export default ConteudoPrincipal;
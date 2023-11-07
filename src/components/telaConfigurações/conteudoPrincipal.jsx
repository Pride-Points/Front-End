import React from 'react';
import './conteudoPrincipal.css';


function ConteudoPrincipal() {
  return (
    <div class="content">
      <div class="container">

        <div class="conteudo">

          <div class="container-cima">
            <div class="frases">
              <span class="titulo">Olá, <b id="nome-usuario">Usuário</b></span>
              <span class="subtitulo">Confira seus dados cadastrais!</span>
            </div>
            <div class="botton">
              <span class="local">
                <i class="fas fa-map-marker-alt"></i>SP / Av.Paulista</span>

            </div>
          </div>

          <div class="container-baixo">
            <div className="form-container">
            
              <form>
              <h1>Edite seus dados</h1>
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
                  <button type="submit">Salvar</button>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default ConteudoPrincipal;
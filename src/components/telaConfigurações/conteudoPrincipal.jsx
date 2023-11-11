import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function ConteudoPrincipal() {
  return (
    <div className="content">
      <div className="container">
        <div className="conteudo">
          <div className="container-cima">
            <div className="frases">
              <span className="titulo">Olá, <b id="nome-usuario">Isabela Saori</b></span>
              <span className="subtitulo">Encontre lugares inclusivos para você</span>
            </div>
            <div className="botton">
              <span className="local">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> SP / Av.Paulista
              </span>
            </div>
          </div>

          <div className="container-baixo">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.600080127026!2d-46.66138561188431!3d-23.554072540830866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59caaaacb22d%3A0xf14864d2aa14537e!2zQ29uc29sYcOnw6NvLCBTw6NvIFBhdWxvIC0gU1A!5e0!3m2!1spt-BR!2sbr!4v1696469180384!5m2!1spt-BR!2sbr"
              width="800" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConteudoPrincipal;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const ModeloComentario = ({ iconPerfil, autor, conteudo, data, isShared, title}) => {
  return (
    <div className="comentario">
      <img src={iconPerfil} alt="Icone do perfil" title={title} />
      <h4>{autor}</h4>
      <p>{conteudo}</p>
      <h5>{data}</h5>
      {isShared ? (
        <FontAwesomeIcon icon={faShare} className="icon-share" />
      ) : (
        <FontAwesomeIcon icon={faShare} className="icon-not-shared" />
      )}
    </div>
  );
};


export default ModeloComentario;
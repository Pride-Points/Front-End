import React from 'react';

const ModeloComentario = ({ autor, conteudo }) => {
  return (
    <div className="comentario">
      <h4>{autor}</h4>
      <p>{conteudo}</p>
    </div>
  );
};

export default ModeloComentario;

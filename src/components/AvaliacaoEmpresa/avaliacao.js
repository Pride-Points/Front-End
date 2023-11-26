export const calcularMediaAvaliacoes = (comentarios) => {
  // Sua lógica para calcular a média aqui
  const somaAvaliacoes = comentarios.reduce((total, comentario) => total + comentario.avaliacao, 0);
  const media = somaAvaliacoes / comentarios.length;
  return media.toFixed(1); // Arredonda para uma casa decimal
};

export const separarComentariosPorEstrelas = (comentarios) => {
  const comentariosSeparados = {};

  comentarios.forEach((comentario) => {
    const quantidadeEstrelas = comentario.avaliacao;

    if (!comentariosSeparados[quantidadeEstrelas]) {
      comentariosSeparados[quantidadeEstrelas] = [];
    }

    comentariosSeparados[quantidadeEstrelas].push(comentario);
  });

  return comentariosSeparados;
};
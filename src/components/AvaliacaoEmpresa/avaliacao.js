export const calcularMediaAvaliacoes = (avaliacoes) => {
  // Sua lógica para calcular a média aqui
  const somaAvaliacoes = avaliacoes.reduce((total, avaliacao) => total + avaliacao.nota, 0);
  const media = somaAvaliacoes / avaliacoes.length;
  return media.toFixed(1); // Arredonda para uma casa decimal
};

export const separarComentariosPorEstrelas = (avaliacoes) => {
  const avaliacoesSeparados = {};

  // Verifica se 'avaliacoes' é um array antes de usar 'forEach'
  if (Array.isArray(avaliacoes)) {
    avaliacoes.forEach((avaliacao) => {
      const quantidadeEstrelas = avaliacao.nota;

      if (!avaliacoesSeparados[quantidadeEstrelas]) {
        avaliacoesSeparados[quantidadeEstrelas] = [];
      }

      avaliacoesSeparados[quantidadeEstrelas].push(avaliacao);
    });
  } else {
    console.error('A variável "avaliacoes" não é um array.');
  }

  return avaliacoesSeparados;
};
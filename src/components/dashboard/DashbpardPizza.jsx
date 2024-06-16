import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardPizza = ({ labels, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const plugins = [
    {
      beforeDraw: function (chart) {
        const ctx = chart.ctx;
        const width = chart.canvas.width;
        const height = chart.canvas.height;
        const label = '84% YAGs';
        const fontColor = 'white';
        const backgroundColor = 'rgba(0, 0, 0, 0.7)';

        // Calcular o total e a posição do label com base na porcentagem
        const total = data.reduce((acc, curr) => acc + curr, 0);
        const percentage = data[0] / total * 100;
        const labelX = width / 2;
        const labelY = height / 2;

        ctx.save();
        ctx.font = 'bold 16px Arial';
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${percentage.toFixed(1)}%`, labelX, labelY);  // Exibe a porcentagem do primeiro dado
        ctx.restore();

        // Desenha um retângulo de fundo atrás do label
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(labelX - 40, labelY - 10, 80, 20);
      },
    },
  ];

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: ['rgba(59, 000, 237, 0.7)', 'rgba(156, 39, 176, 0.7)', 'rgba(216, 27, 96, 0.7)', 'rgba(255, 152, 0, 0.7)', 'rgba(215, 215, 215, 0.7)'],
            hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
            borderWidth: 0,
          },
        ],
        total: data.reduce((acc, curr) => acc + curr, 0), // Soma todos os elementos para obter o total
      },
      options: {
        cutout: '90%',
        plugins: plugins,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [labels, data]); // Adicionando labels e data como dependências para recriar o gráfico quando mudarem

  return (
    <div>
      <div className='genero'>Gênero da comunidade</div>
      <canvas ref={chartRef} width="400" height="200" />
    </div>
  );
};

export default DashboardPizza;

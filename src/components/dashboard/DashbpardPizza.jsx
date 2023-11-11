import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const plugins = [
  {
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const width = chart.canvas.width;
      const height = chart.canvas.height;
      const label = '84% YAGs';
      const fontColor = 'white';
      const backgroundColor = 'rgba(0, 0, 0, 0.7)';

      // Adicione o seguinte código para posicionar o label corretamente
      const data = chart.data;
      const datasets = data.datasets;
      const dataset = datasets[0];
      const dataPoints = dataset.data;
      const total = data.total;

      const labelX = width * dataPoints[0] / total;
      const labelY = height / 2;

      ctx.save();
      ctx.font = 'bold 16px Arial';
      ctx.fillStyle = fontColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, labelX, labelY);
      ctx.restore();

      // Adicione o seguinte código para desenhar um retângulo de fundo atrás do label
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(labelX - 10, labelY - 10, 20, 20);
    },
  },
];

const DashboardPizza = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Gays', 'Lesbicas', 'Bissexuais'],
        datasets: [
          {
            data: [30, 40, 30],
            backgroundColor: ['rgba(255, 99, 132, 0.7)', 'rgba(54, 162, 235, 0.7)', 'rgba(255, 205, 86, 0.7)'],
            hoverBackgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 205, 86, 1)'],
            borderWidth: 0, // Define a grossura da borda como 0 para remover as bordas
          },
        ],
        total: 100, // Defina o total de dados
      },
      options: {
        cutout: '90%',
        plugins: plugins,
      },
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, []);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default DashboardPizza;
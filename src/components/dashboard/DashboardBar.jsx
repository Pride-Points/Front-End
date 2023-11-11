import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardBar = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      // Se houver uma instância anterior do Chart, destrua-a antes de criar uma nova
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Avaliações',
            backgroundColor: '#EFA9FF',
            borderWidth: 2,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: [65, 52, 80, 81, 56],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Retorne uma função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      chartInstance.current.destroy();
    };
  }, []); // O array vazio como segundo argumento garante que o useEffect é executado apenas uma vez, sem dependências

  return (
      <canvas ref={chartRef} width="300" height="200" />
  
  );
};

export default DashboardBar;
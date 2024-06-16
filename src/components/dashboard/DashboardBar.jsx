import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardBar = ({ labels, data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destrua a instância anterior antes de criar uma nova
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels, // Usando as labels passadas por props
        datasets: [
          {
            label: 'Avaliações',
            backgroundColor: ['#EFA9FF', '#FFB5D6', '#BAADCC', '#BE70CB', '#B638D3'], 
            borderWidth: 2,
            borderRadius: 2.917,
            hoverBackgroundColor: 'rgba(75,192,192,0.4)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: data, // Usando os dados passados por props
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 2
            }
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Limpeza para destruir o gráfico
      }
    };
  }, [labels, data]); // Dependências para recriar o gráfico quando os labels ou dados mudarem

  return (
    <canvas ref={chartRef} />
  );
};

export default DashboardBar;

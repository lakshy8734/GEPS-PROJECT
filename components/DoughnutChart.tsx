'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  backgroundColor: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data, labels, backgroundColor }) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        hoverOffset: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Doughnut Chart',
      },
      animation: {
        animateRotate: true,
      },
      options: {
        responsive: true,
        maintainAspectRation: false,
      }
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
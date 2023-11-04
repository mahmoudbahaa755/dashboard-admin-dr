'use client'
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import ChartHeader from '@/elements/ChartHeader';
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'New Visitor',
        data: [13, 20, 4, 18, 7, 4, 8, 15, 10, 12, 14, 16],
        backgroundColor: "rgb(255, 255, 255)",
        borderColor: "green",
        pointRadius: "0",
        borderWidth: 1
      },
      {
        label: 'Old Visitor',
        data: [3, 30, 6, 6, 3, 4, 11, 9, 8, 10, 12, 14],
        backgroundColor: "rgba(255, 0, 255, 0.99)",
        borderColor: "gray",
        pointRadius: "0",
        borderWidth: 1
      }
    ]
  };


  const options = {
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        boxWidth: 40
      }
    },
    tooltips: {
      enabled: false
    },
    scales: {
      x: {
        ticks: {
          beginAtZero: true,
          fontColor: '#000'
        },
        grid: {
          display: true,
          color: "rgba(221, 221, 221, 0.08)"
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          fontColor: '#ddd'
        },
        grid: {
          display: true,
          color: "rgba(221, 221, 221, 0.08)"
        },
      }
    }
  };
  

const LineChart = () => (
    <div className='bg-white'>
    <ChartHeader title='Site Traffic'/>
        <Line data={data} options={options} />
    </div>
);

export default LineChart;
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Top Five Honey Producers by Province in Canada (2021)',
    },
  },
};

const labels = ['Ontario', 'Manitoba', 'Saskatchewan', 'Alberta', 'British Columbia'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Thousands of pounds (lb)',
      data: [6402,18630,19665,34925,4346],
      backgroundColor: '#FED22B',
    },
  ],
};

export function Chart() {
  return <Bar className={styles.chart} options={options} data={data} />;
}

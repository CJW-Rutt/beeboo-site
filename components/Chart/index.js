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
      text: 'Total Honey Production by Province',
    },
  },
};

const labels = ['P.E.I.', 'Nova Scotia', 'New Brunswick', 'Quebec', 'Ontario', 'Manitoba', 'Saskatchewan', 'Alberta', 'British Columbia'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Thousands of pounds (lb)',
      data: [192,578,406,4628,6402,18630,19665,34925,4346],
      backgroundColor: '#FED22B',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}

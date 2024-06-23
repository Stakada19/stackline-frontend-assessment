import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, TimeScale, ChartOptions } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { useAppSelector } from '../../hooks/hooks';
import styles from './SalesChart.module.css';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  TimeScale
);

const SalesChart: React.FC = () => {
  const sales = useAppSelector((state) => state.product.product?.sales || []);

  const data = {
    labels: sales.map((sale) => sale.weekEnding),
    datasets: [
      {
        label: 'Retail Sales',
        data: sales.map((sale) => sale.retailSales),
        borderColor: '#49B1F2',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
      {
        label: 'Wholesale Sales',
        data: sales.map((sale) => sale.wholesaleSales),
        borderColor: '#9BA6BF',
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
          displayFormats: {
            month: 'MMM',
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: '#a3a3a3',
        },
        title: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false
        },
        title: {
          display: false,
        },
      },
    }
  };

  return (
    <div className={styles.chartSection}>
      <p className={styles.chartTitle}> Retail Sales</p>
      <div className={styles.chartContainer}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default SalesChart;

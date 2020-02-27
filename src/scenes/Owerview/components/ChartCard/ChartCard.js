import React, {useState} from 'react';
import {Bar, Line, Pie} from "react-chartjs-2";

import s from './ChartCard.module.scss';

const ChartCard = ({title, chartColor}) => {
  const initState = {
    chartData: {
      labels: ['Boston', 'Worcester', 'Sprinfield', 'Lowell', 'Cambrige', 'New Bedford'],
      datasets: [
        {
          label: 'Populatuon',
          data: [
            612234,
            123123,
            324432,
            63421,
            453455,
            434231,
          ],
          backgroundColor: chartColor
        }
      ]
    }
  };

  const chartOptions = {
    cornerRadius: 28,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }]
    },
  };

  const [data, setData] = useState(initState);

  console.log(data.chartData);
  return (
    <div className={s.chart_card}>
      <div className={s.chart_discription}>
        <span className={s.chart_title}>
          {title}
        </span>
        <span className={s.chart_number}>
          441
        </span>
      </div>
      <div className={s.chart}>
        <Bar
          data={data.chartData}
          width={50}
          height={100}
          options={chartOptions}
        />
      </div>
    </div>
  )
};

export default ChartCard;
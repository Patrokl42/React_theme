import React, {useState} from 'react';
import {Bar, Line, Pie, Doughnut} from "react-chartjs-2";

import s from './ChartUsers.module.scss';

const ChartUsers = () => {
  let initState = {
    chartData: {
      labels: ['Boston', 'Worcester', 'Sprinfield', 'Lowell', 'Cambrige', 'New Bedford', 'New Bedford', 'New Bedford', 'New Bedford'],
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
            63421,
            453455,
            434231,
          ],
          backgroundColor: '#61dafb',
          borderDash: [50, 30]
        }
      ]
    }
  };

  const chartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
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

  const randomData = () => {
    console.log(initState.chartData.datasets[0].data);
    const randomDataArray = initState.chartData.datasets[0].data.map(item => {
      return Math.random() * 100000
    });
    initState.chartData.datasets[0].data = randomDataArray;
  }

  return (
    <div className={s.chart_wrapper}>
      <div className={s.chart_description}>
        <div className={s.chart_options}>
          <button className={s.chart_option} onClick={() => randomData()}>2020</button>
          <button className={s.chart_option}>2021</button>
          <button className={s.chart_option}>2022</button>
        </div>
      </div>
      <div className={s.chart_container}>
        <Line
          data={initState.chartData}
          width={1550}
          height={200}
          options={chartOptions}
        />
      </div>
    </div>
  )
};

export default ChartUsers;
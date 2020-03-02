import React from 'react';
import ChartCard from "./components/ChartCard/ChartCard";

import s from './Owerview.module.scss';
import ChartUsers from "./components/ChartUsers/ChartUsers";

const Overview = () => {
  return (
    <>
      <div>
        <ChartUsers/>
      </div>
      <div className={s.chart_cards}>
        <ChartCard title={'Visitor'} chartColor={'#adffa8'}/>
        <ChartCard title={'Users'} chartColor={'#ff4548'}/>
        <ChartCard title={'Buyers'} chartColor={'#7469ff'}/>
      </div>
    </>
  )
};

export default Overview;
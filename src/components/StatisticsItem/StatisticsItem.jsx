import styled from './Statistics.module.css';

export const StatisticsItem = ({title, total, icon: Icon}) => {
  return (
    <li className={styled.item}>
      <Icon size="34"/>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}</p>
    </li>
  );
};

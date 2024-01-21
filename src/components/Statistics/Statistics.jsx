import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { StatisticsItem } from '../StatisticsItem/StatisticsItem';
import styled from './Statistics.module.css';

const icons = {
  1: FaRegThumbsUp,
  2: MdPeople,
  3: MdOutlineProductionQuantityLimits,
  4: GiTreeDoor,
};
export const Statistics = ({ stats , title}) => {
  return (
    <div>
      <h2 className={styled.title}>{title}</h2>
      <ul className={styled.list}>
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            title={item.title}
            total={item.total}
            icon={icons[item.id]}
          />
        ))}
      </ul>
    </div>
  );
};

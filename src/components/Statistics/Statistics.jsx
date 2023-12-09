import { StatisticItem } from '../StatisticItem/StatisticItem';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}
      {stats.length > 0 && (
        <StatisticsList>
          {stats.map(stat => {
            return (
              <StatisticItem
                title={stat.title}
                total={stat.total}
                key={stat.id}
              />
            );
          })}
        </StatisticsList>
      )}
      {/* {Boolean(stats.length) && <StatisticsList></StatisticsList>} */}
      {/* {!!stats.length && <StatisticsList></StatisticsList>} */}
    </>
  );
};

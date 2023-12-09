import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon color="black" size={30} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};

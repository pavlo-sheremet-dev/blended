import { ForbesListItem } from '../ForbesListItem/ForbesListItem';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({ list }) => {
  return (
    <LeaderBoard>
      <BoardHeader>
        <BoardTitle>
          <TitleTop>Forbes</TitleTop>
          <TitleBottom>Leader board</TitleBottom>
        </BoardTitle>
      </BoardHeader>

      <LeaderBoardProfiles>
        {list.map(item => (
          <ForbesListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            capital={item.capital}
            isIncrease={item.isIncrease}
          />
        ))}
      </LeaderBoardProfiles>
    </LeaderBoard>
  );
};

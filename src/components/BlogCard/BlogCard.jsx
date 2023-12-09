import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date as Clock,
} from './BlogCard.styled';
import { formatDistanceToNow } from 'date-fns';

export const BlogCard = ({
  poster,
  tag,
  title,
  description,
  name,
  avatar,
  postedAt,
}) => {
  const result = formatDistanceToNow(new Date(postedAt));
  return (
    <div>
      <Card>
        <CardHeader>
          <CardPoster src={poster} alt="card__image" />
        </CardHeader>
        <CardBody>
          <Tag>{tag}</Tag>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
        </CardBody>
        <CardFooter>
          <UserBox>
            <Avatar src={avatar} alt={name} />
            <UserInfo>
              <UserName>{name}</UserName>
              <Clock>{result}</Clock>
            </UserInfo>
          </UserBox>
        </CardFooter>
      </Card>
    </div>
  );
};

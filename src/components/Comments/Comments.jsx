import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();

  return (
    <Grid>
      {comments &&
        comments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

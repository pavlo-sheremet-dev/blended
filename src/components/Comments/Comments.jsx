import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
// import { comments } from "../../helpers/comments";

export const Comments = () => {
  const { data: comments } = useGetCommentsQuery();

  return (
    <Grid>
      {comments?.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

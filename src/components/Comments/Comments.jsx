import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { selectFilteredComments } from "../../redux/selectors";

export const Comments = () => {
  useGetCommentsQuery();
  const comments = useSelector(selectFilteredComments);

  return (
    <Grid>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

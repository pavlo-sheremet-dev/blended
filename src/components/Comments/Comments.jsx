import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { selectFilterValue } from "../../redux/filterSlice";

export const Comments = () => {
    const { data: comments = [] } = useGetCommentsQuery();
    const filter = useSelector(selectFilterValue);

    const getFilteredComments = () => {
        return comments.filter(
            (comment) =>
                comment.author
                    .toLowerCase()
                    .includes(filter.toLowerCase().trim()) ||
                comment.content
                    .toLowerCase()
                    .includes(filter.toLowerCase().trim())
        );
    };

    const filteredComments = getFilteredComments();
    console.log(filteredComments);
    return (
        <Grid>
            {filteredComments?.map((comment) => (
                <Comment key={comment.id} {...comment} />
            ))}
        </Grid>
    );
};

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};

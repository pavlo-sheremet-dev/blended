import { fetchMovieReviewsAPI } from "../../helpers/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReview, setInfoReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const review = await fetchMovieReviewsAPI(movieId);

        setInfoReview(review.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    movieCast();
  }, [movieId]);

  return (
    <>
      {!isLoading && infoReview.length === 0 && <div>Not found</div>}
      {infoReview.length !== 0 &&
        infoReview.map((el) => (
          <div key={el.id}>
            <h2>{el.author}</h2>
            <p>{el.content}</p>
          </div>
        ))}
    </>
  );
};
export default Reviews;

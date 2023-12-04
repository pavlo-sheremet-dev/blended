import { fetchMovieCastAPI } from "../../helpers/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import oops from "../../img/oops.jpg";

const baseUrl = "https://image.tmdb.org/t/p/w300";

const Cast = () => {
  const { movieId } = useParams();
  const [infoCast, setInfoCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const cast = await fetchMovieCastAPI(movieId);

        setInfoCast(cast.cast.slice(0, 10));
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
      {!isLoading && infoCast.length === 0 && <div>Not found</div>}
      {infoCast.length !== 0 &&
        infoCast.map((el) => (
          <div key={el.id}>
            {el.profile_path ? (
              <img
                width="100"
                height="100"
                src={`${baseUrl}${el.profile_path}`}
                alt="poster"
              />
            ) : (
              <img width="100" height="100" src={oops} alt="404" />
            )}

            <h2>
              {el.name} : {el.character}
            </h2>
          </div>
        ))}
    </>
  );
};
export default Cast;

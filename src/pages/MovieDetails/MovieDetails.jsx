import { fetchMovieInfoAPI } from "../../helpers/API";
import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import oops from "../../img/oops.jpg";

const baseUrl = "https://image.tmdb.org/t/p/w300";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});
  const [infoGenres, setInfoGenres] = useState([]);
  const [isPosterPath, setIsPosterPath] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = useRef(location);

  useEffect(() => {
    const movieInfo = async () => {
      try {
        const description = await fetchMovieInfoAPI(movieId);

        setInfo(description);
        setInfoGenres(description.genres);
      } catch (error) {
        console.log(error);
        navigate("/movies");
      } finally {
        info.poster_path === null
          ? setIsPosterPath(false)
          : setIsPosterPath(true);
      }
    };
    movieInfo();
  }, [info.poster_path, movieId, navigate]);

  return (
    <div className="">
      <Link to={goBack.current.state}>Go back</Link>

      {!isPosterPath && <img width="100" height="100" src={oops} alt="404" />}

      {info.poster_path && (
        <img
          width="100"
          height="100"
          src={`${baseUrl}${info.poster_path}`}
          alt="poster"
        />
      )}

      <h2>{info.title}</h2>
      <p>Overview: {info.overview}</p>
      {infoGenres.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};
export default MovieDetails;

import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://ancient-refuge-36430.herokuapp.com/https://yts.mx/api/v2/list_movies.json?movie_id=${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;

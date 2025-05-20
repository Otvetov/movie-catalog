import { useParams } from "react-router-dom";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  return <h2>Детали фильма: {id}</h2>;
};
export default MovieDetails;
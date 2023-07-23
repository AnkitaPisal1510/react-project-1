import Action_row from './action.js';

const Movie_row = ({ movie ,onDelete}) => {
  return (
    <div className="movie-row">
      <div className="image-container">
        <img className="Movie_image" src="image1.jpg" />
      </div>

      <div className="detail-container">
        <h1>{movie.name}</h1>
        <p>{movie.release_date} | {movie.type}</p>
        <p>{movie.description}</p>
        <div className="action_row">
          <Action_row/>
          <img className="delete" src="delete.svg" onClick={() => onDelete(movie.id)} />
        </div>
      </div>
    </div>
  );
};

export default Movie_row;



"use client"
import React, { useState } from 'react';

const AddMovieForm = () => {
  const [movie, setMovie] = useState({
    name: '',
    id: '',
    year: '',
    genre: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the movie details, e.g., send an API request or update state in the parent component
    console.log('Movie details:', movie);
    // Reset the form after submission
    setMovie({
      name: '',
      id: '',
      year: '',
      genre: '',
      description: ''
    });
  };

  return (
    <div>
      <img
        src="add_movie.jpeg"
        alt="Add Movie"
        onClick={() => {
          // Show a modal or prompt to enter movie details
        }}
      />
      {/* Example: Modal form */}
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name:
            <input type="text" name="name" value={movie.name} onChange={handleChange} />
          </label>
          <label>
            ID:
            <input type="text" name="id" value={movie.id} onChange={handleChange} />
          </label>
          <label>
            Year:
            <input type="text" name="year" value={movie.year} onChange={handleChange} />
          </label>
          <label>
            Genre:
            <input type="text" name="genre" value={movie.genre} onChange={handleChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={movie.description} onChange={handleChange} />
          </label>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;


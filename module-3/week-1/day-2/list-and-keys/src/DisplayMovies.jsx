import React from "react";

export default function DisplayMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie, i) => (
        <li key={i}>
          <h2 className="title">{movie.title} ({movie.year})</h2>

          {movie.genre.map((genre, j) => (
            <span key={j}>{genre}{" "}</span> // <- &nbsp; à la React
          ))}

        </li>
      ))}
    </ul>
  );
}

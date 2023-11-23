import "./MovieCard.css";
import Star from "../../assets/star.png";

import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    // 영화 카드
    <Link to={`/movie/${movie.id}`} className="movie_card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}
        `}
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">{movie.title}</h3>
        <div className="align_center movie_date_rate">
          <p className="align_center">{movie.release_date}</p>
          <p className="align_center">
            {movie.vote_average.toFixed(2)}
            <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">{movie.overview.slice(0, 100)}...</p>
      </div>
    </Link>
  );
}

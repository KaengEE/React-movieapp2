import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import _ from "lodash"; //lodash
//rfc
import React, { useEffect, useState } from "react";

export default function MovieList({ type, title, emoji }) {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]); //평점으로 구분
  const [minRating, setMinRating] = useState(0); //최소점수
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  async function fetchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${
        import.meta.env.VITE_MOVIE_API
      }&language=ko`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  }

  //평점구분 함수
  function handleFilter(rate) {
    if (minRating === rate) {
      setMinRating(0); //초기화
      setFilterMovies(movies); //모든영화
    } else {
      setMinRating(rate); //최소점수
      const filtered = movies.filter((movie) => movie.vote_average >= rate); //최소점수이상
      setFilterMovies(filtered);
    }
  }

  //정렬 함수
  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  }

  //정렬
  useEffect(() => {
    if (sort.by !== "default") {
      //sort.by가 default가 아닐때
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]); //lodash
      setFilterMovies(sortedMovies);
    }
  }, [sort]);

  useEffect(() => {
    fetchMovies();
  }, [type]);

  return (
    <section className="movie_list" id={`${type}`}>
      {/* 무비헤더 */}
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_header">
          <img src={emoji} alt="fire emoji" className="navbar_emoji" /> {title}
        </h2>

        {/* 점수별 */}
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              onClick={() => handleFilter(8)}
              className={
                minRating === 8
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
            >
              8+ Star
            </li>
            <li
              onClick={() => handleFilter(7)}
              className={
                minRating === 7
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
            >
              7+ Star
            </li>
            <li
              onClick={() => handleFilter(6)}
              className={
                minRating === 6
                  ? "movie_filter_item active"
                  : "movie_filter_item"
              }
            >
              6+ Star
            </li>
          </ul>

          <select
            name="by"
            id="by"
            onChange={handleSort}
            className="movie_sorting"
          >
            <option value="default">정렬기준</option>
            <option value="release_date">날짜순</option>
            <option value="vote_average">평점순</option>
          </select>
          <select
            name="order"
            id="order"
            onChange={handleSort}
            className="movie_sorting"
          >
            <option value="asc">오름차순</option>
            <option value="desc">내림차순</option>
          </select>
        </div>
      </header>
      {/* 무비카드 */}
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

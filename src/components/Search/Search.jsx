import MovieCard from "../MovieList/MovieCard";
import "./Search.css";

import React, { useEffect, useState } from "react";

export const Search = () => {
  //const saveTerm = localStorage.getItem("searchTerm"); //로컬에 저장된 검색어 불러오기
  const [searchTerm, setSearchTerm] = useState(""); // 검색어
  const [searchResults, setSearchResults] = useState([]); // 검색 결과
  const [noResults, setNoResults] = useState(false); // 검색 결과가 없는지 여부
  const [search, setSearch] = useState(""); //검색시 검색어 저장

  async function SearchMovie() {
    //console.log(searchTerm);
    setSearch(searchTerm);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${
        import.meta.env.VITE_MOVIE_API
      }&language=ko`
    );
    const data = await response.json();

    // 검색 결과가 없으면 return
    if (data.results.length === 0) {
      setNoResults(true);
      //초기화
      setSearchResults([]);
      setSearchTerm("");
    } else {
      // 검색 결과 저장
      setSearchResults(data.results);
      setSearchTerm("");
      setNoResults(false); // 검색 결과가 있음}
    }
  }

  //로컬에 저장
  useEffect(() => {
    localStorage.setItem("searchTerm", JSON.stringify(searchTerm));
  }, [searchResults]);

  //console.log(searchTerm);
  return (
    <div className="search_box">
      <h3 className="search_title">🔎 영화 검색</h3>
      <input
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="영화검색..."
      />
      <button onClick={SearchMovie}>검색</button>

      <div>
        {noResults && searchResults < 1 ? (
          <p className="search_term">검색 결과가 없습니다.</p>
        ) : null}

        {searchResults.length > 1 ? (
          <p className="search_result">'{search}'으로 검색한 결과입니다.</p>
        ) : null}
      </div>

      {/* 검색된 영화 카드들 */}
      <div className="movie_cards">
        {searchResults.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

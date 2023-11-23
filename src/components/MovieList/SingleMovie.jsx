import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SingleMovie.css";

export default function SingleMovie() {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]); //영화데이터

  //api 가져오기
  async function fetchSingleMovie() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_MOVIE_API
      }&language=ko`
    );
    const data = await response.json();
    //데이터 저장
    setDetails(data);
    console.log(data);
  }

  useEffect(() => {
    fetchSingleMovie();
  }, []);

  //이전으로
  const navigate = useNavigate();
  // 이전 페이지로 이동
  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="movie_detail">
      <div className="detail_box">
        <div className="detail_title">
          <h2>{details.title}</h2>
          <h4>- {details.tagline}</h4>
        </div>
        <div className="detail">
          {/* 포스터 */}
          <div className="detail_poster">
            {details.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                alt=""
              />
            )}
          </div>
          {/* 상세내용 */}
          <div className="detail_content">
            <p className="detail_p">
              제목: {details.title} ({details.original_title})
            </p>
            <p className="detail_p">개봉일: {details.release_date} </p>
            <p className="detail_p">
              평점: {details.vote_average?.toFixed(2)}점
            </p>
            <p className="detail_p">상영시간: {details.runtime}분</p>
            <p className="content">줄거리: {details.overview}</p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleGoBack}>이전으로</button>
        </div>
      </div>
    </div>
  );
}

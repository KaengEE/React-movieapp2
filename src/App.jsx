import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
//이미지
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Search } from "./components/Search/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* 검색 */}
        <Route path="/search" element={<Search />}></Route>
        <Route
          path="/"
          element={<MovieList type="popular" title="인기작품" emoji={Fire} />}
        />
        <Route
          path="/top_rated"
          element={<MovieList type="top_rated" title="최고평점" emoji={Star} />}
        />
        <Route
          path="/upcoming"
          element={<MovieList type="upcoming" title="예정작품" emoji={Party} />}
        />
      </Routes>

      <Footer />
      {/* 상단버튼 */}
      <button
        className="fixed_button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        TOP ▲
      </button>
    </div>
  );
}

export default App;

import "./App.css";
import { Footer } from "./components/Footer/Footer";
import MovieList from "./components/MovieList/MovieList";
import Navbar from "./components/Navbar/Navbar";
//이미지
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* 검색 */}
      <Search />
      <MovieList type="popular" title="인기작품" emoji={Fire} />
      <hr />
      <MovieList type="top_rated" title="최고평점" emoji={Star} />
      <hr />
      <MovieList type="upcoming" title="예정작품" emoji={Party} />
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

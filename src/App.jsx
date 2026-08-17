import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import SingleMoviePage from "./pages/SingleMoviePage";
import Login from "./pages/Login";

function App() {
return (
  <Router>
  <div className="bg-gray-900 min-h-screen text-white">
    <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<SingleMoviePage />} />
      <Route path="/tv" element={<TvShows />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
  </div>
  </Router>
);
}

export default App;

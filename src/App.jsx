import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanel from './components/SidePanel'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateAccount from './pages/Createaccount'
import MoviesPage from './pages/MoviesPage'
import TvShow from './pages/TvShow'
import TopRated from './pages/TopRated'
import Fav from './pages/Fav'
import Search from './pages/Search'
import Browse from './pages/Browse'
import DetailPage from './pages/DetailPage'
import './App.css'

function App() {
return (
  <>
  <Router>
  <SidePanel />
  <main className="rightpanel">
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/create" element={<CreateAccount />} />
       <Route path="/movies" element={<MoviesPage />} />
       <Route path="/shows" element={<TvShow />} />
       <Route path="/toptier" element={<TopRated />} />
       <Route path="/favourites" element={<Fav />} />
       <Route path="/search" element={<Search />} />
       <Route path="/browse" element={<Browse />} />
       <Route path="/detail/:type/:id" element={<DetailPage />} />
      </Routes>
  </main>
  </Router>
  </>
  
)
}

export default App;

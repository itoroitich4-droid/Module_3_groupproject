import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";


export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <SearchBar />
     <Outlet />
    </div>
  );
}
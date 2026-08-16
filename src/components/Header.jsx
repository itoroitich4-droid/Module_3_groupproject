import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">FlickForge</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/movies" className="hover:text-blue-400">Movies</Link>
        <Link to="/tv" className="hover:text-blue-400">TV Shows</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </nav>
    </header>
  );
}

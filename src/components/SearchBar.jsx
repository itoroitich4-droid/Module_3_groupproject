import { useState } from "react";
import { searchMulti } from "../movieapi/movieapi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const data = await searchMulti(query);
    setResults(data.results);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search movies or TV shows..."
          className="flex-1 p-2 rounded text-black"
        />
        <button className="bg-blue-500 px-4 py-2 rounded">Search</button>
      </form>
      <ul className="mt-4">
        {results.map(item => (
          <li key={item.id}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { fetchSearchResults } from "../redux/bookSlice";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(fetchSearchResults(query));
      navigate("/search");
      setQuery("");
    }
  };

  return (
    <div className="search-section flex flex-col items-center my-4 w-[270px] md:w-[400px] h-[30px] md:h-[40px] ">
      <div className="search-container flex flex-col items-center full-size ">
        <form onSubmit={handleSearch} className="full-size">
          <div className="form-container flex flex-row items-center full-size rounded-md justify-between ">
            <input
              type="text"
              placeholder="Search for books..."
              className="rounded-l-md full-size px-2 md:pl-4 bg-white placeholder-gray-400 placeholder-italic placeholder-opacity-70 text-md md:text-xl pb-1"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="flex flex-row items-center text-center px-3 w-[40px] h-full text-white bg-green-700 hover:bg-green-800 md:w-[50px] md:px-4 rounded-r-md cursor-pointer"
            >
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;

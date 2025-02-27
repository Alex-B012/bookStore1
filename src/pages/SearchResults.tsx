import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Loading from "../components/Loading";
import BookList from "../components/BookList";

const SearchResults: React.FC = () => {
  const { searchResults, loading, error } = useSelector(
    (state: RootState) => state.books
  );

  useEffect(() => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  });

  console.log("searchResults", searchResults);
  return (
    <div className="home-section h-fit w-[90%] md:w-[69%] mb-8">
      <div className="home-container w-full h-fit">
        <div className="books w-full h-fit pt-[30px]">
          <div className="home-title font-bold py-2">
            <h3>Search Results</h3>
          </div>
          {loading ? (
            <Loading />
          ) : error ? (
            <div className="error-message ">{error}</div>
          ) : (
            <BookList books={searchResults.slice(0, 12)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;

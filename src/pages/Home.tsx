import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchBooksByCategory } from "../redux/bookSlice";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const booksByCategory = useSelector(
    (state: RootState) => state.books.booksByCategory
  );

  useEffect(() => {
    const categories = ["Fiction", "Mystery", "Romance", "Fantasy"];
    categories.forEach((category) => {
      if (!booksByCategory[category]) {
        dispatch(fetchBooksByCategory(category));
      }
    });
  }, [dispatch, booksByCategory]);

  return (
    <div className="home-section">
      <div className="home-container">
        {Object.keys(booksByCategory).map((category, categoryIndex) => {
          const books = booksByCategory[category];

          return (
            <div className="books" key={categoryIndex}>
              <div className="home-title">
                <h3>{category}</h3>
                <p>
                  {books.map((book) => (
                    <p>{book.title}</p>
                  ))}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

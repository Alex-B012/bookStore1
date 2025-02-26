import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchBooksByCategory } from "../redux/bookSlice";
import BookList from "../components/BookList";

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
    <div className="home-section h-fit w-[90%] md:w-[69%] mb-8">
      <div className="home-container w-full h-fit ">
        {Object.keys(booksByCategory).map((category, categoryIndex) => {
          const books = booksByCategory[category];

          return (
            <div className="books w-full h-fit pt-[30px]" key={categoryIndex}>
              <div className="home-title font-bold py-2">
                <h3>{category}</h3>
              </div>
              <BookList books={books} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

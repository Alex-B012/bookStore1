import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { categories } from "../assets/data";
import { fetchBooksByCategory } from "../redux/bookSlice";
import BookList from "../components/BookList";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const booksByCategory = useSelector(
    (state: RootState) => state.books.booksByCategory
  );

  useEffect(() => {
    const categoriesHome: string[] = [];
    categories.forEach((category) =>
      categoriesHome.push(category.categoryName)
    );
    console.log("categoriesHome 1", categoriesHome);
    categoriesHome.sort();
    console.log("categoriesHome 2", categoriesHome);

    categoriesHome.forEach((category) => {
      if (!booksByCategory[category]) {
        dispatch(fetchBooksByCategory(category));
      }
    });
  }, [dispatch, booksByCategory]);

  return (
    <div className="home-section h-fit w-[90%] md:w-[69%] mb-8">
      <div className="home-container w-full h-fit ">
        {Object.keys(booksByCategory).map((category, index) => {
          const books = booksByCategory[category];

          return (
            <div className="books w-full h-fit pt-[30px]" key={index}>
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

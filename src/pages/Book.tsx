import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { fetchBookDetails } from "../redux/bookSlice";
import { FaArrowLeftLong } from "react-icons/fa6";

const VITE_COVERS_API_URL = import.meta.env.VITE_COVERS_API_URL;

const Book: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const bookDetails = useSelector(
    (state: RootState) => state.books.bookDetails
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails(id));
    }
  }, [dispatch, id]);

  return (
    <div className="details-container h-fit w-[95%] md:w-[90%] lg:w-[70%] mt-8 pb-20 flex flex-col items-left">
      <button
        className="go-back-btn flex flex-row justify-center cursor-pointer mb-8 px-3 py-1 h-[35px] w-[110px] text-white bg-green-700 hover:bg-green-800 font-bold "
        onClick={() => navigate("/")}
      >
        <FaArrowLeftLong className="mt-1" />{" "}
        <span className="ml-2 full-size">Go Back</span>
      </button>
      <div className="book-details w-full h-fit flex flex-col items-center md:flex-row md:justify-center md:items-start">
        <div className="book-image w-[240px] min-w-[240px] h-[220px]">
          {bookDetails?.covers && bookDetails.covers.length > 0 && (
            <img
              src={`${VITE_COVERS_API_URL}${bookDetails.covers[0]}-M.jpg`}
              alt={bookDetails.title}
              className="w-[240px] h-[220px]"
            />
          )}
        </div>
        <div className="book-info w-full md:pl-4 mt-4 md:mt-0">
          <h2 className="w-full h-fit font-bold text-center text-xl md:text-left ">
            {bookDetails?.title}
          </h2>
          <h4 className="w-full h-fit text-center md:text-left my-2 text-lg italic">
            {bookDetails?.subjects[0]}
          </h4>
          <p>
            {typeof bookDetails?.description === "object" &&
            bookDetails?.description !== null
              ? bookDetails.description.value
              : bookDetails?.description || "No Description found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;

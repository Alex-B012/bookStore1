import React from "react";

interface Book {
  title: string;
  author_name?: string[];
  authors?: { name: string }[];
  key: string;
  cover_id?: number;
  cover_i?: number;
}

interface BookListProps {
  books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  console.log("Books:", books);
  return (
    <div className="book-list full-size flex flex-row justify-center flex-wrap">
      {books.length > 0 ? (
        books.map((book, index) => (
          <div
            className="book-item w-[240px] h-[370px] mx-3 my-3 rounded-md flex flex-col items-center bg-gray-100 shadow-5px cursor-pointer hover:scale-105"
            key={index}
          >
            <div className="book-image w-full h-[220px]">
              {book.cover_id ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
                  alt={book.title}
                  className="w-full h-[220px]"
                />
              ) : book.cover_i ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              ) : (
                <div className="no-cover">No Cover Available</div>
              )}
            </div>
            <div className="book-info flex flex-col items-center w-full h-full">
              <div className="book-title font-bold text-lg text-center w-full h-[80px] flex flex-col justify-center px-1">
                <h3 title={book.title}>{book.title}</h3>
              </div>
              <div className="book-author text-center w-full h-[30px] flex flex-col justify-center">
                {book.authors
                  ? book.authors[0]?.name
                  : book.author_name?.[0] || "Unknown Author"}
              </div>
            </div>
            <div className="details text-center w-full h-[40px] flex flex-col justify-center rounded-b-md">
              <button className="w-full h-full rounded-b-md text-white bg-green-700 font-bold">
                View Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <div>No Books Found</div>
      )}
    </div>
  );
};

export default BookList;

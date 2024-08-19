import { useEffect } from "react";
import { useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [dataLength, setDataLength] = useState(6);
  useEffect(() => {
    fetch("books.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="font-bold text-2xl text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {books.slice(0, dataLength).map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
      <div className={dataLength === books.length ? "hidden" : " "}>
        <div className="text-center">
          <button
            onClick={() => setDataLength(books.length)}
            className="btn bg-[#23BE0A] text-white mb-10"
          >
            Show All Books
          </button>
        </div>
      </div>
    </div>
  );
};

export default Books;

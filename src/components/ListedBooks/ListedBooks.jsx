import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../utility/localStorage";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [sortedReadBooks, setSortedReadBooks] = useState([]);
  const [sortedWishlistBooks, setSortedWishlistBooks] = useState([]);

  const handleBooksFilter = (filter) => {
    const sortBooks = (books, key) => {
      return [...books].sort((a, b) => {
        if (key === "rating" || key === "totalPages" || key === "publishYear") {
          return b[key] - a[key];
        }
        return 0;
      });
    };

    if (filter === "rating") {
      setSortedReadBooks(sortBooks(readBooks, "rating"));
      setSortedWishlistBooks(sortBooks(wishlistBooks, "rating"));
    } else if (filter === "number-of-pages") {
      setSortedReadBooks(sortBooks(readBooks, "totalPages"));
      setSortedWishlistBooks(sortBooks(wishlistBooks, "totalPages"));
    } else if (filter === "publish-year") {
      setSortedReadBooks(sortBooks(readBooks, "publishYear"));
      setSortedWishlistBooks(sortBooks(wishlistBooks, "publishYear"));
    }
  };

  useEffect(() => {
    const readBookIds = getReadBooks();
    const wishlistBookIds = getWishlistBooks();

    if (books.length > 0) {
      const filteredReadBooks = books.filter((book) =>
        readBookIds.includes(book.bookId)
      );
      const filteredWishlistBooks = books.filter((book) =>
        wishlistBookIds.includes(book.bookId)
      );

      setReadBooks(filteredReadBooks);
      setWishlistBooks(filteredWishlistBooks);

      // Initialize with default sorting (e.g., by rating)
      setSortedReadBooks(filteredReadBooks);
      setSortedWishlistBooks(filteredWishlistBooks);
    }
  }, [books]);

  return (
    <div>
      <h2 className="text-xl font-bold text-center py-7 rounded-md bg-[#1313130D]">
        Books
      </h2>
      {/* sort button  */}
      <div className="text-center mt-10 mb-24">
        <details className="dropdown">
          <summary className="btn p-4 font-semibold bg-[#23BE0A] text-white">
            Sort By <FaAngleDown />
          </summary>
          <ul className="menu dropdown-content bg-[#1313130D] rounded-box w-40">
            <li onClick={() => handleBooksFilter("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleBooksFilter("number-of-pages")}>
              <a>Number of Pages</a>
            </li>
            <li onClick={() => handleBooksFilter("publish-year")}>
              <a>Publish Year</a>
            </li>
          </ul>
        </details>
      </div>

      {/* tab list  */}
      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-y-base-300 rounded-box p-6"
          >
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No books in the read list.</p>
            )}
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-y-base-300 rounded-box p-6"
          >
            {sortedWishlistBooks.length > 0 ? (
              sortedWishlistBooks.map((book) => (
                <BookCard key={book.bookId} book={book} />
              ))
            ) : (
              <p>No books in the wishlist.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

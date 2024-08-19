import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { getReadBooks, getWishlistBooks } from "../utility/localStorage";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

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
    }
  }, [books]);

  return (
    <div>
      <h2 className=" text-xl font-bold text-center py-7 rounded-md bg-[#1313130D]">
        Books
      </h2>
      {/* sort button  */}
      <div className="text-center mt-10 mb-24 ">
        <details className="dropdown ">
          <summary className="btn p-4 font-semibold bg-[#23BE0A] text-white">
            Sort By <FaAngleDown></FaAngleDown>
          </summary>
          <ul className="menu dropdown-content bg-[#1313130D] rounded-box w-40 ">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
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
            {readBooks.length > 0 ? (
              readBooks.map((book) => (
                <BookCard key={book.bookId} book={book}></BookCard>
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
            {wishlistBooks.length > 0 ? (
              wishlistBooks.map((book) => (
                <BookCard key={book.bookId} book={book}></BookCard>
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

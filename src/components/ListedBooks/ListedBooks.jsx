import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../utility/localStorage";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const [seletedBooks, setSelectedBooks] = useState([]);
  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      const listedBooks = books.filter((book) =>
        storedBookIds.includes(book.bookId)
      );
      setSelectedBooks(listedBooks);
      console.log(listedBooks);
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

      <div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Read Books"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            Read Books
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Wishlist Books"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            {seletedBooks.map((book) => (
              <BookCard key={book.bookId} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;

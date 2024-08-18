import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="card card-side bg-base-100 shadow-xl my-5">
      <figure className="mt-10 bg-[#F3F3F3] rounded-sm m-8 p-5">
        <img
          className="w-[350px] h-[300px]"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title">{book.bookName}</h2>
        </div>
        <div>
          <p>By:{book.author}</p>
        </div>
        <div className="flex gap-3 items-center">
          <h2>Tags: </h2>
          <div className="flex gap-3">
            {book.tags.map((tag, idx) => (
              <div key={idx}>
                <p className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-2 rounded-lg">
                  #{tag}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <SlCalender></SlCalender>
            <h2>Year of Publishing: {book.yearOfPublishing}</h2>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <GoPeople></GoPeople>
            <h2>Publisher: {book.author}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <RiPagesLine></RiPagesLine>
            <h2>Page: {book.totalPages}</h2>
          </div>
        </div>
        <div className="grid grid-cols-3">
          <p>Category: {book.category}</p>
          <p>Rating: {book.rating}</p>
          <div>
            <Link to={`/bookDetails/${book.bookId}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
};
export default BookCard;

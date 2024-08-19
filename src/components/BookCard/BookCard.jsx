import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import { GoPeople } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  console.log(book);
  return (
    <div className="card card-side bg-base-100 my-5 border-2 md:p-2 md:flex grid">
      <figure className="mt-10 bg-[#F3F3F3] rounded-sm md:m-8 md:p-5">
        <img
          className="w-3/4 md:w-[130px] md:h-[180px]"
          src={book.image}
          alt={book.bookName}
        />
      </figure>
      <div className="card-body">
        <div>
          <h2 className="card-title text-2xl">{book.bookName}</h2>
        </div>
        <div>
          <p className="font-medium">By: {book.author}</p>
        </div>
        <div className="md:flex gap-3 items-center">
          <div className="flex gap-3 items-center">
          <h2>Tags: </h2>
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
        <div className="md:flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <GoPeople></GoPeople>
            <h2>Publisher: {book.author}</h2>
          </div>
          <div className="flex gap-2 items-center">
            <RiPagesLine></RiPagesLine>
            <h2>Page: {book.totalPages}</h2>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div>
            <p className="bg-[#91b3dd] text-blue-800 py-2 px-5 rounded-3xl">
              Category: {book.category}
            </p>
          </div>
          <div>
            <p className="bg-[#eed3a0] text-orange-600 py-2 px-5 rounded-3xl">
              Rating: {book.rating}
            </p>
          </div>
          <div className="bg-[#23BE0A] text-white py-2 px-5 rounded-3xl">
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

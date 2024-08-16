import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;
  // console.log(bookId)
  return (
    <Link
      to={`/bookDetails/${bookId}`}
      className="card bg-base-100 border-2 px-5 rounded-md"
    >
      <figure className="mt-10 bg-[#F3F3F3] rounded-sm m-8 p-5">
        <img className="w-[350px] h-[300px]" src={image} alt="image" />
      </figure>
      <div className="flex gap-3">
        {tags.map((tag, idx) => (
          <div key={idx}>
            <p className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-2 rounded-lg">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-4">{bookName}</h2>
      <p>By: {author}</p>
      <hr className="my-5" />
      <div className="flex items-center justify-between mb-5">
        <p>{category}</p>
        <div className="flex items-center gap-1">
          <p>{rating}</p>
          <IoMdStarOutline className="text-orange-400 text-xl"></IoMdStarOutline>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;

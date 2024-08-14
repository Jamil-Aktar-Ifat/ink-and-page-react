import "./Book.css";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { image, bookName, author, category, rating, tags } = book;
  return (
    <Link to="/bookDetails" className="card bg-base-100 border-2 px-5">
      <figure className="mt-10 bg-[#F3F3F3] rounded-sm m-8 p-5">
        <img src={image} alt="image" className="" />
      </figure>
      <div className="flex gap-3">
        {tags.map((tag) => (
          <div>
            <p className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-2 rounded-lg">
              {" "}
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
          <IoMdStarOutline className="star text-xl"></IoMdStarOutline>
        </div>
      </div>
    </Link>
  );
};

export default Book;

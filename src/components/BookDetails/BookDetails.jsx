import { Link, useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  try {
    const books = useLoaderData();
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);

    // console.log("Books data in component:", books);

    // Ensure books is an array
    if (!Array.isArray(books)) {
      throw new Error("Books data is not an array");
    }

    const book = books.find((book) => parseInt(book.bookId) === bookIdInt);
    console.log(book);

    if (!book) {
      return <div>Book not found</div>;
    }
    {
      /* <img src={`../../../public/${book.image}`} alt="" /> */
    }

    return (
      <div className="card lg:card-side ">
        <figure>
          <img
            className="bg-[#1313130D] h-[600px] p-20 rounded-md m-4"
            src={`../../../public/${book.image}`}
            alt={book.bookName}
          />
        </figure>
        <div className="card-body">
          <div>
            <h2 className="card-title text-3xl">{book.bookName}</h2>
          </div>
          <div>
            <p className="font-medium">By: {book.author}</p>
          </div>
          <div>
            <hr className="m-0 p-0" />
          </div>
          <div>
            <p className="font-medium">{book.category}</p>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <p>
              <span className="font-bold">Review:</span> {book.review}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <p className="font-bold">Tags</p>
            </div>
            <div className="flex gap-3">
              {book.tags.map((tag, idx) => (
                <div key={idx}>
                  <p className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-2 rounded-lg">
                    #{tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <p className="my-2">
              Number of Pages:{" "}
              <span className="font-semibold">{book.totalPages}</span>
            </p>
            <p className="mb-2">
              Publisher: <span className="font-semibold">{book.publisher}</span>
            </p>
            <p className="mb-2">
              Year of Publishing:{" "}
              <span className="font-semibold">{book.yearOfPublishing}</span>
            </p>
            <p className="my-2">
              Rating: <span className="font-semibold">{book.rating}</span>
            </p>
          </div>
          <div className="mt-5">
            <Link className="border-2 px-7 py-4 rounded-md font-semibold mr-4 bg-none">
              Read
            </Link>
            <Link className="border-2 border-[#50B1C9] px-7 py-4 rounded-md font-semibold mr-4 text-white bg-[#50B1C9]">
              WishList
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in BookDetails:", error);
    return <div>An error occurred: {error.message}</div>;
  }
};

export default BookDetails;

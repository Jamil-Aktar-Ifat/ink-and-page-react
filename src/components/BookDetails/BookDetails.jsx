import { useLoaderData, useParams } from "react-router-dom";

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
          <img src={`../../../public/${book.image}`} alt={book.bookName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.bookName}</h2>
          <p>By: {book.author}</p>
          <hr />
          <p>{book.category}</p>
          <hr />
          <p>Review: {book.review}</p>
          <div className="flex gap-5 items-center">
            <div>
              <p>Tags</p>
            </div>
            <div className="flex gap-3">
              {book.tags.map((tag, idx) => (
                <div key={idx}>
                  <p className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-2 rounded-lg">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <p>Number of Pages: {book.totalPages}</p>
            <p>Publisher: {book.publisher}</p>
            <p>Year of Publishing: {book.yearOfPublishing}</p>
            <p>Rating: {book.rating}</p>
          </div>
          <div className="">
            <button className="btn btn-primary mr-6">Read</button>
            <button className="btn btn-primary">WishList</button>
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

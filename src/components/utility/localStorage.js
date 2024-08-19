const getStoredBooks = () => {
  const storedBook = localStorage.getItem("books");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBook = (bookId) => {
  const storedBooks = getStoredBooks();
  const exists = storedBooks.find((id) => id === bookId);
  if (!exists) {
    storedBooks.push(bookId);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

const getReadBooks = () => getStoredBooks("read-books");
const getWishlistBooks = () => getStoredBooks("wishlist-books");

const saveReadBooks = (bookId) => saveBook(bookId, "read-books");
const saveWishlistBooks = (bookId) => saveBook(bookId, "wishlist-books");

export {
  getStoredBooks,
  getReadBooks,
  getWishlistBooks,
  saveReadBooks,
  saveWishlistBooks,
};

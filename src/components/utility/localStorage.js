
const getStoredBooks = (key) => {
  const storedBooks = localStorage.getItem(key);
  if (storedBooks) {
    return JSON.parse(storedBooks);
  }
  return [];
};

// Utility to save books to a specific list (either "readBooks" or "wishlistBooks")
const saveBook = (bookId, key) => {
  const storedBooks = getStoredBooks(key);
  const exists = storedBooks.find((id) => id === bookId);
  if (!exists) {
    storedBooks.push(bookId);
    localStorage.setItem(key, JSON.stringify(storedBooks));
  }
};

// Retrieve "readBooks" and "wishlistBooks" from localStorage
const getReadBooks = () => getStoredBooks("read-books");
const getWishlistBooks = () => getStoredBooks("wishlist-books");

// Save to the specific list
const saveReadBook = (bookId) => saveBook(bookId, "read-books");
const saveWishlistBook = (bookId) => saveBook(bookId, "wishlist-books");

export { getReadBooks, getWishlistBooks, saveReadBook, saveWishlistBook };

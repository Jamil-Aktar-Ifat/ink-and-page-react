const getStoredBook = () => {
  const storedBook = localStorage.getItem("books");
  if (storedBook) {
    return JSON.parse(storedBook);
  }
  return [];
};

const saveBook = (bookId) => {
  const storedBooks = getStoredBook();
  const exists = storedBooks.find((id) => id === bookId);
  if (!exists) {
    storedBooks.push(bookId);
    localStorage.setItem("books", JSON.stringify(storedBooks));
  }
};

export { getStoredBook, saveBook };

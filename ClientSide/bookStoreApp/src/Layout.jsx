import { React, useState, useEffect } from 'react';
import './Layout.css';

const Layout = () => {
  const [books, setBooks] = useState([]);
  const [addBookVisible, setAddBookVisible] = useState(false);
  const [removeBookVisible, setRemoveBookVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newReleaseYear, setNewReleaseYear] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBook = async (event) => {
    event.preventDefault();

    const bookData = {
      title: newTitle,
      release_year: newReleaseYear,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      const data = await response.json();
      setBooks((prev) => [...prev, data]);
      setAddBookVisible(false);
      setNewTitle("");
      setNewReleaseYear(0);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}`, {
        method: "DELETE",
      });

      setBooks((prev) => prev.filter((book) => book.id !== pk));
      setRemoveBookVisible(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="side-bar">
        <button onClick={() => { setAddBookVisible(true); setRemoveBookVisible(false); }}>
          <img src="add.png" alt="Add" />
        </button>
        <button onClick={() => { setAddBookVisible(false); setRemoveBookVisible(true); }}>
          <img src="remove.png" alt="Remove" />
        </button>
      </div>

      <div className="book-list">
        {addBookVisible && (
          <div className="info-palette">
            <h2>Enter book information</h2>
            <form onSubmit={addBook}>
              <label htmlFor="BookName">Enter name:</label>
              <input
                id="BookName"
                type="text"
                placeholder="Book name"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                required
              />
              <label htmlFor="ReleaseYear">Enter release year:</label>
              <input
                id="ReleaseYear"
                type="number"
                placeholder="Release year"
                value={newReleaseYear}
                onChange={(e) => setNewReleaseYear(e.target.value)}
                min="1800"
                max="2025"
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {removeBookVisible && (
          <div className="remove-book-list">
            <h2>Click "Remove" to delete a book</h2>
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  {book.title} (Released in {book.release_year})
                  <button onClick={() => deleteBook(book.id)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(!addBookVisible && !removeBookVisible) && (
          <div className='book-list'>
            <h1>Here is your List of added books:</h1>
            <ul>
              {books.map((book) => (
                <li key={book.id}>
                  {book.title} (Released in {book.release_year})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;

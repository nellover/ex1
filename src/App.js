import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListBooks from "./book/ListBooks";
import EditBook from "./book/EditBook";
import AddBook from "./book/AddBook";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "fetati salati", author: "islem jamel" },
   
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const updateBook = (updatedBook) => {
    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    setBooks(updatedBooks);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <h1>Application de gestion des livres électroniques</h1>
        <button className="ui primary basic button">

        <Link to="/add" className="btn btn-primary">Ajouter un livre</Link>
        </button>

        <Routes>
          <Route
            path="/"
            element={<ListBooks books={books} deleteBook={deleteBook} />}
          />
          <Route path="/add" element={<AddBook addBook={addBook} />} />
          <Route
            path="/edit/:id"
            element={<EditBook books={books} updateBook={updateBook} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

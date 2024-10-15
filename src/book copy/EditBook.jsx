import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = ({ books, updateBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((book) => book.id === parseInt(id));
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook({ id: parseInt(id), title, author });
    navigate("/");
  };

  useEffect(() => {
    if (!book) {
      navigate("/");
    }
  }, [book, navigate]);

  return (
    <div>
      <h2>Editer un livre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Titre:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Auteur:</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Mettre à jour</button>
      </form>
    </div>
  );
};

export default EditBook;

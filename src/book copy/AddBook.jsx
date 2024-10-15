import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author });
    navigate("/");
  };

  return (
    <div>
      <h2>Ajouter un nouveau livre</h2>
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
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
};

export default AddBook;

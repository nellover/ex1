import React from "react";
import { Link } from "react-router-dom";

const ListBooks = ({ books, deleteBook }) => {
  return (
    <div>
      <table className="table  ui selectable inverted table">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Editer</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>
                <button className="  ui green button"> <Link to={`/edit/${book.id}`} 
                className="btn btn-success ui green button ">
                 <p>Editer</p> 
                </Link></button>
              </td>
              <td>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="btn btn-danger negative ui button "
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBooks;




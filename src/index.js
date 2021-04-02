import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import Book from "./Book";
import "./index.css";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
